import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";

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
                img: "../../verticals/kitchen/products/Homeware.png",
                title: "Street Furniture",
                content: "A combination of clean lines and purity of form meets custom-crafted storage and attention to detail with an added character and charm of seamless versatility."
            },
            {
                img: "../../verticals/kitchen/products/Kitchens.png",
                title: "Infra Interiors",
                content: "Explore our world of exquisite bespoke kitchens to suit all your moods. ARC seamlessly integrates durable and hygienic surface materials keeping in mind beauty and function, with efficiency and style."
            },
            {
                img: "../../verticals/kitchen/products/Wardrobe.png",
                title: "Infra Exteriors",
                content: "The style against which all others are measured in a modern home. It's time to amp up the ultimate design statement that is full of rustic charm, yet is contemporary and minimal."
            },
            {
                img: "../../verticals/kitchen/products/Vanity.png",
                title: "Art & Sculptures",
                content: "Inspired by sleek design harmony throughout, with minimal detailing and finishes that are striking in their simplicity; ARC meticulously blends in bespoke craftsmanship with clutter-free living."
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
            <Banner src=".././banner/jindalkitchen.png" text="Infra Solutions" />
            <Section1 data={data} title2="Why Stainless Steel">Crafting Designs Redefining Functionality</Section1>
            <Section2 data={data.products}>Our Range of Products</Section2>
        </div>
    )
}

export default Infra