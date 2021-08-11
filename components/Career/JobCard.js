import styles from  '../../styles/JobCard.module.css'
import { Container, Row, Col } from 'reactstrap'

const JobCard = ({slug, name, type, location}) =>{
    return(
        <div className={styles.card}>
            <Row className="justify-content-between  align-items-center">
                <Col xs="auto">
                    <p className={styles.jobTitle}>{name}</p>
                    <p>{type}</p>
                </Col>
                <Col  xs="auto">
                    <p>{location}</p>
                </Col>
                <Col  xs="auto">
                <b>Read More</b>
                                </Col>
            </Row>
        </div>
    )
}

export default JobCard

