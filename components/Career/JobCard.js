import styles from '../../styles/JobCard.module.css'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'

const JobCard = ({ slug, name, type, location }) => {
    return (
        <div className={styles.card}>
            <Row className="justify-content-around align-items-center">
                <Col xs="auto">
                    <Link as={`/career/${slug}`} href='/career/[slug]'>
                        <a className={styles.jobTitle}>{name}
                        </a></Link>
                    <p className={styles.type}>{type}</p>
                </Col>
                <Col xs="auto">
                    <p className={styles.location}>{location}</p>
                </Col>
                <Col xs="auto">
                    <Link as={`/career/${slug}`} href='/career/[slug]'>
                        <a className={styles.readMore}>
                            Read More
                        </a>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default JobCard

