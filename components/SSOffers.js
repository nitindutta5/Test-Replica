import { Container, Row, Col } from "reactstrap";


const SSOffers = () => {
    const data = [
        // {
        //     img: "./SS-Benefits/1.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        // {
        //     img: "./SS-Benefits/2.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        // {
        //     img: "./SS-Benefits/3.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        // {
        //     img: "./SS-Benefits/4.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        // {
        //     img: "./SS-Benefits/5.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        // {
        //     img: "./SS-Benefits/6.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        // {
        //     img: "./SS-Benefits/7.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },

        // {
        //     img: "./SS-Benefits/8.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        // {
        //     img: "./SS-Benefits/9.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        // {
        //     img: "./SS-Benefits/10.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        // {
        //     img: "./SS-Benefits/11.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        // {
        //     img: "./SS-Benefits/12.png",
        //     text: "Seamless Connection of Pipes To Fittings"
        // },
        {
            img:"./SS-Benefits/01_Fire-Resistance.png",
            text:"Fire Resistance"
        },
        ,{
            img:"./SS-Benefits/02_Termite-Free.png",
            text:"Termite Free"
        },
        ,{
            img:"./SS-Benefits/03_Corrosion-Protection.png",
            text:"Corrosion Protection"
        },
        ,{
            img:"./SS-Benefits/04_Light-Weight.png",
            text:"Light-Weight"
        },
        ,{
            img:"./SS-Benefits/05_Longevity.png",
            text:"Longevity"
        },
        ,{
            img:"./SS-Benefits/06_Low-Maintenance.png",
            text:"Low Maintenance"
        },
        ,{
            img:"./SS-Benefits/07_Hygienic.png",
            text:"Hygienic"
        },
        ,{
            img:"./SS-Benefits/08_High-Pressure-Resistance.png",
            text:"High Pressure Resistance"
        },
        ,{
            img:"./SS-Benefits/09_Eco-Friendly.png",
            text:"Eco Friendly"
        },
        ,{
            img:"./SS-Benefits/10_Aesthetic-Value.png",
            text:"Aesthetic Value"
        },
        ,{
            img:"./SS-Benefits/11_Durable.png",
            text:"Durable"
        }
    ];
    return (
        <section className="bg3">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12">
                        <h2 className="text-center heading white-color">Benefits of Stainless Steel</h2>
                    </Col>
                    {
                        data.map((obj, id) => (
                            <Col lg="3" xs="6" key={id} className="ss-card">
                                <img src={obj.img} className="img-fluid" />
                                <p className="white-color">{obj.text}</p>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section >
    );
}

export default SSOffers