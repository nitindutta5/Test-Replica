import {Container, Row, Col} from 'reactstrap'
import styles from '../styles/OurLocations.module.css'
import { useState } from 'react'
import classNames from 'classnames'
import PlantMap from './PlantMap'

const OurLocations = () =>{

    const [active, setActive] = useState({
        "plants":true
    });
    const handleActive = (name) =>{
        setActive({
            [name]:true
        });
    }
    return(
        <section className="pb-0">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1 className={styles.smallHeading}>Our Locations</h1>
                        <Row>
                            <Col lg="4" xs="6">
                            <div className={classNames({[styles.boxes]:true,
                            [styles.active]:active.plants})}  onClick={()=>handleActive("plants")}>
                                Plants
                            </div>
                            </Col>
                            <Col lg="4" xs="6">
                            <div className={classNames({[styles.boxes]:true,
                            [styles.active]:active.partners})}  onClick={()=>handleActive("partners")}>
                                Partners
                            </div>
                            </Col>
                            <Col lg="4" xs="6">
                            <div className={classNames({[styles.boxes]:true,
                            [styles.active]:active.offices})}  onClick={()=>handleActive("offices")}>
                                Offices
                            </div>
                            </Col>
                            <Col lg="4" xs="6">
                            <div className={classNames({[styles.boxes]:true,
                            [styles.active]:active.stores})}  onClick={()=>handleActive("stores")}>
                                Stores
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {
                    active.plants&&<PlantMap/> ||
                    active.stores&&<h4 className="mt-5">Comming Soon</h4>||
                    active.partners&&<h4 className="mt-5">Comming Soon</h4>||
                    active.offices&&<h4 className="mt-5">Comming Soon</h4>
                }
            </Container>
        </section>
    )
}

export default OurLocations