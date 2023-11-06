import ListCard from "@/components/ListCard"

const getData = async () => {
    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion.json`)
    return res.json()
}

export default async function champion() {

    const data = await getData()

    return (
    <main className="champion">
            <h1>Les Champions de la faille de l'invocateur!</h1>
            <ul>
                {
                    Object.keys(data.data).map((d, index) => <ListCard index={ index } data={ data.data[d] } />)
                }
            </ul>
    </main>
    )
}