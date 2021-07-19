import { Container, Row, Col } from "reactstrap"
import Slider from 'react-slick';
import NextBtn from "./NextBtn";
import Previous from "./Previous";
import CaseStudyCard from './CaseStudyCard.js'
const caseData = [
    {
        img: "../casestudies/1.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021"
    },
    {
        img: "../casestudies/2.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum"
    },
    {
        img: "../casestudies/3.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021"
    },
    {
        img: "../casestudies/1.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021"
    }
];
const CaseStudies = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section>
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="10" className="mx-auto">
                        <h2 className="heading text-center">Case Studies</h2>
                        <Slider {...settings} className="inn">
                            {
                                caseData.map((obj, id) => (
                                    <div key={id} className="position-relative mb-5">
                                        <CaseStudyCard data={obj} />
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

export default CaseStudies