import Head from "next/head"
import Banner from "../components/Banner"
import CareerIntro from "../components/CareerIntro"


const Careers = () => {
    return (
        <div>
            <Head>
                <title>Career | JSLL  Lifestyle</title>
                <meta name="description" content="Media Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/Career.png" text="JSLL CAREERS" />
            <CareerIntro />
        </div>
    )
}

export default Careers