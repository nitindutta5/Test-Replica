import {Container, Row, Col} from 'reactstrap'
import styles from '../styles/OurLocations.module.css'
import { useState } from 'react'
import classNames from 'classnames'
import Location from './Location'
import { stores, offices ,plantLocation } from '../Data'


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
                            <Col lg="3" xs="6">
                            <div className={classNames({[styles.boxes]:true,
                            [styles.active]:active.plants})}  onClick={()=>handleActive("plants")}>
                                Plants
                            </div>
                            </Col>
                            <Col lg="3" xs="6">
                            <div className={classNames({[styles.boxes]:true,
                            [styles.active]:active.partners})}  onClick={()=>handleActive("partners")}>
                                Partners
                            </div>
                            </Col>
                            <Col lg="3" xs="6">
                            <div className={classNames({[styles.boxes]:true,
                            [styles.active]:active.offices})}  onClick={()=>handleActive("offices")}>
                                Offices
                            </div>
                            </Col>
                            <Col lg="3" xs="6">
                            <div className={classNames({[styles.boxes]:true,
                            [styles.active]:active.stores})}  onClick={()=>handleActive("stores")}>
                                Stores
                            </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {
                    active.plants&&<Location data={plantLocation}/> ||
                    active.stores&&<Location data={stores}/>||
                    active.partners&&<h4 className="mt-5">Comming Soon</h4>||
                    active.offices&&<Location data={offices}/>
                }
            </Container>
        </section>
    )
}

export default OurLocations