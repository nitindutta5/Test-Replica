import { Container , Row, Col } from "reactstrap"
import JobCard from "./JobCard"

const JobListing = ({data}) =>{
    return(
        <Col lg="10" className="mx-auto">
            {data.map((job,id)=>(
                <JobCard slug={job.Slug} name={job.Job_Title} location={job.Location} type={job.Job_Type} key={id}/>
            ))}
        </Col>
    )
}

export  default JobListing