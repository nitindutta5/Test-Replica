import styles from '../../styles/BlogCard.module.css'
import Link from 'next/link'

const BlogCard = ({ data }) => {
    return (
        <div className={styles.blogcard}>
            <div className={styles.imgholder} style={{ backgroundImage: `url(${data.img})` }}>
                <img src={data.img} className="img-fluid invisible" />
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.date}><img src="./blog/Icon_feather-clock.svg" className={styles.clock} /><span>{data.date}</span></div>

                <h4 className={styles.title}>{data.title}</h4>
                <p className={styles.content}>{data.info.slice(0, 180)}</p>
                <Link href="#"><a>Read More</a></Link>
            </div>

        </div>
    )
}

export default BlogCard