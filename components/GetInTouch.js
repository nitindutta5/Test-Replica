import { Container, Row, Col } from "reactstrap"



const GetInTouch = () => {
    return (
        <section >
            <Container>
                <Row>
                    <Col lg="11" className="mx-auto">
                        <h2 className="heading text-center">Get In Touch</h2>
                        <Row>
                            <Col lg="7">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0771779680013!2d77.03993891423126!3d28.447089782491286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193f6b683ecf%3A0xeb510130bdec6eae!2sJindal%20Stainless%20Tower!5e0!3m2!1sen!2sin!4v1601893176069!5m2!1sen!2sin" width="100%" height="300px" frameBorder="0" aria-hidden="false" tabIndex="0" />
                            </Col>
                            <Col lg="4" className="ps-5 d-flex flex-column justify-content-center">
                                <Row className="mb-3">
                                    <Col xs="2" md="1" sm="1" className="contacticon-packet"><svg xmlns="http://ww{w.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25.798 38.1"><g transform="translate(0 0)"><path className="contact-icon" d="M124.809,3116.776c-.018,0-.018-.02-.018-.04a12.881,12.881,0,0,0-25.762,0c-.02.18-.72,12.88,12.88,25.22C125.509,3129.616,124.809,3116.916,124.809,3116.776Zm-12.9,6.4a6.44,6.44,0,1,1,6.44-6.44A6.436,6.436,0,0,1,111.909,3123.176Z" transform="translate(-99.017 -3103.856)" /></g></svg></Col>
                                    <Col xs={{ size: '10' }} sm="11" md={{ size: '11' }}>Stainless Centre, Plot No. 50, 6th Floor, Sector-32, Gurgaon, Haryana - 122001</Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs="2" md="1" sm="1" className="contacticon-packet"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32.025 31.795"><g transform="translate(0 0)"><g transform="translate(0 0.904)"><path className="contact-icon" d="M128.343,3178.83a2.386,2.386,0,0,1-.89,1.7l-2.526,1.538c-.308.21-7.688,5.276-19.568-6.524-.018-.016-.032-.016-.032-.032-.018,0-.034-.032-.05-.048l-.032-.034c-11.8-11.88-6.75-19.26-6.49-19.6l1.488-2.462a2.4,2.4,0,0,1,1.7-.922,2.3,2.3,0,0,1,1.846.68l2.962,2.962a2.407,2.407,0,0,1,.194,3.124l-2.04,3.172c-.242.422-1.166,2.8,4.758,8.742,5.94,5.924,8.32,4.984,8.758,4.742l3.188-2.056a2.366,2.366,0,0,1,3.076.226l2.962,2.962A2.355,2.355,0,0,1,128.343,3178.83Z" transform="translate(-97.461 -3152.436)" /></g><g transform="translate(12.464)"><path className="contact-icon" d="M113.1,3164.227a.574.574,0,0,1-.406-.98,4.152,4.152,0,0,0-5.872-5.872.575.575,0,0,1-.814-.812,5.3,5.3,0,0,1,7.5,7.5A.573.573,0,0,1,113.1,3164.227Z" transform="translate(-101.549 -3148.954)" /><path className="contact-icon" d="M116.281,3167.851a.574.574,0,0,1-.406-.98,7.156,7.156,0,0,0-10.12-10.12.574.574,0,1,1-.812-.812,8.3,8.3,0,0,1,11.744,11.744A.576.576,0,0,1,116.281,3167.851Z" transform="translate(-102.611 -3150.455)" /><path className="contact-icon" d="M119.525,3171.542a.574.574,0,0,1-.406-.98,10.215,10.215,0,0,0-14.446-14.446.574.574,0,1,1-.812-.812,11.363,11.363,0,0,1,16.07,16.07A.573.573,0,0,1,119.525,3171.542Z" transform="translate(-103.693 -3151.983)" /></g></g></svg></Col>
                                    <Col xs="10" md={{ size: '11' }} sm="11">
                                        <a href='tel:1800114585'>1800 114 585</a>
                                    </Col>
                                </Row>
                                <Row className="mb-3" >
                                    <Col xs="2" sm="1" md="1" className="contacticon-packet"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 33.854 22.268"><g transform="translate(0 0)"><path className="contact-icon" d="M111.185,3208.375l-13.672-12.222h31.818l-13.672,12.222A3.371,3.371,0,0,1,111.185,3208.375Z" transform="translate(-96.487 -3196.154)" /><path className="contact-icon" d="M97,3196.543l11.6,10.364L97,3217.254Z" transform="translate(-97 -3195.764)" /><path className="contact-icon" d="M116.491,3203.326l1.308-1.186,11.532,10.294H97.513l11.532-10.294,1.308,1.186a4.622,4.622,0,0,0,6.138,0Z" transform="translate(-96.487 -3190.167)" /><path className="contact-icon" d="M119.72,3217.228l-11.586-10.33,11.586-10.347Z" transform="translate(-85.866 -3195.756)" /></g></svg></Col>
                                    <Col xs="10" md='11' sm="11">
                                        <a href='mailto:contact@jindalstainless.com'>contact@jindalstainless.com</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default GetInTouch