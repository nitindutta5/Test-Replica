import { Container, Row, Col } from "reactstrap";
import FeaturedBlog from "./FeaturedBlog";
import Swiper from 'react-id-swiper';

const ParamsParent = {
    spaceBetween: 20,
    slidesPerView: 2,
    autoplay: false,
    noSwiping: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
}

const Params = {
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: false,
    noSwiping: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
}

const MajorInitiatives = ({ posts, title }) => {
    return (
        <section className="bg3">
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="12">
                        <h2 className="heading text-center white-color">
                            {title}
                        </h2>
                    </Col>
                    <Col lg="12">
                        <Row>
                            <Col lg="6" className="mx-auto">
                                <Swiper {...Params}>
                                    {
                                        posts.map((obj, id) => (
                                            <div className="swiper-slide" key={id}>
                                                <FeaturedBlog
                                                    cardTitle={obj.cardTitle}
                                                    postTitle={obj.postTitle}
                                                    postFeaturedImg={obj.postFeaturedImg}
                                                    postBrief={obj.postBrief}
                                                // postSlug='/media'
                                                />
                                            </div>
                                        ))
                                    }
                                </Swiper>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default MajorInitiatives