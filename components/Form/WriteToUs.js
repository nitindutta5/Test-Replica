import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { useState } from 'react';
import { useRouter } from 'next/router'

const WritetoUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    msg: ""
  });
  const router = useRouter();
  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const encode = (data) => {
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
          "form-name": "contact-form",
          "Name": formData.name,
          "Email": formData.email,
          "Department": formData.department,
          "Msg": formData.msg,
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
    const emailError = {};
    let isValid = true;
    if (formData.name.trim().length < 3) {
      nameError.shortName = "Name is must have atleast 3 characters!"
      isValid = false;
    }
    if (!formData.email.trim().match(emailRegex)) {
      emailError.invalidEmail = "Please enter a valid email!";
      isValid = false;
    }
    setNameError(nameError);
    setEmailError(emailError);
    return isValid;
  }


  return (
    <div className="ps-lg-5 ms-lg-5 pg-3 ms-3">
      <h2 className="heading">Write to Us</h2>
      <Form method="post" name="contact-form" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact-form" />
        <FormGroup row>
          <Col sm={8} className="mb-5" >
            <Input type="text" name="Name" placeholder="Name" onChange={handleChange} value={formData.name} />
            {Object.keys(nameError).map((key) => {
              return <span style={{ color: "red", fontSize: '12px' }}>{nameError[key]}</span>
            })}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} className="mb-5">
            <Input type="email" name="Email" id="exampleEmail" placeholder="Business E-mail" onChange={handleChange} value={formData.email} />
            {Object.keys(emailError).map((key) => {
              return <span style={{ color: "red", fontSize: '12px' }}>{emailError[key]}</span>
            })}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} className="mb-5">
            <Input type="select" name="Department" id="exampleSelect" onChange={handleChange} value={formData.department}>
              <option>Select Department</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={8} className="mb-5">
            <Input type="textarea" name="Msg" id="exampleText" placeholder="Message" onChange={handleChange} value={formData.msg} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={{ size: 12 }}>
            <Button color="primary">SEND</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default WritetoUs