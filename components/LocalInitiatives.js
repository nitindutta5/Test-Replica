import { Container, Row, Col, Button } from "reactstrap";
import FeaturedBlog from "./FeaturedBlog";
import Swiper from 'react-id-swiper';

const Params = {
    spaceBetween: 20,
    slidesPerView: 3,
    autoplay: false,
    noSwiping: false,
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    // }
}


const LocalInitiatives = ({ posts, title }) => {
    return (
        <section className="bg3">
            <Container fluid className="wrapper">
                <Row>
                    {/* <Col lg="12">
                        <h2 className="heading text-center white-color">
                            { title }
                        </h2>
                    </Col> */}
                    <Col lg="12">
                        <Swiper {...Params}>
                            {
                                posts.map(post => (
                                    <div className="local-intiative-card">
                                        <img src={post.img} className="w-100" />
                                        <h3 className="title">
                                            { post.title}
                                        </h3>

                                        <p className="content">
                                            { post.content}
                                        </p>

                                        <Button className="btn-2">
                                            Download
                                        </Button>                                        
                                    </div>
                                ))
                            }
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default LocalInitiatives