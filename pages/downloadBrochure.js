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


const downloadBrochure = ({ verticals, ModalToggle, UpdateName, UpdateFile, UpdateType }) => {


    const OpenModal = (file, name, type) => {
        UpdateFile(file);
        UpdateName(name);
        UpdateType(type);
        ModalToggle();
    }

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
                <title>Download Brochure | Jindal  Lifestyle</title>
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
                                    verticals.map((obj, id) => (
                                        <div key={id} >
                                            <div className="main">
                                                <img src={obj.Carousel_Image.url} className="img-fluid mainImg" />
                                                <img className={classNames({
                                                    [styles.title]: true,
                                                    [styles.logo]: true,
                                                    "brand-logo": true
                                                })} src={obj.logo.url} />
                                                <Link href={`/ourBusinesses/${obj.slug}`}>
                                                    <img src="../Know2.svg" className={styles.innerArrow} />
                                                </Link>
                                            </div>
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
                                <h5 className={styles.title2}>{verticals[currentIndex].name}</h5>
                                <Button className={styles.secondBtn} onClick={() => OpenModal(verticals[currentIndex].File.url, verticals[currentIndex].name, "downloadBrochure")} color="secondary"> <img src="../Download-Brochure_02.svg" />Brochure</Button>
                            </div>
                            <p>{verticals[currentIndex].Description}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export async function getStaticProps() {
    const baseURL = process.env.API_URL;
    let data;
    try {
        const res = await fetch(baseURL + 'brochures');
        data = await res.json();
    } catch (error) {
        console.log("Server Error Occured");
    }

    return {
        props: {
            verticals: data,
        }
    }
}

export default downloadBrochure