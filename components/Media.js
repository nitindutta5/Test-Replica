import { Container, Row, Col } from "reactstrap";
import FeaturedBlog from "../components/FeaturedBlog";
import Swiper from 'react-id-swiper';

const Media = ({ blogData }) => {
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
    console.log(blogData);
    return (
        <section className="bg3">
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="12">
                        <h2 className="heading text-center white-color">Media</h2>
                    </Col>
                    <Col lg="6">
                        <div id="blogcaseCarousel">
                            <Swiper {...Params}>
                                {
                                    blogData.map((obj, id) => (
                                        <div className="swiper-slide" key={id}>
                                            <FeaturedBlog cardTitle="Blogs" postTitle={obj.Title} postSlug={`blog/${obj.slug}`} postBrief={obj.Brief} postFeaturedImg={obj.Banner_img.url} />
                                        </div>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div id="blogcaseCarousel">
                            <Swiper {...Params}>
                                <div className="swiper-slide" >
                                    <FeaturedBlog cardTitle="Media & Updates" postTitle="Arttd'inox Launches a New Store in Bareilly, 2021" postSlug='/media' postBrief="" />
                                </div>
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Media