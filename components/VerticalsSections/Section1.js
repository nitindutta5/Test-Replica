import { Container, Row, Col } from "reactstrap"
import styles from "../../styles/Section.module.css"

const Section1 = (props) => {
    return (
        <section className="bg3">
            <Container>
                <Row>
                    <Col lg="12"><h1 className="heading white-color text-center">{props.children}</h1></Col>
                </Row>
                <Row>
                    {
                        props.data.brands.map((obj, id) => (
                            <Col key={id} lg="5" className={id + 2 % 2 === 0 ? "me-auto mb-4" : "ms-auto mb-4"}>
                                <img src={obj.logo} alt="" className="img-fluid" />
                                <p className={styles.bold} dangerouslySetInnerHTML={{ __html: obj.bold }} />
                                <p className={styles.content}>
                                    {obj.content}
                                </p>
                            </Col>
                        ))
                    }
                </Row>
                <Row className="mt-4">
                    {
                        props.data.icons.map((obj, id) => (
                            <Col key={id} lg="2" className="text-center">
                                <div className={styles.iconBox}>
                                    <img src={obj.img} alt={obj.title} className="img-fluid" />
                                    <p>{obj.title}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Section1