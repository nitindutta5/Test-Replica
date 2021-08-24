
import { Row, Col,  Button } from 'reactstrap'
import { stores } from '../Data';


const StoresLocation = () => {

    return (
        <Row className="mt-5">
            {
               stores.map((location, id) => (
                    <Col lg="3" md="3" key={id} className="mb-4">
                        <small className="heading mb-2">{location.name}</small>
                        <p className="pe-2 mb-3">{location.desc}</p>
                        <a href={location.href} target="_blank" >
                            <Button color="primary">Navigate</Button>
                        </a>
                    </Col>
                ))
            }
        </Row >
    );

}


export default StoresLocation