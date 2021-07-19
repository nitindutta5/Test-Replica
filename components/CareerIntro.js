import { Container, Row , Col } from "reactstrap"


const CareerIntro = () =>{
    return(
        <section>
            <Container>
                <Row>
                    <Col lg="11" className="mx-auto">
                        <h1 className="heading text-center">Life At JSLL</h1>
                        <Row>
                            <Col lg="6" className="order-2 order-lg-1">
                                <h2 className="heading" style={{fontWeight:"600",lineHeight:"1.3"}}>
                                    Our People.<br/>
                                    Our Communities
                                </h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
                                <br/> Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui do lorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                            </Col>
                            <Col lg="6" className="text-center order-1 order-lg-2 mb-lg-0 mb-3">
                                <img src="../Our-People.png" style={{maxWidth:"90%"}}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CareerIntro