import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container } from "reactstrap";


const mobility = ({ModalToggle}) => {
    const data = {
        type: "mobility",
        brands: [
            {
                content: "JSLL Mobility caters to the mobility sector, especially Indian Railways and Delhi Metro. Our optimally manufactured products lend great strength and longer durability to the trains along with providing ease and comfort to the commuters. The components of stainless steel range in many grades that are used in railways operations. We majorly use austenitic stainless-steel in grades 301LN, 201, 301, 201LN and 304 which are used in the construction of railway coaches to build components of ferritic stainless steel 409M / IRSM 44 97 and Nitronic 30 that is majorly used for freight wagons."
            }
        ],
        icons: [
            {
                img: "../../verticals/mobility/Icons/01_Semi-Automatic-Plant-&-Robotic-Line.png",
                title: "Semi Automatic Plant & Robotic Line"
            },
            {
                img: "../../verticals/mobility/Icons/02_25,000-MTAnnum-Fabrication-Capacity.png",
                title: "02_25,000-MT/Annum Fabrication Capacity"
            },
            {
                img: "../../verticals/mobility/Icons/03_Full-Backward-Integration.png",
                title: "Full Backward Integration"
            },
            {
                img: "../../verticals/mobility/Icons/04_SAP-Based-Manufacturing.png",
                title: "SAP Based Manufacturing"
            },
            {
                img: "../../verticals/mobility/Icons/05_Highly-Qualified-Fabricators.png",
                title: "Highly Qualified Fabricators"
            },
            {
                img: "../../verticals/mobility/Icons/06_On-Time-Delivery.png",
                title: "On Time Delivery"
            }
        ],
        metro: [
            {
                img: "../../verticals/mobility/products/Metro/Air-Reservoir-Delivered.jpg",
                title: "Air Reservoir",
                content: ""
            },
            {
                img:  "../../verticals/mobility/products/Metro/Battery-Box-Delivered.jpg",
                title: "Battery Box",
                content: ""
            },
            {
                img:  "../../verticals/mobility/products/Metro/Mounting-Beam-Delivered.jpg",
                title: "Mounting Beam",
                content: ""
            },
            {
                img:  "../../verticals/mobility/products/Metro/Valve-Box-Delivered.jpg",
                title: "Valve Box Delivered",
                content: ""
            }
        ],
        railways: [
            {
                img: "../../verticals/mobility/products/Railway/Bench-Delivered.jpg",
                title: "Bench",
                content: ""
            },
            {
                img:  "../../verticals/mobility/products/Railway/Bio-Tank-Delivered.jpg",
                title: "Bio Tank",
                content: ""
            },
            {
                img:  "../../verticals/mobility/products/Railway/Modular-Toilet-Delivered.jpg",
                title: "Modular Toilet",
                content: ""
            },
            {
                img:  "../../verticals/mobility/products/Railway/Water-Tank-Delivered.jpg",
                title: "WaterTank",
                content: ""
            }
        ]
    };
    return (
        <>
            <Head>
                <title>Mobility</title>
                <meta name="description" content="Mobility" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/Mobility.jpg" text="Mobility" />
            <Section1 data={data} title2="Why Stainless Steel">About us</Section1>
            <Section2 data={data.metro}>Metro</Section2>
            <Section2 data={data.railways}>Railways</Section2>
            <section className="pt-0">
                <Container className="d-flex justify-content-center">
                <Button color="secondary" className="download" onClick={ModalToggle}>
                        <img src="../Download-Brochure_02.svg" />
                        Brochure</Button>
                        <Button color="secondary" onClick={ModalToggle} className="ms-3">
                           Enquire</Button>
                </Container>
            </section>
        </>
    )
}

export default mobility