
const ListCard = (props) => {
    return <li key={ props.index }>
        <article>
            <h3>{ props.data.name }</h3>
        </article>
        <figure>
            <img src={ `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.data.id}`+`_0.jpg` } alt={ `image ${ props.data.name }` } />
        </figure>
    </li>
}

export default ListCard