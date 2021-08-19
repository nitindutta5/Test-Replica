import { Container, Row, Col } from "reactstrap";


const SSBenefits = () => {
    const data = [
        {
            img: "./SS-Benefits2/1.svg",
            title:"Hygiene",
            text: "Stainless Steel is easy to clean and hence, is a preferred choice of the healthcareindustry, food processing industry and public infrastructure.Lighter and StrongerWhen used in the transport sector, Stainless Steel helps reduce weight of the vehicle while increasing its load carrying capacity"
        },
        {
            img: "./SS-Benefits2/2.svg",
            title:"Heat Resistance",
            text: "Stainless Steel is known to have high temperature resistance compared to carbon steel, making it the best choice for automobile, railways, and transport industry.Long Term Value On total life cycle costs, stainless Steel is often chosen as the least expensive material."
        },
        {
            img: "./SS-Benefits2/3.svg",
            title:"Lighter and Stronger",
            text: "When used in the transport sector, Stainless Steel helps reduce weight of the vehicle while increasing its load carrying capacity and fuel efficiency."
        },
        {
            img: "./SS-Benefits2/4.svg",
            title:"Ease of Fabrication",
            text: "When used in the transport sector, Stainless Steel helps reduce weight of the vehicle while increasing its load carrying capacity and fuel efficiency."
        },
        {
            img: "./SS-Benefits2/5.svg",
            title:"Long Term Value",
            text: "On total life cycle costs, stainless Steel is often chosen as the least expensive material."
        },
        {
            img: "./SS-Benefits2/6.svg",
            title:"Environmental Compatibility",
            text: "Stainless Steel is durable, requires minimum maintenance and is 100% recyclable"
        }
    ];
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="text-center heading">Stainless Steel Competitive Advantages</h2>
                    </Col>
                    {
                        data.map((obj, id) => (
                            <Col lg="6" key={id} className="ss-card2">
                                <img src={obj.img} className="img-fluid" />
                                <div>
                                <p className="ss-title">{obj.title}</p>
                                <p className="ss-para">{obj.text}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
}

export default SSBenefits