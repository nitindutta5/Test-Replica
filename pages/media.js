import Head from "next/head"
import Banner from "../components/Banner"
import Blogs from "../components/Blogs/Blogs"
import CaseStudies from "../components/CaseStudies"
import News_Updates from "../components/News_Updates"
import Testimonials from "../components/Testimonials"
import VideoGallery from "../components/VideoGallery"
import NextBtn from "../components/NextBtn";
import Previous from "../components/Previous";



const _sliderConfig = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <Previous />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const Media = ({ blogs, caseStudyData, mediaData, ModalToggle, UpdateName, UpdateFile, UpdateType }) => {
    const videoData = [{ video: "https://player.vimeo.com/video/534314647", title: "Value Engineering", time: "4min" }];
    return (
        <>
            <Head>
                <title>Media | JSLL  Lifestyle</title>
                <meta name="description" content="Media Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/media.jpg" text="JSL LIFESTYLE DIARIES" />
            <Blogs data={blogs} />
            <CaseStudies
                data={caseStudyData}
                title="Case Studies"
                sliderConfig={_sliderConfig}
                ModalToggle={ModalToggle} UpdateFile={UpdateFile} UpdateName={UpdateName} UpdateType={UpdateType}
            />
            <News_Updates data={mediaData} />
            <Testimonials />
            <VideoGallery data={videoData} dimension={1080 / 1920} />
        </>
    )
}
export async function getStaticProps() {
    const baseURL = process.env.API_URL;
    let data, caseStudies, media;
    try {
        const res = await fetch(baseURL + `blogs?_sort=Id:desc`);
        const res1 = await fetch(baseURL + `case-studies?_sort=Id:desc`);
        const res2 = await fetch(baseURL + `media-contents?_sort=Id:desc`);
        data = await res.json();
        caseStudies = await res1.json();
        media = await res2.json();
    } catch (error) {
        console.log("Server Error Occured");
    }

    return {
        props: {
            blogs: data,
            caseStudyData: caseStudies,
            mediaData: media
        }
    }
}

export default Media