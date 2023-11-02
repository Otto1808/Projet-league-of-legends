
const ListCard = (props) => {
    return (
        <li key={ props.index }>
            <figure>
                <img src={ `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.data.id}`+`_0.jpg` } alt={ `image ${ props.data.name }` } />
            </figure>
            <article>
                <h3>{ props.data.name }</h3>
            </article>
        </li>
    )
}

export default ListCard