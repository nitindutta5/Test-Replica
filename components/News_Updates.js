import { Container, Row, Col } from "reactstrap"
import { useState } from 'react'
import styles from "../styles/News.module.css"
import Slider from 'react-slick';
import NextBtn from "./NextBtn";
import Previous from "./Previous";

const News_Updates = () => {
    const [current, setCurrent] = useState(0);
    const data = [{
        img: "../news/1.jpg",
        date: "13th June 2021",
        source: "OEM SOLUTIONS",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
    }, {
        img: "../news/2.jpg",
        date: "13th June 2021",
        source: "JSLL KITCHEN",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
    }, {
        img: "../news/3.jpg",
        date: "13th June 2021",
        source: "OEM SOLUTIONS",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
    }, {
        img: "../news/4.jpg",
        date: "13th June 2021",
        source: "INFRA SOLUTIONS",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
    },
    {
        img: "../news/4.jpg",
        date: "13th June 2021",
        source: "INFRA SOLUTIONS",
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
    }
    ];
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <Previous />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    return (
        <section className="bg3">
            <Container>
                <Row>
                    <Col lg="11" className="mx-auto">
                        <h2 className="heading text-center white-color"> News & Updates</h2>
                        <Row>
                            <Col lg="6">
                                <img src={data[current].img} className="img-fluid" />
                            </Col>
                            <Col lg="6" className="d-flex align-items-center">
                                <div className="ps-3">
                                    <p className={styles.small}>{data[current].date} | {data[current].source} </p>
                                    <p className={styles.title}>{data[current].title}</p>
                                    <p className={styles.content}>{data[current].content}</p>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
            <Container fluid className={[styles.borderBottom] + " mt-5 pt-5"}>
                <Slider {...settings}>
                    {
                        data.map((obj, id) => (
                            <div key={id} onClick={() => setCurrent(id)}>
                                <div className={styles.slide}>
                                    <img src={obj.img} className="img-fluid mb-3" />
                                    <p className={styles.verysmall}>{obj.date} | {obj.source} </p>
                                    <p className={[styles.small] + " pb-3"}>{obj.title}</p>
                                    <div className={id === current ? [styles.orangeBar] : ""}></div>
                                </div>

                            </div>
                        ))
                    }
                </Slider>
            </Container>
        </section >
    )
}

export default News_Updates