import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";

const mobility = () => {
    const data = {
        type: "mobility",
        brands: [
            {
                content: "JSLL Mobility caters to the mobility sector, especially Indian Railways and Delhi Metro. Our optimally manufactured products lend great strength and longer durability to the trains along with providing ease and comfort to the commuters. The components of stainless steel range in many grades that are used in railways operations. We majorly use austenitic stainless-steel in grades 301LN, 201, 301, 201LN and 304 which are used in the construction of railway coaches to build components of ferritic stainless steel 409M / IRSM 44 97 and Nitronic 30 that is majorly used for freight wagons."
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
                title: "Homeware",
                content: "A combination of clean lines and purity of form meets custom-crafted storage and attention to detail with an added character and charm of seamless versatility."
            },
            {
                img: "../../verticals/kitchen/products/Kitchens.png",
                title: "Kitchens",
                content: "Explore our world of exquisite bespoke kitchens to suit all your moods. ARC seamlessly integrates durable and hygienic surface materials keeping in mind beauty and function, with efficiency and style."
            },
            {
                img: "../../verticals/kitchen/products/Wardrobe.png",
                title: "Wardrobe",
                content: "The style against which all others are measured in a modern home. It's time to amp up the ultimate design statement that is full of rustic charm, yet is contemporary and minimal."
            },
            {
                img: "../../verticals/kitchen/products/Vanity.png",
                title: "Vanity",
                content: "Inspired by sleek design harmony throughout, with minimal detailing and finishes that are striking in their simplicity; ARC meticulously blends in bespoke craftsmanship with clutter-free living."
            }
        ]
    };
    return (
        <div>
            <Head>
                <title>OEM Solutions</title>
                <meta name="description" content="OEM Solutions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/jindalkitchen.png" text="Mobility" />
            <Section1 data={data} title2="Why Stainless Steel">About us</Section1>
            <Section2 data={data.products}>Our Range of Products</Section2>
        </div>
    )
}

export default mobility