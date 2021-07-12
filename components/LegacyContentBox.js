import { Container, Row, Col } from 'reactstrap';
import styles from '../styles/ContentBox.module.css';



const LegacyContentBox = ({ obj }) => {
    return (
        <Container className="py-5">
            <Row>
                <Col md="10" className="mx-auto">
                    <Row >
                        <Col md="3" className="mx-auto">
                            <img src="./legacy-dummy.svg" className="img-fluid legacy" />
                        </Col>
                        <Col md="8" className={styles.contentpacket}>
                            <div>
                                <h2 className="heading">Heritage of Jindal Group</h2>
                                <div className={styles.content}>
                                    Established in 1970 by steel visionary Mr. O.P. Jindal, Jindal Group has spanned across 50+ countries marking a global footprint and positioned as top 5 business conglomerates in India. The group is backed by a workforce of diverse professionals, churning business of over $25 billion annually. Jindal Stainless is an eminent part of the massive Jindal Group, contributing a staggering $ 2.9 Billion annually through its varied businesses. <br /><br />It is one of the world’s largest integrated manufacturer of stainless steel. The group has a state-of-the-art stainless-steel plant in Odisha and is a market leader in galvanized steel and saw pipes. JSL Lifestyle is an absolute subsidiary of Jindal Stainless Ltd, founded 15 years ago, dedicated towards finished products of stainless steel. JSLL is committed to creating an ‘aspirational stainless culture’ in India in both B2C and B2B domains. It strives to bring richer life experiences by infusing modern functionalities and designs into stainless steel. With our state-of-the-art massive manufacturing capabilities in Chennai, Rohad and Pathredi, we deliver scale, quality and ﬁnish of global repute.
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}


export default LegacyContentBox;