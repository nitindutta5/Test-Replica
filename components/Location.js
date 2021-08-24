
import { Row, Col,  Button } from 'reactstrap'
import { offices } from '../Data';


const Location = (props) => {

    return (
        <Row className="mt-5">
            {
                props.data.map((location, id) => (
                    <Col lg="3" md="4" xs="12" key={id} className="mb-4">
                        <small className="heading mb-2">{location.name}</small>
                        <p className="pe-2 mb-3">{location.desc}</p>
                        
                        {location.href&&<a href={location.href} target="_blank" >
                            <Button color="primary">Navigate</Button>
                        </a>}
                    </Col>
                ))
            }
        </Row >
    );

}


export default Location