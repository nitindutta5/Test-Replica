import { Container, Row, Col, Button } from "reactstrap"
import styles from '../styles/OurPlants.module.css'


const OurPlants = () => {
    return (
        <section className="bg2">
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="heading text-center"> Our Plants</h2>
                    </Col>
                    <Col lg="4" className={styles.plantCard}>
                        <img src="./plants/chennai.png" className="img-fluid px-lg-4" />
                        <p>Chennai Plant</p>
                    </Col>
                    <Col lg="4" className={styles.plantCard + " mx-auto"}>
                        <img src="./plants/rohand.png" className="img-fluid px-lg-4" />
                        <p>Rohand Plant</p>
                    </Col>
                    <Col lg="4" className={styles.plantCard}>
                        <img src="./plants/pathrendi.png" className="img-fluid px-lg-4" />
                        <p>Pathrendi Plant</p>
                    </Col>
                    <Col lg="12" className="text-center mt-5">
                        <Button color="secondary" className="btn">Know More</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurPlants