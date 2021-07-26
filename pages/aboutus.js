import Head from "next/head"
import Banner from "../components/Banner"
import AboutUs from "../components/AboutUs"
import Parallax from "../components/Parallax"
import Awards from "../components/Awards"
import TeamSection from "../components/TeamSection"
import CertificateCarousel from "../components/CertificateCarousel"
import Apart from "../components/Apart"

const About = () => {
    return (
        <div>
            <Head>
                <title>About Us | JSLL  Lifestyle</title>
                <meta name="description" content="About Us Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/about.jpg" text="About Us" />
            <AboutUs />
            <Parallax />
            <Apart />
            <TeamSection />
            <Awards />
            <CertificateCarousel />
        </div>
    )
}

export default About