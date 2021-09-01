import { Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';
import FormData from 'form-data';
const countryCode = require('country-codes-list');



const JobForm = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const mobRegex = /^\d{10}$/;
    const router = useRouter();

    const myCountryCodesObject = countryCode.customList('countryCode', '[{countryCode}] {countryNameEn}: +{countryCallingCode}');

    const countryCodes = Object.entries(myCountryCodesObject);
    const [data, updateData] = useState({
        Resume: null,
        Name: '',
        Email: '',
        countryCode: 'India: +91',
        Mob: '',
        Address: '',
        currentLocation: '',
        dOB: '',
        totalExperience: '',
        noticePeriod: '',
        currentCompany: '',
        currentCtc: '',
        expectedCtc: ''

    });
    const [nameError, setNameError] = useState({});
    const [emailError, setEmailError] = useState({});
    const [mobError, setMobError] = useState({});
    const [resumeError, setResumeError] = useState({});
    const handleChange = e => {
        const { name, value } = e.target;
        updateData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const handleResume = (val) => {
        updateData(prevState => ({
            ...prevState,
            Resume: val
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = formValidation();
        if (isValid) {
            let formdata = new FormData();
            formdata.append("form-name", "job-form");
            formdata.append('Name', data.Name);
            formdata.append("Resume", data.Resume[0]);
            formdata.append("Mob", data.Mob);
            formdata.append("countryCode", data.countryCode);
            formdata.append("Email", data.Email);
            if (data.Address.trim() != "") formdata.append("Address", data.Address);
            if (data.currentLocation.trim() != "") formdata.append("currentLocation", data.currentLocation);
            if (data.dOB.trim() != "") formdata.append("dOB", data.dOB);
            if (data.totalExperience.trim() != "") formdata.append("totalExperience", data.totalExperience);
            if (data.noticePeriod.trim() != "") formdata.append("noticePeriod", data.noticePeriod);
            if (data.currentCompany.trim() != "") formdata.append("currentCompany", data.currentCompany);
            if (data.currentCtc.trim() != "") formdata.append("currentCtc", data.currentCtc);
            if (data.expectedCtc.trim() != "") formdata.append("expectedCtc", data.expectedCtc);
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "multipart/form-data" },
                body: new URLSearchParams(formdata).toString()
            })
                .then(() => {
                    router.push('/thankyou');

                })
                .catch(error => alert(error))
        }
    }

    const formValidation = () => {
        const nameError = {};
        const resumeError = {};
        const emailError = {};
        const mobError = {};
        let isValid = true;
        if (data.Name.trim().length < 3 || data.Name.trim().length === 0) {
            nameError.shortName = "Name is must have atleast 3 characters!"
            isValid = false;
        }
        if (data.Resume === null) {
            resumeError.invalidResume = "Please upload Resume!";
            isValid = false;
        }
        if (!data.Email.trim().match(emailRegex)) {
            emailError.invalidEmail = "Please enter a valid email!";
            isValid = false;
        }
        if (!data.Mob.trim().match(mobRegex)) {
            mobError.invalidMob = "Please enter a valid mobile no. (xxxxxxxxxx)!";
            isValid = false;
        }
        setNameError(nameError);
        setResumeError(resumeError);
        setEmailError(emailError);
        setMobError(mobError);
        return isValid;
    }

    return (
        <>
            <Form method="post" name="job-form" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="job-form" />
                <FormGroup row>
                    <Col sm={8} className="my-4" >
                        <Label className="mb-2">Attach CV*  pdf, docx</Label>
                        <div className="border p-2">
                            <Input type="file" name="Resume" accept=".pdf,.docx" onChange={(e) => handleResume(e.target.files)} />
                            {Object.keys(resumeError).map((key) => {
                                return <span style={{ color: "red", fontSize: '12px' }}>{resumeError[key]}</span>
                            })}
                        </div>
                    </Col>
                </FormGroup>
                <p className="mb-2 bold form-Section">Personal Details</p>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="text" name="Name" placeholder="Name*" onChange={handleChange} value={data.Name} />
                        {Object.keys(nameError).map((key) => {
                            return <span style={{ color: "red", fontSize: '12px' }}>{nameError[key]}</span>
                        })}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={8} className="mb-4">
                        <Input type="email" name="Email" id="exampleEmail" placeholder="Email*" onChange={handleChange} value={data.Email} />
                        {Object.keys(emailError).map((key) => {
                            return <span style={{ color: "red", fontSize: '12px' }}>{emailError[key]}</span>
                        })}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4 d-flex" >
                        <Input type="select" className="w-25" name="countryCode" onChange={handleChange} value={data.countryCode}>
                            {
                                countryCodes.map((code, id) => (
                                    <option key={id}>{' ' + code[1].replace(/(\[.*?\])/g, '')}</option>
                                ))
                            }
                        </Input>
                        <Input type="tel" name="Mob" placeholder="Contact Number" className="border-left" onChange={handleChange} value={data.Mob} />
                        {Object.keys(mobError).map((key) => {
                            return <span style={{ color: "red", fontSize: '12px' }}>{mobError[key]}</span>
                        })}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="text" name="Address" placeholder="Address" onChange={handleChange} value={data.Address} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="text" name="currentLocation" placeholder="Current Location" onChange={handleChange} value={data.currentLocation} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Label>Date of Birth</Label>
                        <Input type="date" name="dOB" placeholder="Date of Birth" onChange={handleChange} value={data.dOB} />
                    </Col>
                </FormGroup>
                <p className="mb-2 bold form-Section">Employment Details</p>

                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="number" name="totalExperience" placeholder="Total Experience (yrs)*" onChange={handleChange} value={data.totalExperience} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="number" name="noticePeriod" placeholder="Notice Period (days)*" onChange={handleChange} value={data.noticePeriod} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="text" name="currentCompany" placeholder="Current Company*" onChange={handleChange} value={data.currentCompany} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="text" name="currentCtc" placeholder="Current CTC*" onChange={handleChange} value={data.currentCtc} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={8} className="mb-4" >
                        <Input type="text" name="expectedCtc" placeholder="Expected CTC*" onChange={handleChange} value={data.expectedCtc} />
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