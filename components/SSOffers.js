import { Container, Row, Col } from "reactstrap";


const SSOffers = () => {
    const data = [
        {
            img: "./SS-Benefits/1.png",
            text: "Seamless Connection of Pipes To Fittings"
        },
        {
            img: "./SS-Benefits/2.png",
            text: "Seamless Connection of Pipes To Fittings"
        },
        {
            img: "./SS-Benefits/3.png",
            text: "Seamless Connection of Pipes To Fittings"
        },
        {
            img: "./SS-Benefits/4.png",
            text: "Seamless Connection of Pipes To Fittings"
        },
        {
            img: "./SS-Benefits/5.png",
            text: "Seamless Connection of Pipes To Fittings"
        },
        {
            img: "./SS-Benefits/6.png",
            text: "Seamless Connection of Pipes To Fittings"
        },
        {
            img: "./SS-Benefits/7.png",
            text: "Seamless Connection of Pipes To Fittings"
        },

        {
            img: "./SS-Benefits/8.png",
            text: "Seamless Connection of Pipes To Fittings"
        },
        {
            img: "./SS-Benefits/9.png",
            text: "Seamless Connection of Pipes To Fittings"
        },
        {
            img: "./SS-Benefits/10.png",
            text: "Seamless Connection of Pipes To Fittings"
        },
        {
            img: "./SS-Benefits/11.png",
            text: "Seamless Connection of Pipes To Fittings"
        },
        {
            img: "./SS-Benefits/12.png",
            text: "Seamless Connection of Pipes To Fittings"
        }
    ];
    return (
        <section className="bg3">
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="text-center heading white-color">What Stainless Steel Offers</h2>
                    </Col>
                    {
                        data.map((obj, id) => (
                            <Col lg="3" key={id} className="ss-card">
                                <img src={obj.img} className="img-fluid" />
                                <p className="white-color">{obj.text}</p>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
}

export default SSOffers