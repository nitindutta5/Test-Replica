import { Container, Row , Col } from "reactstrap"


const CareerIntro = () =>{
    return(
        <section>
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="12" className="mx-auto">
                        <h1 className="heading text-center">Life At JSLL</h1>
                        <Row>
                        <Col lg="8" className="order-2 order-lg-1">
                                <h2 className="heading" style={{fontWeight:"600",lineHeight:"1.3"}}>
                                    Our People.<br/>
                                    Our Communities
                                </h2>
                                </Col>
                            <Col lg="7" className="order-2 order-lg-1">
                                <p>
                                    <small className="heading orange">GET-SET-GO</small><br/>
                                     To educate the new employees about our business, organizational systems and processes and help them to adjust and adapt in our organization smoothly, we have a 4 day Orientation Program “GET-SET-GO”. 4 day Orientation plan includes interaction with all Business Heads at Corporate Office followed by Plants & store visits.
                                     <br/><br/>
                                     <small className="heading orange"> RBMP (Training for Staff) </small><br/>
                                    Road to Best Manufacturing Practices” is a virtual plus project based program to set base of our workforce for Best in Class Contemporary Manufacturing Practices. It entails customized modules to educate large part of our Plant workforce on our core required technical skills. This initiative is targeted to set foundation for future external and highly specialized Technical Training Interventions. Apart from bringing in Operational Excellence this initiative shall contribute in building the Learning Culture and make our organization future ready. Learning Agility is a key competency to make our workforce future ready.
                                     <br/><br/>
                                     <small className="heading orange">Utkarsh – L&D framework for workers</small><br/>
                                      L&D framework defined for workers outlining mandatory, role based, operational excellence & desirable trainings. We follow time bound learning path based approach consisting of class room and on the job training, evaluation & certification –Welding, Bending, Painting, Polishing. Our internal subject matter experts identified for trainings & assessments.
                                     <br/><br/>
                                     <small className="heading orange">Stainless Pride</small><br/>
                                     Rewards & Recognition At JSLL, our people are our prized possessions. Stainless Pride - Rewards and Recognition, salutes the contributions of our achievers who truly have depicted our organization's performance and learning culture.
                                     <br/><br/>
                                     
                                     <small className="heading orange">Utthaan</small><br/>
                                     The Wellness Series Self-care & communication are crucial in the middle of a crisis. The extensive uncertainty of the situation has ultimately jolted our habits, routines, and overall - a lifestyle. And in this time of endless unknowns, we understand the power and significance of mental well-being. Realizing the importance of serving the best to our team a mental well-being JSL Lifestyle has taken a step in this very direction and initiated a series of wellness sessions for all its employees in collaboration with Brahmakumaris.
                                     <br/><br/>
                                    
                                     <small className="heading orange">Town hall Meeting</small><br/>
                                     Leadership Connect In JSL Lifestyle’s Quarterly Leadership Connect, the focus is on the impact of hard work in the previous quarter while appreciating everyone who made it possible.
                                     <br/><br/>
                       
                                </p>
                            </Col>
                            <Col lg="5" className="text-center order-1 order-lg-2 mb-lg-0 mb-3">
                                <img src="../Our-People.png" style={{maxWidth:"90%"}}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CareerIntro