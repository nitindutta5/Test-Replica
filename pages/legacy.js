import Head from "next/head"
import Banner from "../components/Banner"
import Overlay from "../components/Overlay"


const Legacy = ({ checkOpen }) => {
    return (
        <div>
            <Overlay checkOpen={checkOpen} />
            <Head>
                <title>Legacy | JSLL  Lifestyle</title>
                <meta name="description" content="About Us Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/legacy.jpg" text="Our Legacy" />
           
        </div>
    )
}

export default Legacy