import styles from '../../styles/Section.module.css'


const MoreProducts = ({img,name, brief}) =>{
    return(
        <>
            <img src={img} className="img-fluid mx-auto"/>
            <p className={styles.title}>{name}</p>
            <p className={styles.brief}>{brief}</p>
        </>
    )
}

export default MoreProducts