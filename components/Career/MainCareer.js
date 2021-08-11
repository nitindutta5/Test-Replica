import { Container , Row, Col } from "reactstrap"
import JobListing from "./JobListing"



const MainCareer = ({data}) =>{
    return(
        <section className="bg2">
            <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="heading text-center">What's your superpower?</h2>
                        </Col>
                        <JobListing data={data}/>
                    </Row>
            </Container>
        </section>
    )
}


export default MainCareer