import styles from '../../styles/ModalForm.module.css'
import { Button, Modal, FormGroup, ModalBody, Form, Row, Col, Input } from 'reactstrap';
import { useRouter } from 'next/router'
import { useState } from 'react';
import FileSaver from 'file-saver';

const ModalForm = (props) => {
  const {
    modal,
    toggle,
    file,
    name,
    type
  } = props;


  const closeModal =() =>{
    updateFormData({
      Name: '',
      Email: '',
      Mob: '',
      CompanyName: ''
    });
    toggle();
  }
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  // const mobRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  const mobRegex = /^\d{10}$/;
  const router = useRouter();
  const [formData, updateFormData] = useState({
    Name: '',
    Email: '',
    Mob: '',
    CompanyName: ''
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

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const downloadBrochure = () => {
    // let link = document.createElement('a');
    // link.href = file;
    // link.target = "_blank";
    // link.download = file.substring(file.lastIndexOf('/') + 1);
    // link.dispatchEvent(new MouseEvent('click'));

    FileSaver.saveAs(file, file.substring(file.lastIndexOf('/') + 1));
  }


  const handleBrochureSubmit = (event) => {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "download-brochure",
          "BrochureName": props.name,
          "Name": formData.Name,
          "Email": formData.Email,
          "Mob": formData.Mob,
          "CompanyName": formData.CompanyName
        })
      })
        .then(() => {
          toggle();
          router.push('/thankyou');
          downloadBrochure();
        })
        .catch(error => alert(error))
    }
  }

  const handleEnquirySubmit = (event) => {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "enquiry",
          "Name": formData.Name,
          "Email": formData.Email,
          "Mob": formData.Mob,
          "CompanyName": formData.CompanyName,

        })
      })

        .then(() => {
          toggle();
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
      mobError.invalidMob = "Please enter a valid mobile no. (xxxxxxxxxx)!";
      isValid = false;
    }
    setNameError(nameError);
    setCompanyNameError(companyNameError);
    setEmailError(emailError);
    setMobError(mobError);
    return isValid;
  }


  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} id="ModalForm">
        <img src="../../Cross.svg" className={styles.cross} onClick={closeModal} />
        <ModalBody className="py-5">
          <h2 className="text-center my-4 heading white-color">{type === "downloadBrochure" ? 'Download Brochure' : 'Enquiry Form'}</h2>
          <Row>
            <Col lg="8" className="mx-auto">
              <Form method="post" name={type === "downloadBrochure" ? 'download-brochure' : 'enquiry'} onSubmit={type === "downloadBrochure" ? handleBrochureSubmit : handleEnquirySubmit}>
                <input type="hidden" name="form-name" value={type === "downloadBrochure" ? 'download-brochure' : 'enquiry'} />
                {
                  type==="downloadBrochure" &&
                  <input type="hidden" name="brochureName" value={props.name} />
                }

                <FormGroup row>
                  <Col sm={12} className="mb-4" >
                    <Input type="text" name="Name" onChange={handleChange} value={formData.Name} placeholder="Name" className={styles.formcontrol} />
                    {Object.keys(nameError).map((key) => {
                      return <span style={{ color: "white", fontSize: '12px' }}>{nameError[key]}</span>
                    })}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={12} className="mb-4">
                    <Input type="email" name="Email" onChange={handleChange} value={formData.Email} placeholder="Business- Email" className={styles.formcontrol} />
                    {Object.keys(emailError).map((key) => {
                      return <span style={{ color: "white", fontSize: '12px' }}>{emailError[key]}</span>
                    })}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={12} className="mb-4">
                    <Input type="tel" name="Mob" onChange={handleChange} value={formData.Mob} placeholder="Contact No" className={styles.formcontrol} />
                    {Object.keys(mobError).map((key) => {
                      return <span style={{ color: "white", fontSize: '12px' }}>{mobError[key]}</span>
                    })}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={12} className="mb-5">
                    <Input type="text" name="CompanyName" onChange={handleChange} value={formData.CompanyName} placeholder="Company Name" className={styles.formcontrol} />
                    {Object.keys(companyNameError).map((key) => {
                      return <span style={{ color: "white", fontSize: '12px' }}>{companyNameError[key]}</span>
                    })}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={{ size: 12 }}>
                    <Button color="primary">{type === "downloadBrochure" ? 'Download' : 'Submit'}</Button>
                  </Col>
                </FormGroup>
              </Form>

            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div >
  );
}

export default ModalForm;