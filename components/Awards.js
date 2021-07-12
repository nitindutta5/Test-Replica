import { Container, Row, Col } from 'reactstrap';


const Awards = () => {
    const data = ["./AWARDS/Star-Retailer.png","./AWARDS/Design-awards.png","./AWARDS/Red-dot.png","./AWARDS/eepc-india.png","./AWARDS/elle-deco.png"];
    return (
        <section className="bg2">
            <Container>
                <Row>
                    <Col md="9" className="mx-auto">
                        <h2 className="heading text-center">Awards</h2>
                        <div className="mx-auto mt-lg-5 mt-md-5 mt-0 py-3 awardpacket">
                            {
                                data.map((obj, id) => (
                                <div className="awards" key={id}>
                                        <img className="img-fluid" src={obj} />
                                </div>
                            ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Awards
