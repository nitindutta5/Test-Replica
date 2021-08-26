import { Container, Row, Col } from "reactstrap"
import styles from "../../styles/Section.module.css"

const Section1 = (props) => {
    return (
        <section className="bg3">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1 className="heading white-color text-center">
                            {props.children}
                            { props.logo && <img className="logo" src="../arttdinox-logo.png" alt="logo" />}
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {
                        props.type === "kitchen" ?
                            props.data.BrandBox.Brands.map((obj, id) => (
                                <Col key={id} lg="5" className={id + 2 % 2 === 0 ? "me-auto my-4" : "ms-auto my-4"}>
                                    <img src={obj.Logo.url} alt="" className={styles.logo} />
                                    <p className={styles.bold} dangerouslySetInnerHTML={{ __html: obj.Bolders }} />
                                    <p className={styles.content}>
                                        {obj.Content}
                                    </p>
                                </Col>
                            )) :
                            (
                                <Col lg="10" className={styles.category2}>
                                    <p className={styles.content}>
                                        {props.data.DescriptionBox.Content}
                                    </p>
                                </Col>
                            )
                    }
                </Row>
                {
                    props.data.iconBox &&
                    <Row className="mt-5  justify-content-center">
                        <Col lg="12"><h2 className="heading white-color text-center">{props.data.iconBox.Title}</h2></Col>
                        {
                            props.data.iconBox.Icon.map((obj, id) => (
                                <Col key={id} lg="2" xs="6" className="text-center">
                                    <div className={styles.iconBox}>
                                        <img src={obj.Icon.url} alt={obj.title} className="img-fluid" />
                                        <p>{obj.Description}</p>
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