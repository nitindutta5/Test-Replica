import { Container, Row, Col } from "reactstrap"
import Slider from 'react-slick';
import { useState, useEffect, useRef } from 'react'
import NextBtn from "./NextBtn";
import Previous from "./Previous";

const VideoGallery = () => {
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
    const data = [{ video: "https://player.vimeo.com/video/534314647", title: "", time: "4min" }, { video: "https://player.vimeo.com/video/534314647", title: "", time: "4min" }];
    useEffect(() => {
        let ratioVideo = 720 / 1063; // reverse the ratio for get new height
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
                                data.map((obj, id) => (
                                    <div key={id} ref={videoDiv} style={{ maxWidth: "90%" }}>
                                        <iframe
                                            src={`${obj.video}?autoplay=0&controls=1`}
                                            width="100%"
                                            height={videoHeight}
                                            frameBorder="0">
                                        </iframe>

                                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has" | {obj.time}</p>
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