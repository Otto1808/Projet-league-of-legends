export default function Spells(props:object){
    function idVideo() {
        let result = ""
        switch (props.data.key.length){
            case 1 : result = `000${props.data.key}`
                break
            case 2 : result = `00${props.data.key}`
                break
            case 3 : result = `0${props.data.key}`
                break
        }
        return result
    }

    console.log(props.data.id)

    return(
        <section className="spellContainer">
            <section className="spells">
                <section>
                    <h1>Compétences</h1>
                    <ul>
                        <li><img className="passive" src={`https://ddragon.leagueoflegends.com/cdn/13.22.1/img/passive/${props.data.passive.image.full}`}/></li>
                        {
                            props.data.spells.map((spell, index) => (
                                <li key={ index }><img src={ `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${spell.id}.png` }/></li>
                            ))
                        }
                    </ul>
                    <article>
                        <h3>Passive</h3>
                        <h2>{props.data.passive.name}</h2>
                        <p>{props.data.passive.description}</p>
                    </article>
                </section>
            </section>
            <video width={300} muted={true} loop={true} autoPlay={true}>
                <source src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${idVideo()}/ability_${idVideo()}_P1.webm`} type="video/webm"/>
            </video>
        </section>
    )
}