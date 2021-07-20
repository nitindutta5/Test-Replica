import Head from "next/head"
import Overlay from "../components/Overlay"
import { Container, Row, Col, Button } from 'reactstrap'
import Slider from 'react-slick';
import styles from '../styles/OurBusinesses.module.css'
import { useState } from "react";

const downloadBrochure = ({ checkOpen }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const data = [
        {
            img: './ourbusinesses/1.png',
            title: 'Test',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reprehenderit error, quibusdam voluptatibus hic delectus nemo dolore culpa laborum perspiciatis nesciunt. Itaque sit maxime harum assumenda hic, fuga sed vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim modi in vero, quidem quam non atque! Culpa, vitae nulla voluptates explicabo facilis earum illo esse libero ipsa, commodi accusamus doloremque."
        },
        {
            img: './ourbusinesses/2.png',
            title: 'Infra Solutions',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reprehenderit error, quibusdam voluptatibus hic delectus nemo dolore culpa laborum perspiciatis nesciunt. Itaque sit maxime harum assumenda hic, fuga sed vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim modi in vero, quidem quam non atque! Culpa, vitae nulla voluptates explicabo facilis earum illo esse libero ipsa, commodi accusamus doloremque."
        },
        {
            img: './ourbusinesses/3.png',
            title: 'Test',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reprehenderit error, quibusdam voluptatibus hic delectus nemo dolore culpa laborum perspiciatis nesciunt. Itaque sit maxime harum assumenda hic, fuga sed vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim modi in vero, quidem quam non atque! Culpa, vitae nulla voluptates explicabo facilis earum illo esse libero ipsa, commodi accusamus doloremque."
        },
        {
            img: './ourbusinesses/4.png',
            title: 'Test',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reprehenderit error, quibusdam voluptatibus hic delectus nemo dolore culpa laborum perspiciatis nesciunt. Itaque sit maxime harum assumenda hic, fuga sed vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim modi in vero, quidem quam non atque! Culpa, vitae nulla voluptates explicabo facilis earum illo esse libero ipsa, commodi accusamus doloremque."
        },
        {
            img: './ourbusinesses/5.png',
            title: 'Test',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reprehenderit error, quibusdam voluptatibus hic delectus nemo dolore culpa laborum perspiciatis nesciunt. Itaque sit maxime harum assumenda hic, fuga sed vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim modi in vero, quidem quam non atque! Culpa, vitae nulla voluptates explicabo facilis earum illo esse libero ipsa, commodi accusamus doloremque."
        },
        {
            img: './ourbusinesses/3.png',
            title: 'Test',
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reprehenderit error, quibusdam voluptatibus hic delectus nemo dolore culpa laborum perspiciatis nesciunt. Itaque sit maxime harum assumenda hic, fuga sed vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim modi in vero, quidem quam non atque! Culpa, vitae nulla voluptates explicabo facilis earum illo esse libero ipsa, commodi accusamus doloremque."
        }
    ];

    const nextClick = (e) => {
        setCurrentIndex(e);
    }
    var settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay: true,
        centerPadding: "50px",
        arrows: false,
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
        <div>
            <Overlay checkOpen={checkOpen} />
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
                                    data.map((obj, id) => (
                                        <div key={id} >
                                            <div className="main">
                                                <img src={obj.img} className="img-fluid" />
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
                        <Col lg="6" md="10" className="pt-4">
                            <div className={styles.holder}>
                                <h5 className={styles.title2}>{data[currentIndex].title}</h5>
                                <Button className={styles.secondBtn} color="secondary">Download Brochure</Button>
                            </div>

                            <p>{data[currentIndex].content}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default downloadBrochure