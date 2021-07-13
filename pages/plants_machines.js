import Head from "next/head"
import Banner from "../components/Banner"
import OurBusinesses from "../components/OurBusinesses"
import OurMachines from "../components/OurMachines"
import Overlay from "../components/Overlay"
import VerticalPlantCarousel from "../components/VerticalPlantCarousel"

const Plants_Machines = ({ checkOpen }) => {
    return (
        <div>
            <Overlay checkOpen={checkOpen} />
            <Head>
                <title>Plants & Machines | JSLL  Lifestyle</title>
                <meta name="description" content="Our Plants & Machine Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/why-stainless.png" text="Our Plant & Machines" />
            <VerticalPlantCarousel />
            <OurMachines />
        </div>
    )
}

export default Plants_Machines