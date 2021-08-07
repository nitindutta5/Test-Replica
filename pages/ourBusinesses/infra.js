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
                img: "../../verticals/infra/Icons/01_Fire-Resistance.png",
                title: "Fire Resistance"
            },
            {
                img: "../../verticals/infra/Icons/02_Termite-Free.png",
                title: "Termite-Free"
            },
            {
                img: "../../verticals/infra/Icons/03_Corrosion-Protection.png",
                title: "Corrosion Protection"
            },
            {
                img: "../../verticals/infra/Icons/04_Light-Weight.png",
                title: "Light-Weight"
            },
            {
                img: "../../verticals/infra/Icons/05_Longevity.png",
                title: "Longevity"
            },
            {
                img: "../../verticals/infra/Icons/06_Smooth-Stainless-Steel-Bore.png",
                title: "06_Smooth-Stainless-Steel-Bore.png"
            },
            {
                img: "../../verticals/infra/Icons/07_Hygienic.png",
                title: "Hygienic"
            },
            {
                img: "../../verticals/infra/Icons/08_High-Pressure-Resistance.png",
                title: "High Pressure Resistance"
            },
            {
                img: "../../verticals/infra/Icons/09_Low-Maintenance.png",
                title: "Low-Maintenance"
            },
            {
                img: "../../verticals/infra/Icons/10_Aesthetic-Value.png",
                title: "Aesthetic Value"
            },
            {
                img: "../../verticals/infra/Icons/11_Durable.png",
                title: "Durable"
            },
            {
                img: "../../verticals/infra/Icons/12_Eco-Friendly.png",
                title: "Eco Friendly"
            }
        ],
        products: [
            {
                img: "../../verticals/infra/products/Street-Furniture.jpg",
                title: "Street Furniture",
                content: "We create the finest grade stainless steel street furniture that is easy to install, and stands firm against all climatic changes. These are easy to clean, corrosion-resistant, and last for decades."
            },
            {
                img: "../../verticals/infra/products/Infra-Interior.jpg",
                title: "Infra Interiors",
                content: "Giving your homes and corporate offices a niche and stunning appeal with modern stainless steel interiors."
            },
            {
                img: "../../verticals/infra/products/Infra-Exterior.jpg",
                title: "Infra Exteriors",
                content: "Innovative stainless steel exteriors, designed to build a new face of the Indian urban infrastructure."
            },
            {
                img: "../../verticals/infra/products/Art-Installation.jpg",
                title: "Art & Sculptures",
                content: "High-caliber welding is involved in making stainless steel arts and sculptures. We have all innovative technologies to shape and reshape the structures and bring an aesthetic revolution to urban art."
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