import { Container, Row, Col } from "reactstrap"
import Slider from 'react-slick';
import { useState, useEffect, useRef } from 'react'
import NextBtn from "./NextBtn";
import Previous from "./Previous";

const VideoGallery = (props) => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <Previous />
    };
    const [videoHeight, setVideoHeight] = useState('100%');
    const videoDiv = useRef(null);

    useEffect(() => {
        let ratioVideo = props.dimension; // reverse the ratio for get new height
        let _videoDiv = videoDiv.current.offsetWidth;
        let height = ratioVideo * _videoDiv;
        setVideoHeight(height);
    }, []);


    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className="mx-auto">
                        <h2 className="heading text-center ">Video Gallery</h2>
                        <Slider {...settings} className="inn2">
                            {
                                props.data.map((obj, id) => (
                                    <div key={id} ref={videoDiv} style={{ maxWidth: "90%" }}>
                                        <iframe
                                            src={`${obj.video}?autoplay=0&controls=1`}
                                            width="100%"
                                            height={videoHeight}
                                            frameBorder="0">
                                        </iframe>

                                        <p>{obj.title} | {obj.time}</p>
                                    </div>
                                ))
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default VideoGallery