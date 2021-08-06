import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container } from "reactstrap";

const jindalKitchen = () => {
    const data = {
        type: "kitchen",
        brands: [
            {
                logo: "../../verticals/kitchen/kitchen.png",
                bold: "Looking for an ideal kitchen partner which boasts of the<br/> perfect combination of aesthetics & functionality?",
                content: "ARC is committed towards creating a ‘healthy stainless steel culture’ for Indian homes by making stylish and sustainable life experiences, achieved by blending modern sensibilities with value designs and durability. Today, and in the future, the kitchen takes a central position in the home as a multifunctional space. And we believe in beautifully transforming the heart of the home in vivid hues that integrate functional as well as alluring elements into the space; whilst preventing any hazards, be it — fire, termites, water damage or harmful bacteria. Moreover, an ARC Kitchen comes with a warranty of 5 years & is also 100% eco-friendly."
            },
            {
                logo: "../../verticals/kitchen/Arttdinox_Logo.svg",
                bold: "Bespoke Indulgence <br/>For a kitchen as unique as you.",
                content: "The kitchen is the heart of your home. At Arttd’inox, we make sure it’s also an epicenter of refinement, efficiency, and creativity. Ergonomically sculpted and spatially bespoke, an Arttd’inox Kitchen balances the chic of modernity with the gravitas of heritage to make for easy movement and convenient cooking - while evoking an enduring statement about your taste. Every Arttd’inox kitchen is a blend of meticulous craftsmanship, technical sophistication, and quality workmanship. The design is tailored to the lifestyle and personal taste of the homeowner, so the result is an exquisite bespoke kitchen that is not only functional but truly beautiful."
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
                img: "../../verticals/kitchen/products/Homeware.jpg",
                title: "Homeware",
                content: "A combination of clean lines and purity of form meets custom-crafted storage and attention to detail with an added character and charm of seamless versatility."
            },
            {
                img: "../../verticals/kitchen/products/Kitchen.jpg",
                title: "Kitchens",
                content: "Explore our world of exquisite bespoke kitchens to suit all your moods. ARC seamlessly integrates durable and hygienic surface materials keeping in mind beauty and function, with efficiency and style."
            },
            {
                img: "../../verticals/kitchen/products/Wardrobe.jpg",
                title: "Wardrobe",
                content: "The style against which all others are measured in a modern home. It's time to amp up the ultimate design statement that is full of rustic charm, yet is contemporary and minimal."
            },
            {
                img: "../../verticals/kitchen/products/Vanity.jpg",
                title: "Vanity",
                content: "Inspired by sleek design harmony throughout, with minimal detailing and finishes that are striking in their simplicity; ARC meticulously blends in bespoke craftsmanship with clutter-free living."
            }
        ]
    };
    return (
        <>
            <Head>
                <title>Jindal Kitchen</title>
                <meta name="description" content="Download Brochure" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/Kitchens.jpg" text="Jindal Kitchen" />
            <Section1 data={data} title2="Why Choose Us">Our Brands</Section1>
            <Section2 data={data.products}>Our Range of Products</Section2>
            <section className="pt-0">
                <Container>
                    <Button color="secondary" className="download mx-auto">
                        <img src="../Download-Brochure_02.svg" />
                        Brochure</Button>
                </Container>
            </section>
        </>
    )
}

export default jindalKitchen