import { Container, Row, Col } from "reactstrap"
import styles from "../../styles/Section.module.css"


const Section2 = (props) => {
    return (
        <section className={props.className}>
            <Container>
                <Row>
                    <Col lg="12"><h1 className="heading text-center">{props.children}</h1></Col>
                </Row>
                <Row>
                    <Col lg="10" className="mx-auto">
                        <Row>
                            {
                                props.data.map((obj, id) => (
                                    <Col lg="6" xs="12" md="6" key={id}>
                                        <div className={styles.productBox}>
                                            <img src={obj.Image.url} alt="" className="img-fluid" />
                                            <div className="p-4">
                                                <h4>{obj.Name}</h4>
                                                <p>{obj.Brief}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section2