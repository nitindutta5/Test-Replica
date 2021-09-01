import Head from "next/head"
import Banner from "../components/Banner"
import CareerIntro from "../components/CareerIntro"
import MainCareer from "../components/Career/MainCareer"
import NotFound from '../components/Career/NotFound'

const Careers = ({jobs}) => {
    return (
        <>
            <Head>
                <title>Career | JSLL  Lifestyle</title>
                <meta name="description" content="Media Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/JSLL_Careers-page_Banner.jpg" text="Jindal CAREERS" />
            <CareerIntro />
            <MainCareer data={jobs}/>
            <NotFound/>
        </>
    )
}
export async function getStaticProps() {
    const baseURL = process.env.API_URL;
    let data;
    try {
        const res = await fetch(baseURL + `jobs`);
        data = await res.json();
    } catch (error) {
        console.log("Server Error Occured");
    }

   

    return {
        props: {
            jobs: data,
        }
    }
}
export default Careers