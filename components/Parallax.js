import styles from '../styles/Parallax.module.css'
import { Container, Row, Col } from 'reactstrap'

const Parallax = () => {
    return (
        <section className={styles.parallax}>
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="4">
                        <div className={styles.vision}>
                            <h1 className="heading white-color mb-3">
                                Our Vision
                            </h1>
                            <p className="white-color">
                                To be a globally admired organization and enrich every life through best-in-class design & manufacturing of stainless steel products, where people associate with pride.
                            </p>
                        </div>
                    </Col>
                    <Col lg="4" className="ms-auto">
                        <div className={styles.vision}>
                            <h1 className="heading white-color mb-3">
                                Our Mission
                            </h1>
                            <p className="white-color">
                                To become a $1 billion enterprise, India’s largest stainless steel products manufacturer, and building the most admired lifestyle brand.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Parallax