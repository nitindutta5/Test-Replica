import { Container , Row, Col } from "reactstrap"

const NotFound = () =>{
    return(
        <section>
            <Container>
                <Row>
                    <Col lg="8" md="10" xs="10" className="mx-auto">
                    <p className="text-center">Nothing for you? But you still think that we should definitely get to know you? <br/>Then take the initiative and write to us : <a href="mailto:contact@jindalstainless.com" target="_blank">contact@jindalstainless.com</a></p>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default NotFound