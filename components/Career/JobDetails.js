import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect';
import { useRef, useContext, useState } from 'react';
import ThemeContext from '../ThemeContext';
import { Row, Col, Button } from 'reactstrap';
import styles from '../../styles/CareerInner.module.css'
import Link from 'next/link'
import JobForm from '../Form/JobForm';

const JobDetails = ({ job }) => {
    const containerRef = useRef();
    const { toggle } = useContext(ThemeContext);
    useIsomorphicLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            if (!containerRef.current) return;
            if (containerRef.current.getBoundingClientRect().bottom <= 0) {
                toggle(true);
            }
            else {
                toggle(false);
            }
        })
    }, []);
    const [form, setForm] = useState(false);
    return (
        <>
            <Row>
                <Col lg="8" className="pt-5 text-center white-color mx-auto">
                    <h1 className={styles.mainHeading}>{job[0].Job_Title}</h1>
                    <p className={styles.smallHeading}>{job[0].Location}</p>
                </Col>
            </Row>
            <Row>
                <Col lg="11" className="mx-auto mb-2" >
                    <div ref={containerRef} >
                        {!form ?
                            (<Link href="/careers">
                                <span className={styles.navigator}>View Jobs</span>
                            </Link>) :
                            (<span onClick={() => setForm(false)} className={styles.navigator}>View Job Description</span>)}
                    </div>
                </Col>
                {
                    !form ? (
                        <Col lg="11" xs="10" className={styles.container}>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className={styles.Title}>{job[0].Job_Title}</p>
                                    <p>{job[0].Job_Type}</p>
                                </div>
                                <Button color="primary" onClick={() => setForm(true)}>
                                    Apply Now
                                </Button>
                            </div>
                            <div className="py-4">
                                <p className={styles.Title}>About the Job</p>
                                <p className={styles.mainContent}>{job[0].About}</p>
                            </div>
                            {
                                job[0].ListType_Info.map((obj, id) => (
                                    <div className="py-4" key={id}>
                                        <p className={styles.Title}>{obj.Title}</p>
                                        <div className={styles.mainContentList} dangerouslySetInnerHTML={{ __html: obj.Details }} />
                                    </div>
                                ))
                            }
                            <p className={styles.mainContentList}>
                                <Button color="primary" className="mt-5"
                                    onClick={() => setForm(true)}>
                                    Apply Now
                                </Button>
                            </p>
                        </Col>) : (
                        <Col lg="11" xs="10" className={styles.container}>
                            <div>
                                <div>
                                    <p className={styles.Title}>{job[0].Job_Title}</p>
                                </div>
                                <JobForm />
                            </div>
                        </Col>
                    )
                }
            </Row>
        </>
    )
}

export default JobDetails