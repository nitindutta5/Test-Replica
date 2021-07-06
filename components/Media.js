import { Container, Row, Col } from "reactstrap";
import FeaturedBlog from "../components/FeaturedBlog";


const Media = () => {
    return (
        <section className="bg3">
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="12">
                        <h2 className="heading text-center white-color">Media</h2>
                    </Col>
                    <Col lg="6">
                        <FeaturedBlog/>
                    </Col>
                    <Col lg="6">
                        <FeaturedBlog/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Media