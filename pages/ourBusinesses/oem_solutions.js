import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container, Row, Col } from "reactstrap";
import Slider from 'react-slick';
import MoreProducts from "../../components/VerticalsSections/MoreProducts";
import NextBtn from "../../components/NextBtn";
import Previous from "../../components/Previous";
import VideoGallery from "../../components/VideoGallery";



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
            <Banner src={oem_solutions.Banner_Img.url} text="OEM Solutions" />
            <Section1 data={oem_solutions} type="oem_solutions" >{oem_solutions.DescriptionBox.Title}</Section1>
            {
                oem_solutions.SectionBox.map((Section,id)=>(
                    <Section2 key={id} data={Section.Section}>{Section.Title}</Section2>
                ))
            }

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
            {
                oem_solutions.VideoBox &&
                                <VideoGallery className="pt-0" data={oem_solutions.VideoBox.Video} dimension={1080 / 1920} />

            }
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