import { Row, Col } from 'reactstrap';
import Swiper from 'react-id-swiper';
import styles from '../styles/FeaturedBlog.module.css'
import Link from 'next/link'
const FeaturedBlog = () => {
    const Params = {
        spaceBetween: 15,
        slidesPerView: 1,
        autoplay: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    }
    return (
        <div id="blogcaseCarousel">
            <Swiper {...Params}>
                <div className="swiper-slide" >
                    <Row className="h-100">
                        <Col md="6" className={"p-0 "+[styles.blogImg]} >
                            {/* <img src={} className={styles.blogImg}/>  */}
                        </Col>
                        <Col md="6" className={"px-lg-5 px-md-4 px-5 "+[styles.rightSection]}>
                            <div className={styles.triangleLeft}></div>
                            <div className={styles.triangleUp}></div>
                            <p className={[styles.Title]+" mt-4"}>Case Studies & Blogs </p>
                            <p className={[styles.DataTitle]+" my-3"}>Lorem Ispem <br/>Lorem Ispem</p>
                            <div className={styles.borderLeft}>
                                <p className={styles.Content}>Lorem Ispem Lorem Ispem Lorem Ispem Lorem Ispem Lorem Ispem Lorem IspemLorem Ispem Lorem Ispem Lorem Ispem Lorem Ispem Lorem Ispem Lorem Ispem</p>
                            </div>
                            {/* href="/blogs/[slug]" as={`/blogs/${obj.slug}`} */}
                            <Link href="#">
                                <a>
                                    <p className={styles.knowMore}>Know More <span><img src="./Know-more-arrow.svg" className={styles.arrow} /></span></p>
                                </a>
                            </Link>

                        </Col>
                    </Row>
                </div>
            </Swiper>
        </div>
    )
}

export default FeaturedBlog
