import { Container, Row, Col } from "reactstrap"
import { useState } from 'react'
import styles from "../styles/News.module.css"
import Slider from 'react-slick';
import NextBtn from "./NextBtn";
import Previous from "./Previous";

const News_Updates = ({data}) => {
    const [current, setCurrent] = useState(0);
    // const data = [{
    //     img: "../news/1.jpg",
    //     date: "2021",
    //     source: "Artt'dinox",
    //     title: "Arttd'inox Launches a New Store in Bareilly, 2021",
    //     // content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
    // }, {
    //     img: "../news/2.jpg",
    //     date: "2020",
    //     source: "Artt'dinox",
    //     title: "Arttd'inox launches store in Chennai, 2020",
    //     // content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
    // }, {
    //     img: "../news/3.jpg",
    //     date: "Jan 2020",
    //     source: "Artt'dinox",
    //     title: "Arttd'inox Featured in Better Interiors: Jan 2020, Page 46",
    //     // content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
    // }, {
    //     img: "../news/4.jpg",
    //     date: "Jan 2020",
    //     source: "Artt'dinox",
    //     title: "Arttd'inox Featured in Kitchen Desire Magazine -Jan Feb 2020, Page 22",
    //     // content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
    // }
    // ];
    var settings = {
        autoplay:true,
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
                            <Col lg="6" className="mb-lg-0 mb-4">
                                <img src={data[current].img.url} className="img-fluid" />
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
                                    <img src={obj.img.url} className="img-fluid mb-3" />
                                    <p className={styles.verysmall}>
                                        {obj.date} | {obj.source} </p>
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