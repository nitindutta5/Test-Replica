import { Row, Col } from 'reactstrap';
import styles from '../styles/FeaturedBlog.module.css'
import Link from 'next/link'
const FeaturedBlog = ({cardTitle, postTitle, postBrief, postSlug, postFeaturedImg}) => {

    return (
                    <Row className="h-100">
                        <Col md="6" className={"p-0 "+[styles.blogImg]} style={postFeaturedImg&&{backgroundImage:`url(${postFeaturedImg})`}} >
                             <img src="../Group-45510.png" className="invisible"/>  
                        </Col>
                        <Col md="6" className={"px-lg-5 px-md-4 px-5 "+[styles.rightSection]}>
                            <div className={styles.triangleLeft} />
                            <div className={styles.triangleUp} />
                            <p className={[styles.Title]+" mt-lg-5 mt-4"}>{cardTitle}</p>
                            
                            <p className={[styles.DataTitle]+" my-3"}>
                                {
                                    postTitle && (
                                        <>
                                            { postTitle.slice(0,95)}...
                                        </>
                                    )
                                }
                            </p>
                            <div className={styles.borderLeft}>
                                <p className={styles.Content}>{postBrief.slice(0,200)}...</p>
                            </div>
                          
                            <Link href={`${postSlug}`}>
                                <a className={styles.knowMore}>Know More <span><img src="./Know-more-arrow.svg" className={styles.arrow} /></span>
                                </a>
                            </Link>

                        </Col>
                    </Row>
    )
}

export default FeaturedBlog
