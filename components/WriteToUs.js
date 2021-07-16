import { Col, Button, Form, FormGroup,Input } from 'reactstrap';


const WritetoUs = () =>{
    return(
    <div className="ps-5 ms-5">
        <h2 className="heading">Write to Us</h2>
        <Form>
        <FormGroup row>
        <Col sm={8} className="mb-5" >
          <Input type="text" name="Name"  placeholder="Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={8} className="mb-5">
          <Input type="email" name="email" id="exampleEmail" placeholder="Business E-mail" />
        </Col>
      </FormGroup>
      <FormGroup row>
      <Col sm={8} className="mb-5">
        <Input type="select" name="select" id="exampleSelect">
          <option selected>Department</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={8} className="mb-5">
          <Input type="textarea" name="text" id="exampleText"  placeholder="Message"/>
        </Col>
      </FormGroup>
 

      <FormGroup row>
        <Col sm={{ size: 12}}>
          <Button color="primary">Submit</Button>
        </Col>
      </FormGroup>
    </Form>
    </div>
    )
}

export default WritetoUs