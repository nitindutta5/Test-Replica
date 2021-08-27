import { Container, Row, Col } from "reactstrap"
import Slider from 'react-slick';
import CaseStudyCard from './CaseStudyCard.js'
import ClassNames from "classnames";

const CaseStudies = ({ data, title, sliderConfig, bg2 }) => {
    
    return (
        <section className={ClassNames({
            "bg2": bg2
        })}>
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="10" className="mx-auto">
                        <h2 className="heading text-center"> { title } </h2>
                        <Slider {...sliderConfig} className="inn">
                            {
                                data.map((obj, id) => (
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