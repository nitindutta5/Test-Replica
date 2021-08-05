import Head from "next/head"
import Banner from "../components/Banner"
import OurMachines from "../components/OurMachines"
import VerticalPlantCarousel from "../components/VerticalPlantCarousel"

const Plants_Machines = () => {
    return (
        <div>
            <Head>
                <title>Plants & Machines | JSLL  Lifestyle</title>
                <meta name="description" content="Our Plants & Machine Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/why-stainless.png" text="Our Plants & Machines" />
            <VerticalPlantCarousel />
            <OurMachines />
        </div>
    )
}

export default Plants_Machines