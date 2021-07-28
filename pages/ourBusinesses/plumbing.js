import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";

const plumbing = () => {
    const data = {
        type: "plumbing",
        brands: [
            {
                content: "JSLL Plumbing, known for its bespoke solutions and custom-made steel pipes and fittings, understands specific needs of plumbing. We provide sustainable solutions for the versatile domestic market panning from residential to industrial projects in pure stainless steel. Our well-oriented global technology along with the best-in-class quality assurance extends the exhaustive range for varied use, stretching aggressive support in project development.Our entire product range is exclusively in EN 316L and JIS 304 & 316L grade stainless steel. Given that stainless steel is widely known as 'Green Metal', it is the only metal suitable for 'drinking-water pipes'. JSLL Plumbing is your one-stop solution for all the plumbing requirements."
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
                <title>Plumbing</title>
                <meta name="description" content="Plumbing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/jindalkitchen.png" text="Plumbing" />
            <Section1 data={data} title2="Why Stainless Steel">Sustainable Plumbing Solutions</Section1>
            <Section2 data={data.products}>Our Range of Products</Section2>
        </div>
    )
}

export default plumbing