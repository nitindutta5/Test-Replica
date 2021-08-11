import { Container, Row, Col } from "reactstrap"
import { useState } from "react"
import styles from "../../styles/ContactForm.module.css"
import WritetoUs from "./WriteToUs";
import PartnerForm from "./PartnerForm";



const ContactForms = () => {
    const [formOne, setFormOne] = useState(true);
    const [formTwo, setFormTwo] = useState(false);
    const setForm = (data) => {
        if (data === "write_to_us") {
            setFormOne(true);
            setFormTwo(false);
        }
        else {
            setFormOne(false);
            setFormTwo(true);
        }
    }
    return (
        <section className="pb-0">
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="3" className={[styles.navBar] + " bg2 pe-0 pt-4"}>
                        <div className={formOne ? [styles.active] : [styles.item]} onClick={() => setForm("write_to_us")}>Write to us</div>
                        <div className={formTwo ? [styles.active] : [styles.item]} onClick={() => setForm("partner")}> Become a partner</div>
                    </Col>
                    <Col lg="9" className="py-4">
                        {
                            formOne && <WritetoUs />
                            ||
                            formTwo && <PartnerForm />
                        }
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default ContactForms