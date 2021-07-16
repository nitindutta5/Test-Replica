import { Col, Button, Form, FormGroup,Input, Label } from 'reactstrap';


const PartnerForm = () =>{
    return(
    <div className="ps-5 ms-5">
        <h2 className="heading">Become a Partner</h2>
        <Form>
        <FormGroup row>
        <Col sm={8} className="mb-5" >
          <Input type="text" name="Name"  placeholder="Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={8} className="mb-5" >
          <Input type="number" name="Name"  placeholder="Contact Number" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={8} className="mb-5">
          <Input type="email" name="email" id="exampleEmail" placeholder="Business E-mail" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={8} className="mb-5" >
          <Input type="text" name="Company Name"  placeholder="Company Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
      <Col sm={8} className="mb-5">
        <Input type="select" name="select" id="exampleSelect">
          <option selected>Location</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={10} className="mb-5">
            <p className="mb-3"> Business Interested In</p>
        <FormGroup check row>
        <Col sm={4} className="mb-5">
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
            Hardware
            </Label>
            </Col>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
            Infra
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
 

      <FormGroup row>
        <Col sm={{ size: 12}}>
          <Button color="primary">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
    );
}

export default PartnerForm