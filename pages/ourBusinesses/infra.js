import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container } from "reactstrap";

const Infra = () => {
    const data = {
        type: "infra",
        brands: [
            {
                bold: "",
                content: "At JSLL Infra, we are committed to dynamic and versatile services that drives us to enhance commercial, residential and public sector projects. A wide variety of products such as benches, claddings, dustbins, facades, bus shelters, toilets, etc. ensures that the broad need of every unique project is met with efficient stainless steel solutions. Being a zero maintenance and environment-friendly material, stainless steel is the first choice for architects, builders, planners, etc."
            }
        ],
        icons: [
            {
                img: "../../verticals/infra/Icons/Corrosion-Protection.png",
                title: "Corrosion Protection"
            },
            {
                img: "../../verticals/infra/Icons/Durable.png",
                title: "Durable"
            },
            {
                img: "../../verticals/infra/Icons/Eco-Friendly.png",
                title: "Eco-Friendly"
            },
            {
                img: "../../verticals/infra/Icons/Fire-Resistant.png",
                title: "Fire Resistant"
            },
            {
                img: "../../verticals/infra/Icons/High-Aesthetic-Value.png",
                title: "High Aesthetic Value"
            },
            {
                img: "../../verticals/infra/Icons/Hygienic.png",
                title: "Hygienic"
            },
            {
                img: "../../verticals/infra/Icons/Long-Lasting.png",
                title: "Long Lasting"
            },
            {
                img: "../../verticals/infra/Icons/Low-Maintenance.png",
                title: "Low Maintenance"
            },
            {
                img: "../../verticals/infra/Icons/Termite-Free.png",
                title: "Termite Free"
            }
        ],
        products: [
            {
                img: "../../verticals/infra/products/Street-Furniture.jpg",
                title: "Street Furniture",
                content: ""
            },
            {
                img: "../../verticals/infra/products/Infra-Interior.jpg",
                title: "Infra Interiors",
                content: ""
            },
            {
                img: "../../verticals/infra/products/Infra-Exterior.jpg",
                title: "Infra Exteriors",
                content: ""
            },
            {
                img: "../../verticals/infra/products/Art-Installation.jpg",
                title: "Art & Sculptures",
                content: ""
            }
        ]
    };
    return (
        <div>
            <Head>
                <title>Infra</title>
                <meta name="description" content="Infra" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/Infra.jpg" text="Infra Solutions" />
            <Section1 data={data} title2="Why Stainless Steel">Crafting Designs Redefining Functionality</Section1>
            <Section2 data={data.products}>Our Range of Products</Section2>
            <section className="pt-0">
                <Container>
                    <Button color="secondary" className="download mx-auto">
                        <img src="../Download-Brochure_02.svg" />
                        Brochure</Button>
                </Container>
            </section>
        </div>
    )
}

export default Infra