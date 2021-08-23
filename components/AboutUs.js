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
                    <h1 className="heading">Jindal Lifestyle</h1>
                    <p className="para">
                    We are creating a Stainless Steel culture with a vision of sustainable development & innovation. With a philosophy of Design, Build & Install,  Jindal Lifestyle creates flawless quality and exquisite finish, through our world class manufacturing acumen and master-craftsmanship abilities. Leading integrated stainless steel solution provider across domestic & international markets, we offer a wide range of bespoke & innovative designer products with superior quality, to elevate lifestyle.  </p>
            </Col>
                </Row>

            </Container>
        </section>
        </a>
        </Link>
    );
}

export default AboutUs