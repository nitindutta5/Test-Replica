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
                        props.data.type === "kitchen" ?
                            props.data.brands.map((obj, id) => (
                                <Col key={id} lg="5" className={id + 2 % 2 === 0 ? "me-auto my-4" : "ms-auto my-4"}>
                                    <img src={obj.logo} alt="" className={styles.logo} />
                                    <p className={styles.bold} dangerouslySetInnerHTML={{ __html: obj.bold }} />
                                    <p className={styles.content}>
                                        {obj.content}
                                    </p>
                                </Col>
                            )) :
                            props.data.brands.map((obj, id) => (
                                <Col key={id} lg="10" className={styles.category2}>
                                    <p className={styles.content}>
                                        {obj.content}
                                    </p>
                                </Col>
                            ))
                    }
                </Row>
                {
                    props.data.icons &&
                    <Row className="mt-5  justify-content-center">
                        <Col lg="12"><h2 className="heading white-color text-center">{props.title2}</h2></Col>
                        {
                            props.data.icons.map((obj, id) => (
                                <Col key={id} lg="2" xs="6" className="text-center">
                                    <div className={styles.iconBox}>
                                        <img src={obj.img} alt={obj.title} className="img-fluid" />
                                        <p>{obj.title}</p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                }

            </Container>
        </section>
    )
}

export default Section1