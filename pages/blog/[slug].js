import Head from "next/head"
import Overlay from "../../components/Overlay"
import Banner from "../../components/Banner"
import { Container, Row, Col } from "reactstrap"
import styles from '../../styles/BlogInner.module.css'
import Link from 'next/link'
import Slider from 'react-slick';
import NextBtn from "../../components/NextBtn";
import Previous from "../../components/Previous";
import BlogCard from "../../components/Blogs/BlogCard"
import { blogData } from '../../components/Blogs/Blogs'

const BlogInnerPage = ({ checkOpen }) => {
    var settings = {
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <Previous />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div>
            <Overlay checkOpen={checkOpen} />
            <Head>
                <title>Media | JSLL  Lifestyle</title>
                <meta name="description" content="Media Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/blog-inner.png" text="Lorem ipsum dolor sit amet, consetetur ipsum dolor sit amet, consetetur." />
            <div className="bg2">
                <Container>
                    <Row>
                        <Col lg="11" className={"mx-auto " + [styles.contentBox]}>
                            <p className={styles.date}>13th June 2021</p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br /><br /> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolo Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolo Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolo Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            <Link href="/media"><a className={styles.back}>Back to Media</a></Link>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="wrapper">
                    <section>
                        <Row>
                            <Col lg="11" className="mx-auto">
                                <h2 className="heading text-center">More Blogs</h2>
                                <Slider {...settings} className="inn">
                                    {
                                        blogData.map((obj, id) => (
                                            <div key={id} className="position-relative">
                                                <BlogCard data={obj} />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </div>
        </div>
    )
}

export default BlogInnerPage