import Head from "next/head"
import VerticalsSlider from "../components/VerticalsSlider"


const ourBusinesses = () => {

    return (
        <>
            <Head>
                <title>Our Businesses | JSLL  Lifestyle</title>
                <meta name="description" content="Download Brochure" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <VerticalsSlider />
        </>
    )
}

export default ourBusinesses