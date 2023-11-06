import Link from "next/link";

export default function Header(){
    return(
        <header>
            <p>League Of Chepa</p>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/champions'}>Champions</Link></li>
                <li><Link href={'/items'}>Items</Link></li>
                <li><Link href={'https://signup.leagueoflegends.com/fr-fr/signup/index'}>Jouer</Link></li>
            </ul>

        </header>
    )
}