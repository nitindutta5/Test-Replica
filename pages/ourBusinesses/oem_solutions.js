import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container, Row, Col } from "reactstrap";
import Slider from 'react-slick';
import MoreProducts from "../../components/VerticalsSections/MoreProducts";
import NextBtn from "../../components/NextBtn";
import Previous from "../../components/Previous";




const oem_solutions = ({ oem_solutions, ModalToggle, UpdateName, UpdateFile, UpdateType }) => {
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
        type: "oem",
        brands: [
            {
                content: "We are focused towards manufacturing stainless steel products for development and broad usage across industries. Through our own in-house backend integration, we design finished end products for B2B and B2C segments. Being an original equipment manufacturer, we fabricate daily use and industrial components in varied sectors."
            }
        ],
        icons: [
            {
                img: "../../verticals/ve/Icons/01.png",
                title: "Extensive Fire & Heat Resistant"
            },
            {
                img: "../../verticals/ve/Icons/02.png",
                title: "Great Combination Of Strength & Pliability"
            },
            {
                img: "../../verticals/ve/Icons/03.png",
                title: "Aesthetic Appeal With Ease Of Fabrication"
            },
            {
                img: "../../verticals/ve/Icons/04.png",
                title: "Hygienic And Extremely Sturdy With Long Term Values"
            },
            {
                img: "../../verticals/ve/Icons/05.png",
                title: "Recyclable With Reduced Waste"
            },
            {
                img: "../../verticals/ve/Icons/06.png",
                title: "Earthquake Proof as it can withstand vibrations and shocks"
            },
            {
                img: "../../verticals/ve/Icons/07.png",
                title: "Enhanced Formability With Corrosion Resistance"
            },
            {
                img: "../../verticals/ve/Icons/08.png",
                title: "Maintenance Free With A Long Life"
            },
            {
                img: "../../verticals/ve/Icons/09.png",
                title: "Environment Friendly & 100% Green Metal"
            }
        ],
        products: [
            {
                img: "../../verticals/ve/products/Automobile.jpg",
                title: "Automobile",
                content: "Our capabilities enable us to manufacture stainless steel parts used in automobile like car exhaust systems hose clamps and seatbelt springs."
            },
            {
                img: "../../verticals/ve/products/Handheld-Fire-Extinguisher.jpg",
                title: "Handheld Fire Extinguisher",
                content: "A compact fire estinguisher made of Stainless Steel with easy discharge mechanism containing simple aerosol valve mechanism like a deodorant."
            },
            {
                img: "../../verticals/ve/products/Mixer-Jars.jpg",
                title: "Mixers Jars",
                content: "Available in different designs and sizes, the mixer jars are manufactured with high grade stainless steel. It is durable and apt for usage of longer durations."
            },
            {
                img: "../../verticals/ve/products/OBM.jpg",
                title: "OBM",
                content: "As one of the leading OBM in Stainless Steel, we also manufacture ﬁnished goods for different brands from in-house designing to prototyping to mass production."
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
                <title>OEM Solutions</title>
                <meta name="description" content="OEM Solutions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/ValueEngineering.jpg" text="OEM Solutions" />
            <Section1 data={data} title2="Why Stainless Steel">Manufacturing Tomorrow’s Products</Section1>
            <Section2 data={data.products}>Our Range of Products</Section2>
            <section className="pt-0">
                <Container>
                    <Row className="mx-auto">
                        <Col md="10" className="mx-auto">
                            <h3 className="heading text-center">More Products</h3>
                            <Slider {...params}>
                                {
                                    oem_solutions.MoreProducts.Product.map((product, id) => (
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
                <Button color="secondary" onClick={() => handleForm(oem_solutions.File.url, "oem_solutions", "downloadBrochure")} className="download">
                        <img src="../Download-Brochure_02.svg" />
                        Brochure</Button>
                    <Button color="secondary" onClick={() => handleForm("", "oem_solutions", "enquiry")} className="ms-3">
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
        const res = await fetch(baseURL + `brochures?slug=oem_solutions`);
        data = await res.json();
    } catch (error) {
        console.log("Server Error Occured");
    }

    return {
        props: {
            oem_solutions: data[0],
        }
    }
}
export default oem_solutions