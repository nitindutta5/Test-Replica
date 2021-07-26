import Head from "next/head"
import VerticalsSlider from "../components/VerticalsSlider"


const ourBusinesses = () => {

    return (
        <div>
            <Head>
                <title>Our Businesses | JSLL  Lifestyle</title>
                <meta name="description" content="Download Brochure" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <VerticalsSlider />
        </div >
    )
}

export default ourBusinesses