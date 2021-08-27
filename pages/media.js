import Head from "next/head"
import Banner from "../components/Banner"
import Blogs from "../components/Blogs/Blogs"
import CaseStudies from "../components/CaseStudies"
import News_Updates from "../components/News_Updates"
import Testimonials from "../components/Testimonials"
import VideoGallery from "../components/VideoGallery"
import NextBtn from "../components/NextBtn";
import Previous from "../components/Previous";

const caseData = [
    {
        img: "../casestudies/1.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021"
    },
    {
        img: "../casestudies/2.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum"
    },
    {
        img: "../casestudies/3.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021"
    },
    {
        img: "../casestudies/1.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021"
    }
];

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

const Media = ({ blogs }) => {
    const videoData = [{ video: "https://player.vimeo.com/video/534314647", title: "Value Engineering", time: "4min" }];
    return (
        <>
            <Head>
                <title>Media | JSLL  Lifestyle</title>
                <meta name="description" content="Media Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/media.png" text="JSLL LIFESTYLE DIARIES" />
            <Blogs data={blogs} />
            <CaseStudies
                data={caseData}
                title="Case Studies"
                sliderConfig={_sliderConfig}
            />
            <News_Updates />
            <Testimonials />
            <VideoGallery data={videoData} dimension={1080 / 1920} />
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