import {Container,Row, Col} from 'reactstrap'
import Link from 'next/link'
const AboutUs = () =>{
    return(
        <Link href="/aboutus">
        <a>
        <section className="about-home-bg">
            <Container fluid className="wrapper">
                <Row>
                <Col lg="5">
                    <h1 className="heading">About JSLL</h1>
                    <p className="para">JSL Lifestyle is creating a Stainless Steel culture committed to a vision of sustainable development & innovation. The hallmark of a JSLL creation lies in its flawless quality and exquisite finish, both a function of its world class manufacturing acumen and master-craftsmanship abilities. Nothing embodies this more than our proprietary, ahead-of-the-curve production facilities. Being the leading integrated stainless steel solution provider for B2B & B2C domestic & international customers, we offer a wide range of bespoke & innovative designer products with superior quality, to elevate lifestyle. </p>
            </Col>
                </Row>

            </Container>
        </section>
        </a>
        </Link>
    );
}

export default AboutUs