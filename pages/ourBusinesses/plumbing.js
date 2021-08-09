import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container, Row, Col } from "reactstrap";




const plumbing = ({ModalToggle}) => {
    const data = {
        type: "plumbing",
        brands: [
            {
                content: "JSLL Plumbing provides sustainable solutions for the versatile domestic market panning from residential to industrial projects in pure stainless steel. Our well-oriented global technology along with the best-in-class quality assurance extends the exhaustive range for varied use, stretching aggressive support in project development. Our entire product range of pipes and fittings is exclusively in EN 316L and JIS 304 & 316L grade stainless steel. Given that stainless steel is widely known as 'Green Metal', it is the only metal suitable for 'drinking-water pipes'. JSLL Plumbing is your one-stop solution for all the plumbing requirements."
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
                content: ""
            },
            {
                img: "../../verticals/plumbing/products/Crossover.jpg",
                title: "Crossover",
                content: ""
            },
            {
                img: "../../verticals/plumbing/products/End-Cap.jpg",
                title: "End-Cap",
                content: ""
            },
            {
                img: "../../verticals/plumbing/products/Equal-Tee.jpg",
                title: "Equal-Tee",
                content: ""
            }
        ]
    };
    return (
        <>
            <Head>
                <title>Plumbing</title>
                <meta name="description" content="Plumbing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/Plumbing.jpg" text="Plumbing" />
            <Section1 data={data} title2="Why Stainless Steel">Sustainable Plumbing Solutions</Section1>
            {/* <section className="pt-0">
                <Container>
                   <Row>
                       <Col lg="10" className="mx-auto">
                           <h2 className="heading text-center"></h2>
                       </Col>
                   </Row>
                </Container>
            </section> */}
            <Section2 data={data.products}>Pipes & Fittings</Section2>
            <section className="pt-0">
                <Container className="d-flex justify-content-center">
                    <Button color="secondary" onClick={ModalToggle} className="download">
                        <img src="../Download-Brochure_02.svg" />
                        Brochure</Button>
                        <Button color="secondary" onClick={ModalToggle} className="ms-3">
                           Enquire</Button>
                </Container>
            </section>
        </>
    )
}

export default plumbing