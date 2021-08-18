import styles from '../../styles/BlogCard.module.css'
import Link from 'next/link'
import clock from '../../public/blog/Icon_feather-clock.svg' 


const BlogCard = ({ data }) => {
    return (
        <Link href="/blog/[slug]" as={`/blog/${data.slug}`}>
            <div className={styles.blogcard}>
                <div className={styles.imgholder} style={{ backgroundImage: `url(${data.Banner_img.url})` }}>
                    <img src={data.Banner_img.url} className="img-fluid invisible" />
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.date}><img src={clock} className={styles.clock} /><span>{data.Date}</span></div>

                    <h4 className={styles.title}>{data.Title.slice(0, 50)}...</h4>
                    <p className={styles.content}>{data.Brief.slice(0, 150)}...</p>
                    <Link href="/blog/[slug]" as={`/blog/${data.slug}`}><a className={styles.readMore}>Read More</a></Link>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard