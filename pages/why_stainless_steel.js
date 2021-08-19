import Head from "next/head"
import Banner from "../components/Banner"
import Overlay from "../components/Overlay"
import { Row, Col, Container } from "reactstrap"
import SSOffers from "../components/SSOffers"
import SSBenefits from "../components/SSBenefits"

const Why_Stainless_Steel = ({ checkOpen }) => {
    return (
        <>
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
                            <h1 className="heading text-center">Becoming Stainless Steel</h1>
                            <p className="text-center para">Stainless Steel is an alloy of iron and has a minimum 10.5% Chromium as a chief component. The increased resistance to corrosion in stainless steel is due to the naturally occurring chromium-rich oxide film formed on its surface. Although extremely thin, this inert film is adherent to the metal and is extremely protective in a wide range of corrosive media. The film is rapidly self repairing, in the presence of oxygen, if damaged by any external force.</p>
                        </Col>
                        <Col lg="3">
                            <img src="./stainlessstory.png" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <SSOffers/>
            <SSBenefits/>
        </>
    );
}

export default Why_Stainless_Steel