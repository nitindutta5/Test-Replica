import Head from "next/head"
import Banner from "../components/Banner"
import OurMachines from "../components/OurMachines"
import VerticalPlantCarousel from "../components/VerticalPlantCarousel"

const Plants_Machines = () => {
    return (
        <>
            <Head>
                <title>Plants & Machines | Jindal Lifestyle</title>
                <meta name="description" content="Our Plants & Machine Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/why-stainless.png" text="Our Manufacturing Units & Equipments" />
            <VerticalPlantCarousel />
            <OurMachines />
        </>
    )
}

export default Plants_Machines