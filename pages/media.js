import Head from "next/head"
import Banner from "../components/Banner"
import Blogs from "../components/Blogs/Blogs"
import CaseStudies from "../components/CaseStudies"
import News_Updates from "../components/News_Updates"
import Testimonials from "../components/Testimonials"
import VideoGallery from "../components/VideoGallery"


const Media = ({blogs}) => {
    return (
        <>
            <Head>
                <title>Media | JSLL  Lifestyle</title>
                <meta name="description" content="Media Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/media.png" text="JSLL LIFESTYLE DIARIES" />
            <Blogs data={blogs}/>
            <CaseStudies />
            <News_Updates />
            <Testimonials />
            <VideoGallery />
        </>
    )
}
export async function getStaticProps() {
    const baseURL = process.env.API_URL;
    let data;
    try {
        const res = await fetch(baseURL + `blogs?_sort=Id:desc`);
        data = await res.json();
    } catch (error) {
        console.log("Server Error Occured");
    }

    return {
        props: {
            blogs: data,
        }
    }
}

export default Media