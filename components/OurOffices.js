import { Row, Container, Col } from 'reactstrap'
const data = [
    {
        img: "../Group 51861.svg",
        businessHead: "Name of Business Head",
        plant: "Chennai Plant",
        mobile: "(314)123-5670",
        email: "jindalinfo@gmail.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Name of Business Head",
        plant: "Chennai Plant",
        mobile: "(314)123-5670",
        email: "jindalinfo@gmail.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Name of Business Head",
        plant: "Chennai Plant",
        mobile: "(314)123-5670",
        email: "jindalinfo@gmail.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Name of Business Head",
        plant: "Chennai Plant",
        mobile: "(314)123-5670",
        email: "jindalinfo@gmail.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Name of Business Head",
        plant: "Chennai Plant",
        mobile: "(314)123-5670",
        email: "jindalinfo@gmail.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Name of Business Head",
        plant: "Chennai Plant",
        mobile: "(314)123-5670",
        email: "jindalinfo@gmail.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Name of Business Head",
        plant: "Chennai Plant",
        mobile: "(314)123-5670",
        email: "jindalinfo@gmail.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Name of Business Head",
        plant: "Chennai Plant",
        mobile: "(314)123-5670",
        email: "jindalinfo@gmail.com"
    },
    {
        img: "../Group 51861.svg",
        businessHead: "Name of Business Head",
        plant: "Chennai Plant",
        mobile: "(314)123-5670",
        email: "jindalinfo@gmail.com"
    }
];

const OurOffices = () => {
    return (
        <section >
            <Container>
                <Row>
                    <Col lg="10" className="mx-auto">
                        <h2 className="heading text-center">Our Offices Pan India</h2>
                        <Row>
                            {
                                data.map((obj, id) => (
                                    <Col lg="4" key={id} >
                                        <div className="office-card">
                                            <img src={obj.img} className="img-fluid" />
                                            <p className="my-2">{obj.businessHead}</p>
                                            <p className="mb-2">{obj.plant}</p>
                                            <div className="mb-2"><img src="../Icon-ionic-ios-call.svg" className="icon img-fluid me-2" />{obj.mobile}</div>
                                            <div><img src="../Icon-feather-mail.svg" className="img-fluid icon me-2" />{obj.email}</div>
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