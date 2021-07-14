import Head from "next/head"
import Banner from "../components/Banner"
import Blogs from "../components/Blogs/Blogs"
import CaseStudies from "../components/CaseStudies"
import Overlay from "../components/Overlay"


const Media = ({ checkOpen }) => {
    return (
        <div>
            <Overlay checkOpen={checkOpen} />
            <Head>
                <title>Media | JSLL  Lifestyle</title>
                <meta name="description" content="Media Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/media.png" text="JSLL LIFESTYLE DIARIES" />
            <Blogs />
            <CaseStudies />
        </div>
    )
}

export default Media