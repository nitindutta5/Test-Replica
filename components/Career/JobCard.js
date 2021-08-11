import styles from  '../../styles/JobCard.module.css'
import { Container, Row, Col } from 'reactstrap'

const JobCard = ({slug, name, type, location}) =>{
    return(
        <div>
            <Row>
                <Col>
                    <p>{name}</p>
                    <p>{type}</p>
                </Col>
                <Col>
                    <p>{location}</p>
                </Col>
                <Col>
                <span></span>
                                </Col>
            </Row>
        </div>
    )
}

