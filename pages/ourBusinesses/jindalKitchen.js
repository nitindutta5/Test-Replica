import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container } from "reactstrap";

const jindalKitchen = ({ jindalKitchen, ModalToggle, UpdateName, UpdateFile, UpdateType }) => {

    const handleForm = (file, name, type) => {
        UpdateName(name);
        UpdateFile(file);
        UpdateType(type);
        ModalToggle();
    }
    return (
        <>
            <Head>
                <title>Jindal Kitchen</title>
                <meta name="description" content="Download Brochure" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/Kitchens.jpg" text="Jindal Kitchen" />
            <Section1 data={jindalKitchen} type="kitchen">{jindalKitchen.BrandBox.Title}</Section1>
            {
                jindalKitchen.SectionBox.map((Section,id)=>(
                    <Section2 key={id} data={Section.Section}>{Section.Title}</Section2>
                ))
            }
            <section className="pt-0">
                <Container className="d-flex justify-content-center">
                <Button color="secondary" onClick={() => handleForm(jindalKitchen.File.url, "jindalKitchen", "downloadBrochure")} className="download">
                        <img src="../Download-Brochure_02.svg" />
                        Brochure</Button>
                    <Button color="secondary" onClick={() => handleForm("", "jindalKitchen", "enquiry")} className="ms-3">
                        Enquire</Button>
                </Container>
            </section>
        </>
    )
}
export async function getStaticProps() {
    const baseURL = process.env.API_URL;
    let data;
    try {
        const res = await fetch(baseURL + `brochures?slug=jindalKitchen`);
        data = await res.json();
    } catch (error) {
        console.log("Server Error Occured");
    }

    return {
        props: {
            jindalKitchen: data[0],
        }
    }
}

export default jindalKitchen