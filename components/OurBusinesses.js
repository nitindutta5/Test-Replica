import { Container, Row, Col, Button } from 'reactstrap'
import Slider from 'react-slick';
import styles from '../styles/OurBusinesses.module.css'
import Link from 'next/link'
import { BusinessVerticals } from '../Data';
import classNames from 'classnames';
import NextBtn from "./NextBtn";
import Previous from "./Previous";

const OurBusinesses = () => {
    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 5,
        autoplay: true,
        centerPadding: "0px",
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <Previous />,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '50px'
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    centerPadding: '50px'
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerPadding: '100px'
                }
            }
        ]
    };
    return (
        <section>
            <Container fluid id="businesses">
                <Row>
                    <Col lg="12" >
                        <h2 className="heading text-center">Our Businesses</h2>
                    </Col>
                    <Col lg="12" className="px-0">
                        <Slider {...settings}>
                            {
                                BusinessVerticals.map((obj, id) => (
                                    <div key={id} >
                                        <div className="main">
                                            <img src={obj.carouselImg} className="img-fluid mainImg" />
                                            <img className={classNames({
                                                [styles.title]: true,
                                                [styles.logo]: true,
                                                "brand-logo": true
                                            })} src={obj.logo} />
                                            <Link href={obj.url}>
                                                <Button className={styles.knowMore} color="secondary">
                                                    Know More</Button></Link>
                                            <Button className={styles.btn} color="secondary">
                                                <img src="../Download-Brochure_02.svg" />
                                                Brochure</Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurBusinesses;