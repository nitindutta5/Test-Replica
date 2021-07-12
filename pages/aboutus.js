import Head from "next/head"
import Banner from "../components/Banner"
import Overlay from "../components/Overlay"
import AboutUs from "../components/AboutUs"
import Parallax from "../components/Parallax"
import Awards from "../components/Awards"
import TeamSection from "../components/TeamSection"
import CertificateCarousel from "../components/CertificateCarousel"

const About = ({ checkOpen }) => {
    return (
        <div>
            <Overlay checkOpen={checkOpen} />
            <Head>
                <title>About Us | JSLL  Lifestyle</title>
                <meta name="description" content="About Us Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/about.jpg" text="About Us" />
            <AboutUs />
            <Parallax />
            <TeamSection />
            <Awards />
            <CertificateCarousel />
        </div>
    )
}

export default About