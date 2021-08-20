import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container, Row, Col } from "reactstrap";
import Slider from 'react-slick';
import MoreProducts from "../../components/VerticalsSections/MoreProducts";
import NextBtn from "../../components/NextBtn";
import Previous from "../../components/Previous";

const mobility = ({ mobility, ModalToggle, UpdateName, UpdateFile, UpdateType }) => {
    const params = {
        autoplay: true,
        dots: false,
        fade: true,
        speed: 400,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <Previous />,
        adaptiveHeight: true,
    }
    const data = {
        type: "mobility",
        brands: [
            {
                content: 'We cater to the mobility sector, especially Indian Railways and Metros. Our optimally manufactured products lend great strength and longer durability to the trains along with providing ease and comfort to the commuters. The components of stainless steel range in many grades that are used in railways operations. We majorly use austenitic stainless-steel in grades 301LN, 201, 301, 201LN and 304 which are used in the construction of railway coaches to build components of ferritic stainless steel 409M / IRSM 44 97 and Nitronic 30 that is majorly used for freight wagons.'
            }
        ],
        icons: [
            {
                img: "../../verticals/mobility/Icons/01_Semi-Automatic-Plant-&-Robotic-Line.png",
                title: "Semi Automatic Plant & Robotic Line"
            },
            {
                img: "../../verticals/mobility/Icons/02_25,000-MTAnnum-Fabrication-Capacity.png",
                title: "25,000-MT/Annum Fabrication Capacity"
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
                img: "../../verticals/mobility/products/Metro/Battery-Box-Delivered.jpg",
                title: "Battery Box",
                content: ""
            },
            {
                img: "../../verticals/mobility/products/Metro/Mounting-Beam-Delivered.jpg",
                title: "Mounting Beam",
                content: ""
            },
            {
                img: "../../verticals/mobility/products/Metro/Valve-Box-Delivered.jpg",
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
                img: "../../verticals/mobility/products/Railway/Bio-Tank-Delivered.jpg",
                title: "Bio Tank",
                content: ""
            },
            {
                img: "../../verticals/mobility/products/Railway/Modular-Toilet-Delivered.jpg",
                title: "Modular Toilet",
                content: ""
            },
            {
                img: "../../verticals/mobility/products/Railway/Water-Tank-Delivered.jpg",
                title: "WaterTank",
                content: ""
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
                <title>Mobility</title>
                <meta name="description" content="Mobility" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/Mobility.jpg" text="Mobility" />
            <Section1 data={data} title2="We Deliver">Adding Strength To Mobility</Section1>
            <Section2 data={data.metro}>Metro</Section2>
            <Section2 data={data.railways} className="pt-0">Railways</Section2>
            <section className="pt-0">
                <Container>
                    <Row className="mx-auto">
                        <Col md="10" className="mx-auto">
                            <h3 className="heading text-center">More Products</h3>
                            <Slider {...params}>
                                {
                                    mobility.MoreProducts.Product.map((product, id) => (
                                        <div className="mx-auto text-center" key={id}>
                                            <MoreProducts img={product.Product_Img.url} name={product.Product_Name} brief={product.Product_Brief} />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container className="d-flex justify-content-center">
                    <Button color="secondary" onClick={() => handleForm(mobility.File.url, "mobility", "downloadBrochure")} className="download">
                        <img src="../Download-Brochure_02.svg" />
                        Brochure</Button>
                    <Button color="secondary" onClick={() => handleForm("", "mobility", "enquiry")} className="ms-3">
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
        const res = await fetch(baseURL + `brochures?slug=mobility`);
        data = await res.json();
    } catch (error) {
        console.log("Server Error Occured");
    }

    return {
        props: {
            mobility: data[0],
        }
    }
}
export default mobility