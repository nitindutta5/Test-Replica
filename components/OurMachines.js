import { Container, Row, Col, Button } from 'reactstrap'
import Slider from 'react-slick';
import styles from '../styles/OurBusinesses.module.css'

const data = [
    {
        img: './ourmachines/Shearing-Bending-Machine.png',
        title: 'Shearing Bending Machine'
    },
    {
        img: './ourmachines/Robotic-Welding-Machine.png',
        title: 'Robotic Welding Machine'
    },
    {
        img: './ourmachines/Shearing-Machine.png',
        title: 'Shearing Machine'
    },
    {
        img: './ourmachines/Laser-Welding-Machine.png',
        title: 'Laser Welding Machine'
    },
    {
        img: './ourmachines/Laser-Cutting-Machine.png',
        title: 'Laser Cutting Machine'
    },
    {
        img: './ourmachines/Cold-Roll-Forming-Process.png',
        title: 'Cold Roll Forming Process'
    }
];
const OurMachines = () => {
    var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay: true,
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
                  centerPadding: '50px',
                }
              }
        ]  
    };
    return (
        <section>
            <Container fluid id="businesses">
                <Row>
                    <Col lg="12" >
                        <h2 className="heading text-center">Our Manufacturing Equipments</h2>
                    </Col>
                    <Col lg="12" className="px-0">
                        <Slider {...settings}>
                            {
                                data.map((obj, id) => (
                                    <div key={id} className="position-relative">
                                        <img src={obj.img} className="img-fluid" />
                                        <p className={styles.title2}>{obj.title}</p>
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

export default OurMachines;