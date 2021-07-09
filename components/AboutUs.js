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
                    <p className="para">We build richer life experiences through an aspirational stainless culture. The legacy of our Group, as embodied in its timeless values and wisdom, fuel our journey into a sustainable happier future. It is a legacy that has its genesis in 1952 as a manufacturer of steel pipes and fittings. Since then, the Jindal Group’s steady evolution into a metaphor of multi-dimensional growth, reflects India’s own trajectory of transformation - from the shadows of a colonial era to eminence on the global map as a $25 billion phenomenon. Articulated in a commitment to sustainable development, innovation and humanity, the legacy is breathing life into JSLL’s grand vision of re-imagining urban development, home spaces and lifestyles with the goodness, elegance and reliability of a wonder material – one the world knows as stainless steel.</p>
            </Col>
                </Row>

            </Container>
        </section>
        </a>
        </Link>
    );
}

export default AboutUs