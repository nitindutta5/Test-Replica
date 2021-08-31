import { Container, Row, Col, Button } from "reactstrap";
import Swiper from 'react-id-swiper';
import Link from 'next/link'

const Params = {
    spaceBetween: 20,
    slidesPerView: 3,
    autoplay: false,
    noSwiping: false,
    arrows: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    // }
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
                        <Swiper {...Params}>
                            {
                                posts.map((post, id) => (
                                    <div className="swiper-slide" key={id}>
                                        <div className="local-intiative-card">
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

export default MajorInitiatives