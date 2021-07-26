import Head from "next/head"
import Banner from "../components/Banner"
import GrandTimeline from "../components/GrandTimeline"
import LegacyContentBox from '../components/LegacyContentBox'
import Figures from '../components/Figures'

const Legacy = () => {
    return (
        <div>
            <Head>
                <title>Legacy | JSLL  Lifestyle</title>
                <meta name="description" content="About Us Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/legacy.png" text="Our Legacy" />
            <section>
                <h1 className="text-center heading">The Grand Timeline</h1>
                <GrandTimeline />
            </section>
            <section className="pt-0">
                <LegacyContentBox />
            </section>
            <Figures />

        </div>
    )
}

export default Legacy