import { Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';

const PartnerForm = () => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mobRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  const router = useRouter();
  const [formData, updateFormData] = useState({
    Name: '',
    Email: '',
    Mob: '',
    CompanyName: '',
    Location: '',
    Interests: ''
  });
  const [nameError, setNameError] = useState({});
  const [companyNameError, setCompanyNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [mobError, setMobError] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;
    updateFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      let oldInterest = formData.Interests;
      updateFormData(prevState => ({
        ...prevState,
        Interests: oldInterest.concat(`${e.target.name}, `)
      }));
    }
    else {
      if (formData.Interests.includes(e.target.name)) {
        let oldInterest = formData.Interests;
        let newInterest = oldInterest.replace(`${e.target.name},`, '')
        updateFormData(prevState => ({
          ...prevState,
          Interests: newInterest
        }));
      }
    }
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "partner-form",
          "Name": formData.Name,
          "Email": formData.Email,
          "Mob": formData.Mob,
          "CompanyName": formData.CompanyName,
          "Location": formData.Location,
          "Interest": formData.Interests
        })
      })
        .then(() => {
          router.push('/thankyou');

        })
        .catch(error => alert(error))
    }
  }

  const formValidation = () => {
    const nameError = {};
    const companyNameError = {};
    const emailError = {};
    const mobError = {};
    let isValid = true;
    if (formData.Name.trim().length < 3 || formData.Name.trim().length === 0) {
      nameError.shortName = "Name is must have atleast 3 characters!"
      isValid = false;
    }
    if (formData.CompanyName.trim().length == 0) {
      companyNameError.emptyCompanyName = "Company Name can't be empty!";
      isValid = false;
    }
    if (!formData.Email.trim().match(emailRegex)) {
      console.log(formData.Email.trim());
      emailError.invalidEmail = "Please enter a valid email!";
      isValid = false;
    }
    if (!formData.Mob.trim().match(mobRegex)) {
      mobError.invalidMob = "Please enter a valid mobile no. (+xx-xxxxxxxxxx)!";
      isValid = false;
    }
    setNameError(nameError);
    setCompanyNameError(companyNameError);
    setEmailError(emailError);
    setMobError(mobError);
    return isValid;
  }

  return (
    <div className="ps-lg-5 ms-lg-5 pg-3 ms-3">
      <h2 className="heading">Become a Partner</h2>
      <Form method="post" name="partner-form" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="partner-form" />
        <FormGroup row>
          <Col sm={8} className="mb-5" >
            <Input type="text" name="Name" placeholder="Name" onChange={handleChange} value={formData.Name} />
            {Object.keys(nameError).map((key) => {
              return <span style={{ color: "red", fontSize: '12px' }}>{nameError[key]}</span>
            })}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} className="mb-5" >
            <Input type="tel" name="Mob" placeholder="Contact Number" onChange={handleChange} value={formData.Mob} />
            {Object.keys(mobError).map((key) => {
              return <span style={{ color: "red", fontSize: '12px' }}>{mobError[key]}</span>
            })}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} className="mb-5">
            <Input type="email" name="Email" id="exampleEmail" placeholder="Business E-mail" onChange={handleChange} value={formData.Email} />
            {Object.keys(emailError).map((key) => {
              return <span style={{ color: "red", fontSize: '12px' }}>{emailError[key]}</span>
            })}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} className="mb-5" >
            <Input type="text" name="CompanyName" placeholder="Company Name" onChange={handleChange} value={formData.CompanyName} />
            {Object.keys(companyNameError).map((key) => {
              return <span style={{ color: "red", fontSize: '12px' }}>{companyNameError[key]}</span>
            })}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} className="mb-5">
            <Input type="select" name="Location" id="exampleSelect" onChange={handleChange} value={formData.Location}>
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
                    <Input type="checkbox" id="checkbox2" name="homeware" onChange={handleCheck} />
                    Homeware
                  </Label>
                </Col>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" name="plumbingSolution" onChange={handleCheck} />
                    Plumbing Solutions
                  </Label>
                </Col>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" name="jindalKitchen" onChange={handleCheck} />
                    Jindal Kitchens
                  </Label>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup check>
              <Row>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" name="infraSolution" onChange={handleCheck} />
                    Infra Solutions
                  </Label>
                </Col>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" name="oemSolutions" onChange={handleCheck} />
                    OEM Solutions
                  </Label>
                </Col>
                <Col sm={4} className="mb-4">
                  <Label check>
                    <Input type="checkbox" id="checkbox2" name="mobility" onChange={handleCheck} />
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