import backgroudImage from '../../public/images/EGS_LeagueofLegends_RiotGames_S1_2560x1440-2935d0a3e332decb8e727fe56789b6ab.jpg'
import Image from "next/image";
export default async function Page() {

    return(
        <main className="home">
            <section className="banner">
                <Image src={backgroudImage} alt="Image League of Legend"></Image>
            </section>
        </main>
    )

}