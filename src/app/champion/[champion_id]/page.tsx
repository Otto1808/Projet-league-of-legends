import InfoChamp from "@/components/InfoChamp";
import Spells from "@/components/Spells";

const getData = async (champion_id: string | number) =>{
    const res  = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.21.1/data/fr_FR/champion/${champion_id}`+`.json`)
    return res.json()
}


export default async function page({ params } : { params : {champion_id : string | number} }){

    const data = await getData(params.champion_id)

    return(
        <main className="champion">
                {
                    Object.keys(data.data).map((d : string) => <>
                        <InfoChamp  data={data.data[d]} />
                            <Spells data={ data.data[d]} />
                    </>
                    )
                }
        </main>
    )
}