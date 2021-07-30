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
                img: "../../verticals/plumbing/products/90-Elbow.jpg",
                title: "90-Elbow",
                content: "LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem"
            },
            {
                img: "../../verticals/plumbing/products/Crossover.jpg",
                title: "Crossover",
                content: "LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem"
            },
            {
                img: "../../verticals/plumbing/products/End-Cap.jpg",
                title: "End-Cap",
                content: "LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem"
            },
            {
                img: "../../verticals/plumbing/products/Equal-Tee.jpg",
                title: "Equal-Tee",
                content: "LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem LoremIspem"
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
            LoremIspem
        </div>
    )
}

export default plumbing