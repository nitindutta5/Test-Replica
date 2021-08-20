import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container } from "reactstrap";

const jindalKitchen = ({ homeware, ModalToggle, UpdateName, UpdateFile, UpdateType }) => {
    const handleDownloadBrochure = (file, name, type) => {
        UpdateName(name);
        UpdateFile(file);
        UpdateType(type);
        ModalToggle();
    }

    return (
        <div>
            <Head>
                <title>Homeware</title>
                <meta name="description" content="Homeware" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src={homeware.Banner_Img.url} text="Homeware" />
            <Section1 data={homeware} type="homeware">{homeware.DescriptionBox.Title}</Section1>
            {
                homeware.SectionBox.map((Section,id)=>(
                    <Section2 key={id} data={Section.Section}>{Section.Title}</Section2>
                ))
            }

            <section className="pt-0">
                <Container className="d-flex justify-content-center">
                    <Button color="secondary" onClick={() => handleDownloadBrochure(homeware.File.url, "homeware", "downloadBrochure")} className="download">
                        <img src="../Download-Brochure_02.svg" />
                        Brochure</Button>
                    <a target="_blank" href="https://www.arttdinox.com/">
                        <Button color="secondary" className="ms-3">
                            Shop Now</Button>
                    </a>
                </Container>
            </section>
        </div>
    )
}
export async function getStaticProps() {
    const baseURL = process.env.API_URL;
    let data;
    try {
        const res = await fetch(baseURL + `brochures?slug=homeware`);
        data = await res.json();
    } catch (error) {
        console.log("Server Error Occured");
    }

    return {
        props: {
            homeware: data[0],
        }
    }
}

export default jindalKitchen