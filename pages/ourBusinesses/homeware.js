import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container } from "reactstrap";

const jindalKitchen = () => {
    const data = {
        type: "homeware",
        brands: [
            {
                content: "Arttd’inox was born out of the belief that art is a holistic expansion of global décor identities, further enhanced by the functionality and beauty of high-quality stainless steel. These contemporary home lifestyle products juxtapose traditional elegance and Karigari with modern whimsy, making each product a timeless masterpiece."
            }
        ],
        icons: [
            {
                img: "../../verticals/kitchen/Icons/01_Termite-Proof.png",
                title: "Termite Proof"
            },
            {
                img: "../../verticals/kitchen/Icons/02_Fire-Resistant.png",
                title: "Fire Resistant"
            },
            {
                img: "../../verticals/kitchen/Icons/03_Range-of-Hues.png",
                title: "Range of Hues"
            },
            {
                img: "../../verticals/kitchen/Icons/04_Timely-Delivery.png",
                title: "Timely Delivery"
            },
            {
                img: "../../verticals/kitchen/Icons/05_Water-Resistant.png",
                title: "Water Resistant"
            },
            {
                img: "../../verticals/kitchen/Icons/06_EcoFriendly.png",
                title: "Eco Friendly"
            }
        ],
        products: [
            {
                img: "../../verticals/kitchen/products/Homeware.png",
                title: "Tableware",
                content: "A combination of clean lines and purity of form meets custom-crafted storage and attention to detail with an added character and charm of seamless versatility."
            },
            {
                img: "../../verticals/kitchen/products/Kitchens.png",
                title: "Serveware",
                content: "Explore our world of exquisite bespoke kitchens to suit all your moods. ARC seamlessly integrates durable and hygienic surface materials keeping in mind beauty and function, with efficiency and style."
            },
            {
                img: "../../verticals/kitchen/products/Wardrobe.png",
                title: "Dinnerware",
                content: "The style against which all others are measured in a modern home. It's time to amp up the ultimate design statement that is full of rustic charm, yet is contemporary and minimal."
            },
            {
                img: "../../verticals/kitchen/products/Vanity.png",
                title: "Barware",
                content: "Inspired by sleek design harmony throughout, with minimal detailing and finishes that are striking in their simplicity; ARC meticulously blends in bespoke craftsmanship with clutter-free living."
            }
        ]
    };
    return (
        <div>
            <Head>
                <title>Homeware</title>
                <meta name="description" content="Homeware" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/Homeware.jpg" text="Homeware" />
            <Section1 data={data} title2="Why Choose Us">Our Brands</Section1>
            <Section2 data={data.products}>Our Range of Products</Section2>
            <section className="pt-0">
                <Container className="d-flex justify-content-center">
                    <Button color="secondary" className="download">
                        <img src="../Download-Brochure_02.svg" />
                        Brochure</Button>
                    <Button color="secondary" className="ms-3">
                        Shop Now</Button>
                </Container>
            </section>
        </div>
    )
}

export default jindalKitchen