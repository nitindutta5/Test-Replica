import { Container, Row, Col, Input } from 'reactstrap'
import styles from '../styles/OurLocations.module.css'
import { useImperativeHandle, useState } from 'react'
import classNames from 'classnames'
import Location from './Location'
import { stores, States, offices, plantLocation } from '../Data'


const OurLocations = () => {

    const [active, setActive] = useState({
        "plants": true
    });
    const handleActive = (name) => {
        setActive({
            [name]: true
        });
    }

    const handleFilter = (e) => {
        setFilter(e.target.value);
        if (e.target.value !== "All") {
            let updatedStores = stores.filter((obj) => { return obj.desc.includes(e.target.value) });
            updateStoresData(updatedStores);
        }
        else {
            updateStoresData(stores);
        }

    }

    const [storesData, updateStoresData] = useState(stores);
    const [filter, setFilter] = useState('All');
    return (
        <section className="pb-0">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1 className={styles.smallHeading}>Our Locations</h1>
                        <Row>
                            <Col lg="3" xs="6">
                                <div className={classNames({
                                    [styles.boxes]: true,
                                    [styles.active]: active.plants
                                })} onClick={() => handleActive("plants")}>
                                    Plants
                                </div>
                            </Col>
                            <Col lg="3" xs="6">
                                <div className={classNames({
                                    [styles.boxes]: true,
                                    [styles.active]: active.partners
                                })} onClick={() => handleActive("partners")}>
                                    Partners
                                </div>
                            </Col>
                            <Col lg="3" xs="6">
                                <div className={classNames({
                                    [styles.boxes]: true,
                                    [styles.active]: active.offices
                                })} onClick={() => handleActive("offices")}>
                                    Offices
                                </div>
                            </Col>
                            <Col lg="3" xs="6">
                                <div className={classNames({
                                    [styles.boxes]: true,
                                    [styles.active]: active.stores
                                })} onClick={() => handleActive("stores")}>
                                    Stores
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {
                    active.plants && <Location data={plantLocation} /> ||
                    active.stores &&
                    (
                        <>
                            <Row>
                                <Col lg="2" className="mx-auto mt-5">
                                    {/* <p className="orange mt-5 bold text-center ">Select State</p> */}
                                    <Input type="select" value={filter} onChange={(e) => handleFilter(e)} id="exampleSelectMulti">
                                        {
                                            States.map((state, id) => (
                                                <option key={id} value={state.val}>{state.val}</option>
                                            ))
                                        }
                                    </Input>
                                </Col>
                            </Row>

                            <Location data={storesData} />
                        </>
                    )
                    ||
                    active.partners && <h4 className="mt-5">Comming Soon</h4> ||
                    active.offices && <Location data={offices} />
                }
            </Container>
        </section>
    )
}

export default OurLocations