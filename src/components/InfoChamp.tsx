import Link from "next/link";
import Spells from "@/components/Spells";


const InfoChamp = (props : object) => {

    const url = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.data.id}_0.jpg`
    const imageStyle = {
        backgroundImage : `url(${ url })`
    }

    return (
        <>
            <section key={ props.index } style={imageStyle} className="infoChampion">
                 <img className="chepa" src={ url } alt="Champion"/>
                <section>
                    <h3>{props.data.title}</h3>
                    <h1>{props.data.name}</h1>
                    <article>
                        <p>{props.data.lore}</p>
                    </article>
                </section>
            </section>
        </>
    )
}

export default InfoChamp