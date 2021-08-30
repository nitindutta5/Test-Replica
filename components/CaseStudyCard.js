import styles from '../styles/BlogCard.module.css'
import clock from '../public/blog/Icon_feather-clock.svg' 
import {Button} from 'reactstrap'


const CaseStudyCard = ({ data, ModalToggle,UpdateFile,UpdateName,UpdateType }) => {
    const OpenModal = (file, name, type) => {
        UpdateFile(file);
        UpdateName(name);
        UpdateType(type);
        ModalToggle();
    }
    console.log(data);
    return(
            <div className={styles.blogcard}>
                <div className={styles.imgholder} style={{ backgroundImage: `url(${data.img.url || data.img})` }}>
                    <img src={data.img.url || data.img } className="img-fluid invisible" />
                </div>
                <div className={styles.bottomSection}>
                    {
                        data.date && (
                            <div className={styles.date}>
                                <img src={clock} className={styles.clock} />
                                <span> { data.date } </span>
                            </div>
                        )
                    }

                    <h4 className={styles.title}>
                        { data.title }
                    </h4>
                    {
                        data.CaseStudy?
                        <Button className={styles.btn} onClick={()=>OpenModal(data.CaseStudy.url, data.title,"downloadCasestudy")} color="secondary">Download</Button>
                        :
                        <Button className={styles.btn} color="secondary">Download</Button>
                    }
                    
                </div>
            </div>
    )
}

export default CaseStudyCard