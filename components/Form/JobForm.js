import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';
const countryCode = require('country-codes-list');

const JobForm = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // const mobRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const mobRegex = /^\d{10}$/;
    const router = useRouter();

    const myCountryCodesObject = countryCode.customList('countryCode', '[{countryCode}] {countryNameEn}: +{countryCallingCode}');

    console.log(myCountryCodesObject);
    const [formData, updateFormData] = useState({
        Name: '',
        Email: '',
        Mob: '',
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
        <>
            <Form method="post" name="partner-form" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="job-form" />
                <FormGroup row>
                    <Col sm={8} className="my-4" >
                        <div className="border p-2">
                            <Input type="file" name="Resume" />
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="my-4" >
                        <Input type="text" name="Name" placeholder="Name*" onChange={handleChange} value={formData.Name} />
                        {Object.keys(nameError).map((key) => {
                            return <span style={{ color: "red", fontSize: '12px' }}>{nameError[key]}</span>
                        })}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={8} className="mb-4">
                        <Input type="email" name="Email" id="exampleEmail" placeholder="Email*" onChange={handleChange} value={formData.Email} />
                        {Object.keys(emailError).map((key) => {
                            return <span style={{ color: "red", fontSize: '12px' }}>{emailError[key]}</span>
                        })}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="tel" name="Mob" placeholder="Contact Number" onChange={handleChange} value={formData.Mob} />
                        {Object.keys(mobError).map((key) => {
                            return <span style={{ color: "red", fontSize: '12px' }}>{mobError[key]}</span>
                        })}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="text" name="Address" placeholder="Address" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="text" name="currentLocation" placeholder="Current Location" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="date" name="Dob" placeholder="Date of Birth" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={{ size: 12 }}>
                        <Button color="primary">SEND</Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    );
}

export default JobForm