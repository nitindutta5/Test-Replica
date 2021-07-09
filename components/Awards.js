import { Container, Row, Col } from 'reactstrap';


const Awards = () => {
    return (
        <section className="bg2">
            <Container>
                <Row>
                    <Col md="10" className="mx-auto">
                        <h2 className="heading text-center">Awards</h2>
                        <div className="mx-auto mt-lg-5 mt-md-5 mt-0 py-3 awardpacket">
                            {/* {
                                data.map((obj, id) => (
                                <div className="awards" key={id}>
                                        <img className="img-fluid" src={obj.Award_img.url} />
                                </div>
                            ))
                            } */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Awards
