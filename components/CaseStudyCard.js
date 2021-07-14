import styles from '../styles/BlogCard.module.css'
import clock from '../public/blog/Icon_feather-clock.svg' 
import {Button} from 'reactstrap'


const CaseStudyCard = ({data}) => {
    return(
            <div className={styles.blogcard}>
                <div className={styles.imgholder} style={{ backgroundImage: `url(${data.img})` }}>
                    <img src={data.img} className="img-fluid invisible" />
                </div>
                <div className={styles.bottomSection}>
                    <div className={styles.date}><img src={clock} className={styles.clock} /><span>{data.date}</span></div>

                    <h4 className={styles.title}>{data.title}</h4>
                    <Button className={styles.btn} color="secondary">Download</Button>
                </div>
            </div>
    )
}

export default CaseStudyCard