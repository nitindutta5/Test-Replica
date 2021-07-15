import Head from "next/head"
import Banner from "../components/Banner"
import Overlay from "../components/Overlay"


const Careers = ({ checkOpen }) => {
    return (
        <div>
            <Overlay checkOpen={checkOpen} />
            <Head>
                <title>Career | JSLL  Lifestyle</title>
                <meta name="description" content="Media Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/media.png" text="JSLL CAREERS" />
        </div>
    )
}

export default Careers