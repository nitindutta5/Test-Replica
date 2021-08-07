import Head from "next/head"
import { Container, Row, Col, Button } from 'reactstrap'
import Slider from 'react-slick';
import styles from '../styles/OurBusinesses.module.css'
import { useState } from "react";
import { BusinessVerticals } from "../Data";
import Link from 'next/link'
import classNames from "classnames";
import NextBtn from "../components/NextBtn";
import Previous from "../components/Previous";
import ModalForm from "../components/Form/ModalForm";


const downloadBrochure = () => {
    // For Modal Form
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextClick = (e) => setCurrentIndex(e);
    var settings = {
        className: "center",
        centerMode: true,
        nextArrow: <NextBtn />,
        prevArrow: <Previous />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        swiping: false,
        swipeToSlide: false,
        autoplay: true,
        centerPadding: "50px",
        arrows: true,
        afterChange: nextClick,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerPadding: '50px'
                }
            }
        ]
    };
    return (
        <>
            <Head>
                <title>Download Brochure | JSLL  Lifestyle</title>
                <meta name="description" content="Download Brochure" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="mt-5 mt-lg-0">
                <Container fluid id="businesses">
                    <Row>
                        <Col lg="12" >
                            <h2 className="heading text-center">Download Brochure</h2>
                        </Col>
                        <Col lg="12" className="px-0">
                            <Slider {...settings}>
                                {
                                    BusinessVerticals.map((obj, id) => (
                                        <div key={id} >
                                            <Link href={obj.url}>
                                                <div className="main">
                                                    <img src={obj.carouselImg} className="img-fluid mainImg" />
                                                    <img className={classNames({
                                                        [styles.title]: true,
                                                        [styles.logo]: true,
                                                        "brand-logo": true
                                                    })} src={obj.logo} />
                                                    <img src="../Know2.svg" className={styles.innerArrow} />
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg="6" md="10" className="pt-5">
                            <div className={styles.holder}>
                                <h5 className={styles.title2}>{BusinessVerticals[currentIndex].name}</h5>
                                <Button className={styles.secondBtn} color="secondary"> <img src="../Download-Brochure_02.svg" />Brochure</Button>
                            </div>
                            <p>{BusinessVerticals[currentIndex].text}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <ModalForm toggle={toggle} modal={modal} />
        </>
    )
}

export default downloadBrochure