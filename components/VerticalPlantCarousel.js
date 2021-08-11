import Slider from "react-slick";
import { Row, Col, Container } from "reactstrap";
import { plantData } from '../Data'
import { useState } from "react";

const VerticalPlantCarousel = () => {

    const params = {
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        swipeToSlide: true,
        arrows: false,
        adaptiveHeight: true
    }

    return (
        <div className="bg2">
            <main className="scroll-container">
                <section>
                    <Container>
                        <h1 className="heading text-center">Our Plants</h1>
                        <Slider {...params} >
                            {
                                plantData.map((obj, id) => (
                                    <div key={id}>
                                        <Row>
                                            <Col lg="4" className="me-auto d-flex flex-column justify-content-center">
                                                <div>
                                                    {/* <small>{id + 1}/{plantData.length}</small> */}
                                                    <h2 className="heading">{obj.name}</h2>
                                                    <p className="mb-3">
                                                        <b>{obj.dimen}</b>
                                                    </p>
                                                    <p className="mb-3">
                                                        {obj.content}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col lg="7">
                                                <img src={obj.url} className="img-fluid" alt="" />
                                            </Col>
                                        </Row>
                                    </div>
                                ))
                            }
                        </Slider>
                    </Container>

                </section>
            </main >
        </div >
    );
}

export default VerticalPlantCarousel


