import { Row, Container, Col } from 'reactstrap'
const data = [
    



    {
        img: "../Group 51861.svg",
        businessHead: "Pushpa Chowdhary",
        plant: "OEM",
        mobile: "(314)123-5670",
        email: "Pushpa.chowdhary@jindalstainless.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Rajiv Kapoor",
        plant: "Real Estate | Plumbing | Kitchens (North & East India)",
        mobile: "(314)123-5670",
        email: "Rajiv.kapoor@jindalstainless.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Pankaj Kumar",
        plant: "Real Estate | Plumbing | Kitchens (South & West India)",
        mobile: "(314)123-5670",
        email: "Pankaj.kumar1@jindalstainless.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Vijay Arya",
        plant: "Rohad Plant ",
        mobile: "(314)123-5670",
        email: "Vijay.arya@jindalstainless.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Tanuj Chahl",
        plant: "Mobility",
        mobile: "(314)123-5670",
        email: "Tanuj.chahal@jindalstainless.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Shreyash Trivedi",
        plant: "Homeware | Marketing",
        mobile: "(314)123-5670",
        email: "Shreyash.trivedi@jindalstainless.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Manak Garg",
        plant: "COO | Mobility",
        mobile: "(314)123-5670",
        email: "Manak.garg@jindalstainless.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Munish Mohan",
        plant: "Pathredi Plant",
        mobile: "(314)123-5670",
        email: "Munish.mohan@jindalstainless.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Vikram Rawat",
        plant: "Chennai Plant",
        mobile: "(314)123-5670",
        email: "Vikram.rawat@jindalstainless.com"
    },
    {
        img:"",
        businessHead:"Mandvi Shringi",
        plant:"HR",
        mobile:"(314)123-5670",
        email:"Mandvi.shringi@jindalstainless.com"
    }
];

const OurOffices = () => {
    return (
        <section  className="pb-0">
            <Container>
                <Row>
                    <Col lg="10" className="mx-auto">
                        <h2 className="heading text-center">Get in Touch</h2>
                        <Row>
                            {
                                data.map((obj, id) => (
                                    <Col lg="4" md="6" xs="12" key={id} className="mx-auto" >
                                        <div className="office-card">
                                            <h6 className="my-2">{obj.businessHead}</h6>
                                            <p className="mb-2 plant">{obj.plant}</p>
                                            {/* <div className="mb-2"><img src="../Icon-ionic-ios-call.svg" className="icon img-fluid me-2" />{obj.mobile}</div> */}
                                            <div><img src="../Icon-feather-mail.svg" className="img-fluid icon me-2" /><a className="email" href={`mailto:${obj.email}`} target="_blank">{obj.email}</a></div>
                                        </div>
                                    </Col>
                                ))
                            }

                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurOffices