import styles from '../styles/Figures.module.css'
import { Container, Row, Col } from 'reactstrap';
import React, { useState, useEffect } from 'react';


const Figures = () => {
    const [initialNum, setNum] = useState(0);
    const [initialValue, setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (initialNum != 50)
                setNum(initialNum + 1);
            if (initialValue != 25)
                setValue(initialValue + 1);
        }, 120);
        return () => clearInterval(interval)
    });
    return (
        <div className={[styles.bg]+" bg2"}>
            <Container >
                <Row>
                    <Col md={10} className={styles.flex}>
                        <div>
                            <span className={styles.figure}>{initialNum}</span><br />
                            <span className={styles.text}>Years</span>
                        </div>
                        <div>
                            <span className={styles.figure}>{initialNum}+</span><br />
                            <span className={styles.text}>Countries</span>
                        </div>
                        <div>
                            <span className={styles.figure}>${initialValue} B</span><br />
                            <span className={styles.text}>Turnover Annually</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Figures