import Head from "next/head"
import Banner from "../components/Banner"
import AboutUs from "../components/AboutUs"
import Parallax from "../components/Parallax"
import Awards from "../components/Awards"
import TeamSection from "../components/TeamSection"
import CertificateCarousel from "../components/CertificateCarousel"
import Apart from "../components/Apart"
import { parallaxData } from "../Data"


const About = () => {
    const data = parallaxData.aboutUs
    return (
        <>
            <Head>
                <title>About Us | JSLL  Lifestyle</title>
                <meta name="description" content="About Us Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/About-us_Banner.jpg" text="About Us" />
            <AboutUs />
            <Parallax data={data} filterEffect={true} />
            <Apart />
            <TeamSection />
            <Awards />
            <CertificateCarousel />
        </>
    )
}

export default About