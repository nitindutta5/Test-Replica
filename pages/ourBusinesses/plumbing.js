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
                img: "../../verticals/plumbing/Icons/01.png",
                title: "The leading player in stainless steel space for both B2B and B2C, backed by the House of Jindals, the largest producer of stainless steel in India"
            },
            {
                img: "../../verticals/plumbing/Icons/02.png",
                title: "Forward integration with our retail footprint"
            },
            {
                img: "../../verticals/plumbing/Icons/03.png",
                title: "Honing business partner relationships with long-term vision and perspective"
            },
            {
                img: "../../verticals/plumbing/Icons/04.png",
                title: "100% customer satisfaction focus and compliance with customer SOP for each process"
            },
            {
                img: "../../verticals/plumbing/Icons/05.png",
                title: "Customised solutions, hassle-free services for all products"
            },
            {
                img: "../../verticals/plumbing/Icons/06.png",
                title: "Best-in-class product portfolio catering to all plumbing needs in powerful stainless steel"
            },
            {
                img: "../../verticals/plumbing/Icons/07.png",
                title: "State-of-the-art plant with the ability to serve large quantities in short lead time"
            },
            {
                img: "../../verticals/plumbing/Icons/08.png",
                title: "Self-reliant and sturdy group securing competitive pricing with backward integration of raw material for most of our products"
            },
            {
                img: "../../verticals/plumbing/Icons/09.png",
                title: "A unique blend of manufacturing abilities and marketplace sensibilities"
            },
            {
                img: "../../verticals/plumbing/Icons/10.png",
                title: "Extremely eco-friendly, contributing to the larger environmental drives"
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