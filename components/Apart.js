import { Container, Row, Col, Button } from 'reactstrap'
import Slider from 'react-slick';
import styles from '../styles/Apart.module.css'

const data = [
    {
        img: './apart/1.png',
        title: 'The leading player in stainless steel space for both B2B & B2C,backed by the House of Jindals, the largest producer of stainless steel in India.'
    },
    {
        img: './apart/2.png',
        title: 'Forward integration with our retail footprint.'
    },
    {
        img: './apart/3.png',
        title: 'Honing business partner relationships with long-term vision and perspective'
    },
    {
        img: './apart/4.png',
        title: '100% customer satisfaction focus & compliance with customer SOP for each process'
    },
    {
        img: './apart/5.png',
        title: 'Customised solutions, hassle-free services for all products'
    },
    {
        img: './apart/6.png',
        title: 'Catering to a diverse range of segments from homespace & homeware, to infra, to plumbing, to OEM segments in powerful stainless steel'
    },
    {
        img: './apart/7.png',
        title: 'State-of-the-art plant with the ability to serve large quantities in short lead time'
    },
    {
        img: './apart/8.png',
        title: 'Self-reliant and sturdy group securing competitive pricing with backward integration of raw material for most of our products'
    },
    {
        img: './apart/9.png',
        title: 'A unique blend of manufacturing abilities and marketplace sensibilities'
    },
    {
        img: './apart/10.png',
        title: 'Extremely eco-friendly, contributing to the larger environmental drives'
    }
];
const Apart = () => {
    var settings = {
        speed: 500,
        slidesToShow: 6,
        autoplay: true,
        arrows:false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots:false
                }
              }
        ]  
    };
    return (
        <section className="bg2">
            <Container fluid >
                <Row>
                    <Col lg="12" >
                        <h2 className="heading text-center">What Sets Us Apart</h2>
                    </Col>
                    <Col lg="12" className="px-0 position-relative">
                        <Slider {...settings}>
                            {
                                data.map((obj, id) => (
                                    <div key={id} className="position-relative">
                                        <div className={styles.card}>
                                            <p className={styles.number}>{id+1}</p>
                                        <img src={obj.img} className={"img-fluid "+[styles.icon]} />
                                        <p className={styles.content}>{obj.title}</p>
                                        </div>
                                      
                                    </div>
                                ))
                            }
                        </Slider>
                        <img src="./left-cart.png" className={styles.left}/>
                    </Col>
                </Row>
            </Container>
          
        </section>
    )
}

export default Apart;