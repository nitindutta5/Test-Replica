import { Container, Row, Col, Button } from "reactstrap";
import FeaturedBlog from "./FeaturedBlog";
import Swiper from 'react-id-swiper';
import NextBtn from "./NextBtn";
import Previous from "./Previous";

const Params = {
    spaceBetween: 20,
    slidesPerView: 3,
    autoplay: false,
    noSwiping: false,
    arrows: true,
    navigation: {
        nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev'
    }
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
                    <Col lg="12">
                        <h2 className="heading text-center white-color">
                            Our Initiatives
                        </h2>
                    </Col>

                    {
                        posts.map(post => (
                            <Col lg="6" className="mb-5">
                                <div className="local-intiative-card px-5">
                                    <img src={post.img} className="w-100" />
                                    <h3 className="title">
                                        {post.title}
                                    </h3>

                                    <p className="content">
                                        {post.content}
                                    </p>

                                    <Button className="btn-2">
                                        Read More
                                    </Button>
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