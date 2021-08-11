import Head from "next/head"
import VerticalsSlider from "../components/VerticalsSlider"


const ourBusinesses = ({verticals, ModalToggle, UpdateName, UpdateFile, UpdateType }) => {

    return (
        <>
            <Head>
                <title>Our Businesses | JSLL  Lifestyle</title>
                <meta name="description" content="Download Brochure" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <VerticalsSlider data={verticals} ModalToggle={ModalToggle} UpdateFile={UpdateFile} UpdateName={UpdateName} UpdateType={UpdateType}/>
        </>
    )
}
export async function getStaticProps() {
    const baseURL = process.env.API_URL;
    let data;
    try {
        const res = await fetch(baseURL + 'brochures');
        data = await res.json();
    } catch (error) {
        console.log("Server Error Occured");
    }

    return {
        props: {
            verticals: data,
        }
    }
}

export default ourBusinesses