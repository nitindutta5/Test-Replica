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
            <Banner src={mobility.Banner_Img.url} text="Mobility" />
            <Section1 data={mobility} type="mobility" >{mobility.DescriptionBox.Title}</Section1>
            {
                mobility.SectionBox.map((Section, id) => (
                    <Section2 className={id > 0 ? "pt-0" : ""} key={id} data={Section.Section}>{Section.Title}</Section2>
                ))
            }

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