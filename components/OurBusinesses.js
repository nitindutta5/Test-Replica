import { Container, Row, Col, Button } from 'reactstrap'
import Slider from 'react-slick';
import styles from '../styles/OurBusinesses.module.css'

const data = [
    {
        img: './ourbusinesses/1.png',
        title: 'Test'
    },
    {
        img: './ourbusinesses/2.png',
        title: 'Infra Solutions'
    },
    {
        img: './ourbusinesses/3.png',
        title: 'Test'
    },
    {
        img: './ourbusinesses/4.png',
        title: 'Test'
    },
    {
        img: './ourbusinesses/5.png',
        title: 'Test'
    },
    {
        img: './ourbusinesses/3.png',
        title: 'Test'
    }
];
const OurBusinesses = () => {
    var settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        // autoplay: true,
        centerPadding: "0px",
        arrows: false,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots:false,
                  centerPadding: '50px'
                }
              }
        ]  
    };
    return (
        <section>
            <Container fluid id="businesses">
                <Row>
                    <Col lg="12" >
                        <h2 className="heading text-center">Our Businesses</h2>
                    </Col>
                    <Col lg="12" className="px-0">
                        <Slider {...settings}>
                            {
                                data.map((obj, id) => (
                                    <div key={id} >
                                        <div className="main">
                                        <img src={obj.img} className="img-fluid" />
                                        <p className={styles.title}>{obj.title}</p>
                                        <Button className={styles.btn} color="secondary">Download Brochure</Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurBusinesses;