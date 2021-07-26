import Head from "next/head"
import Banner from "../components/Banner"
import Blogs from "../components/Blogs/Blogs"
import CaseStudies from "../components/CaseStudies"
import News_Updates from "../components/News_Updates"
import Testimonials from "../components/Testimonials"
import VideoGallery from "../components/VideoGallery"


const Media = () => {
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
            <News_Updates />
            <Testimonials />
            <VideoGallery />
        </div>
    )
}

export default Media