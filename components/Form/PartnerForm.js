import { Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState } from 'react';

const PartnerForm = () => {
  return (
    <div className="ps-lg-5 ms-lg-5 pg-3 ms-3">
      <h2 className="heading">Become a Partner</h2>
      <Form>
        <FormGroup row>
          <Col sm={8} className="mb-5" >
            <Input type="text" name="Name" placeholder="Name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} className="mb-5" >
            <Input type="number" name="Name" placeholder="Contact Number" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} className="mb-5">
            <Input type="email" name="email" id="exampleEmail" placeholder="Business E-mail" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} className="mb-5" >
            <Input type="text" name="Company Name" placeholder="Company Name" />
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
          <Col sm={8} >
            <p className="mb-3"> Business Interested In</p>
            <FormGroup check>
              <Row>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" />
                    Homeware
                  </Label>
                </Col>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" />
                    Plumbing Solutions
                  </Label>
                </Col>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" />
                    Jindal Kitchens
                  </Label>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup check>
              <Row>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" />
                    Infra Solutions
                  </Label>
                </Col>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" />
                    OEM Solutions
                  </Label>
                </Col>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" />
                    Mobility
                  </Label>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </FormGroup>


        <FormGroup row>
          <Col sm={{ size: 12 }}>
            <Button color="primary">SEND</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default PartnerForm