import styles from '../styles/Parallax.module.css'
import { Container, Row, Col } from 'reactstrap'
import ClassNames from 'classnames'

const Parallax = ({ data, filterEffect }) => {
    return (
        <section
            style={{ backgroundImage:`url(${data.bgImg})` }}
            className={ClassNames({
                [styles.parallax]: true,
                [styles.filterEffect]: filterEffect
            })}
        >
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="4">
                        <div className={styles.vision}>
                            <h1 className="heading white-color mb-3">
                                {data.leftSection.title}
                            </h1>
                            <p className="white-color">
                                {data.leftSection.content}
                            </p>
                        </div>
                    </Col>
                    <Col lg="4" className="ms-auto">
                        <div className={styles.vision}>
                            <h1 className="heading white-color mb-3">
                                {data.rightSection.title}
                            </h1>
                            <p className="white-color">
                                {data.rightSection.content}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Parallax