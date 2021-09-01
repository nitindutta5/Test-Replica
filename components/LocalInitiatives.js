import { Container, Row, Col, Button } from "reactstrap";
import Link from 'next/link'



const LocalInitiatives = ({ posts }) => {
    return (
        <section className="bg3">
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="12">
                        <h2 className="heading text-center white-color">
                            More Initiatives
                        </h2>
                    </Col>

                    {
                        posts.map(post => (
                            <Col lg="6" className="mb-5">
                                <div className="local-intiative-card px-5 h-100 d-flex flex-column justify-content-between">
                                    <div className="bg-img" style={{ backgroundImage: `url(${post.img.url})` }}>
                                    </div>
                                    <h3 className="title">
                                        {post.title}
                                    </h3>

                                    <p className="content">
                                        {post.Brief}
                                    </p>
                                    <Link as={`/csr/${post.slug}`} href="/csr/[slug]">
                                        <a>
                                            <Button className="btn-2">

                                                Read More

                                            </Button>
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
}

export default LocalInitiatives