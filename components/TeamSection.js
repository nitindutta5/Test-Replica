import { Container, Row, Col } from "reactstrap"
import styles from '../styles/TeamSection.module.css'

const TeamSection = () => {
    const BOD = [
        {
            img: "",
            name: "Ashok Kumar Agarwal"
        },
        {
            img: "",
            name: "Abhishek Poddar"
        },
        {
            img: "",
            name: "Vijay Kumar Sharma"
        },
        {
            img: "",
            name: "Deepika Jindal"
        }
    ];

    const LB = [
        {
            img: './Deepika.png',
            name: "Deepika Jindal",
            designation: "Creative & Managing Director"
        },
        {
            img: './Rajesh.png',
            name: "Rajesh Mohata",
            designation: "CEO, JSL Lifestyle Limited"
        },
        {
            img:'./poddar.jpg',
            name: "Abhishek Poddar",
            designation: "Director, JSL Lifestyle Limited"
        },
        {
            img:'./VS1.jpg',
            name: "Vijay Sharma",
            designation: "Director, JSL Lifestyle Limited"
        }

    ]
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="heading text-center">Our Leadership Team</h2>
                        </Col>
                        <Col lg="12" className={styles.bg}>
                            <Row>
                                {
                                    LB.map((obj, id) => (
                                                <Col lg="3" xs="6" key={id} className={id == 0 ? "ms-auto text-center mb-4" : id == 1 ? "mx-auto text-center mb-4" : "me-auto text-center mb-4"}>
                                                    <img src={obj.img} className={styles.image} />
                                                    <p className={[styles.LDTitle] + " " + [styles.title]}>
                                                        {obj.name}
                                                    </p>
                                                    <p className={styles.LDDesignation}>
                                                        {obj.designation}
                                                    </p>
                                                </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </section>
            {/* <section>
                <Container>
                    
                    <Row>
                        <Col lg="12">
                        <h2 className="heading text-center">Our Board of Directors</h2>
                        </Col>
                      {
                          BOD.map((obj,id)=>(
                              <Col lg="3"  xs="6" key={id} className={styles.BODBox}>
                                  <div className={styles.dummy}></div>
                                  <p className={"text-center "+[styles.title]}>{obj.name}</p>
                              </Col>
                          ))
                      }
                    </Row>
                </Container>
            </section> */}
        </div>
    )
}

export default TeamSection