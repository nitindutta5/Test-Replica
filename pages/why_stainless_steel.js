import Head from "next/head"
import Banner from "../components/Banner"
import Overlay from "../components/Overlay"
import { Row, Col, Container } from "reactstrap"
import SSOffers from "../components/SSOffers"
import SSBenefits from "../components/SSBenefits"

const Why_Stainless_Steel = ({ checkOpen }) => {
    return (
        <div>
            <Overlay checkOpen={checkOpen} />
            <Head>
                <title>Why Stainless Steel | JSLL  Lifestyle</title>
                <meta name="description" content="Why Stainless Steel Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/why-stainless.png" text="Why Stainless Steel" />
            <section >
                <Container>
                    <Row>
                        <Col lg="9">
                            <h1 className="heading text-center">Story of Stainless Steel</h1>
                            <p className="text-center para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                        </Col>
                        <Col lg="3">
                            <img src="./stainlessstory.png" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <SSOffers/>
            <SSBenefits/>
        </div>
    );
}

export default Why_Stainless_Steel