import Head from "next/head"
import Banner from "../../components/Banner"
import { Container, Row, Col } from "reactstrap"
import styles from '../../styles/BlogInner.module.css'
import Link from 'next/link'
import Slider from 'react-slick';
import NextBtn from "../../components/NextBtn";
import Previous from "../../components/Previous";
import BlogCard from "../../components/Blogs/BlogCard"
const baseUrl = process.env.API_URL;
// import { blogData } from '../../components/Blogs/Blogs'

const BlogInnerPage = ({blog, allBlogs}) => {
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
            <Head>
                <title>Media | JSLL  Lifestyle</title>
                <meta name="description" content="Media Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src={blog[0].Banner_img.url} text={blog[0].Title} />
            <div className="bg2">
                <Container>
                    <Row>
                        <Col lg="11" className={"mx-auto " + [styles.contentBox]}>
                            <p className={styles.date}>{blog[0].Date}</p>
                            <p dangerouslySetInnerHTML={{__html:blog[0].Content}} />
                            <Link href="/media"><a className={styles.back}>Back to Media</a></Link>
                        </Col>
                    </Row>
                </Container>
                {/* <Container fluid className="wrapper">
                    <section>
                        <Row>
                            <Col lg="11" className="mx-auto">
                                <h2 className="heading text-center">More Blogs</h2>
                                <Slider {...settings} className="inn">
                                    {
                                        allBlogs.map((obj, id) => (
                                            <div key={id} className="position-relative">
                                                <BlogCard data={obj} />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </Col>
                        </Row>
                    </section>
                </Container> */}
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${baseUrl}blogs`);
    const posts = await res.json();
    console.log(posts);
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }))
  
    return { paths, fallback: false }
  }
  
  export async function getStaticProps(context) {
    let slug = context.params.slug;
    const res = await fetch(`${baseUrl}blogs?slug=${slug}`)
    const blog = await res.json()
    const res1 = await fetch(baseUrl + "blogs");
    const allBlogs = await res1.json();
  
    return { props: { blog, allBlogs } }
  }
  
export default BlogInnerPage