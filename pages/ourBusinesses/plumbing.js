import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container, Row, Col } from "reactstrap";




const plumbing = ({ plumbing, ModalToggle, UpdateName, UpdateFile, UpdateType }) => {
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
                title: "Easily Installed"
            },
            {
                img: "../../verticals/plumbing/Icons/02.png",
                title: "Hygeine"
            },
            {
                img: "../../verticals/plumbing/Icons/03.png",
                title: "Light Weight"
            },
            {
                img: "../../verticals/plumbing/Icons/04.png",
                title: "Long Lasting"
            },
            {
                img: "../../verticals/plumbing/Icons/05.png",
                title: "Recyclable"
            },
            {
                img: "../../verticals/plumbing/Icons/06.png",
                title: "Safe"
            },
            {
                img: "../../verticals/plumbing/Icons/07.png",
                title: "Seemless Connection"
            },
            {
                img: "../../verticals/plumbing/Icons/08.png",
                title: "Zero Maintenance"
            }                                                                                                                                                                                                                               
        ],
        products: [
            {
                img: "../../verticals/plumbing/products/Steps/1.jpg",
                title: "Step 1",
                content: "Tube is cut to the required length using the mechanical cutting tool."
            },
            {
                img: "../../verticals/plumbing/products/Steps/2.jpg",
                title: "Step 2",
                content: "Tube is pushed in the stainless steel press fittings until the tube stops"
            },
            {
                img: "../../verticals/plumbing/products/Steps/3.jpg",
                title: "Step 3",
                content: "Jaws of the electro-mechanical press tool are then fitted on the press-fitting where a single button operates the press tool and the joint is crimped."
            },
            {
                img: "../../verticals/plumbing/products/Steps/4.jpg",
                title: "Step 4",
                content: "The crimped joint is checked using the gauge."
            }
        ]
    };


    const handleForm = (file, name, type) => {
        UpdateName(name);
        UpdateFile(file);
        UpdateType(type);
        ModalToggle();
    }
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
            <Section2 data={data.products}>Installation Steps</Section2>
            <section className="pt-0">
                <Container className="d-flex justify-content-center">
                <Button color="secondary" onClick={() => handleForm(plumbing.File.url, "plumbing", "downloadBrochure")} className="download">
                        <img src="../Download-Brochure_02.svg" />
                        Brochure</Button>
                    <Button color="secondary" onClick={() => handleForm("", "plumbing", "enquiry")} className="ms-3">
                        Enquire</Button>
                </Container>
            </section>
        </>
    )
}
export async function getStaticProps() {
    const baseURL = process.env.API_URL;
    let data;
    try {
        const res = await fetch(baseURL + `brochures?slug=plumbing`);
        data = await res.json();
    } catch (error) {
        console.log("Server Error Occured");
    }

    return {
        props: {
            plumbing: data[0],
        }
    }
}
export default plumbing