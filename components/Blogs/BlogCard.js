import styles from '../../styles/BlogCard.module.css'
import Link from 'next/link'
import clock from '../../public/blog/Icon_feather-clock.svg' 


const BlogCard = ({ data }) => {
    return (
        <Link href="/blog/[slug]" as={`/blog/${data.slug}`}>
            <div className={styles.blogcard}>
                <div className={styles.imgholder} style={{ backgroundImage: `url(${data.img})` }}>
                    <img src={data.img} className="img-fluid invisible" />
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.date}><img src={clock} className={styles.clock} /><span>{data.date}</span></div>

                    <h4 className={styles.title}>{data.title}</h4>
                    <p className={styles.content}>{data.info.slice(0, 180)}</p>
                    <Link href="/blog/[slug]" as={`/blog/${data.slug}`}><a className={styles.readMore}>Read More</a></Link>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard