import Head from 'next/head'
import Banner from '../../components/Banner'
import { Container, Row, Col } from 'reactstrap'
const baseUrl = process.env.API_URL;
import styles from '../../styles/csrInnerPage.module.css'
import MajorInitiatives from '../../components/MajorInitiatives'
import { reportData } from '../../Data'
import CaseStudies from '../../components/CaseStudies';



const csrInnerPage = ({ post, allPosts }) => {
    const _sliderConfig = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: false,
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
        <>
            <Head>
                <title>{post[0].title} | CSR | Lifestyle</title>
                <meta name="description" content="Jindal Lifestyle" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src={post[0].BannerImg.url || "../../banner/CSR.png"} text={post[0].title} />
            <section >
                <Container>
                    <Row>
                        <Col lg="9">
                            <p className="text-center para" dangerouslySetInnerHTML={{ __html: post[0].Description }}
                            />
                        </Col>
                        {
                            post[0].DescImg.url &&

                            <Col lg="3">
                                <img src={post[0].DescImg.url} className="img-fluid" />
                            </Col>
                        }
                    </Row>
                </Container>
            </section>

            <section className="pt-0" >
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="heading sub-heading mb-4">Some of our major community development projects are:</h2>
                        </Col>
                        <Col lg="12">

                            <ul className={styles.list}>
                                {post[0].Projects.map((obj, id) => (
                                    <li >
                                        {obj.Name}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <MajorInitiatives posts={allPosts} title="More Initiatives" />

            <CaseStudies
                bg2={true}
                data={reportData}
                title="Report"
                sliderConfig={_sliderConfig}
            />
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${baseUrl}csr-initiatives`);
    const posts = await res.json();
    console.log(posts);
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    let slug = context.params.slug;
    const res = await fetch(`${baseUrl}csr-initiatives?slug=${slug}`)
    const post = await res.json()
    const res1 = await fetch(baseUrl + "csr-initiatives");
    const allPosts = await res1.json();
    console.log(allPosts)

    return { props: { post, allPosts } }
}

export default csrInnerPage