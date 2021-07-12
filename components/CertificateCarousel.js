import { Container, Row, Col } from 'reactstrap'
import Swiper from 'react-id-swiper';
import React from 'react'


const CertificateCarousel = () => {
    const data =["./CERTIFICATES/TUV-SUD-E.png","./CERTIFICATES/TUV-SUD-H.png","./CERTIFICATES/TUV-SUD-Q.png","./CERTIFICATES/TUV-Nord.png","./CERTIFICATES/DVS-Zert.png","./CERTIFICATES/CE-Certified.png"]
    const params = {
        spaceBetween: 20,
        slidesPerView: 5,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
          },
        loop: true,
        breakpoints: {
            1100: {
              slidesPerView: 5  
            },
            800: {
                slidesPerView: 3
            },
            100: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        }
    }

    return (
        <section>
            <Container className="Certificate">
                <Row>
                    <Col md="12">
                        <h2 className="heading text-center">Certifications</h2>
                    </Col>
                </Row>
                <Row className="mx-auto">
                    <Col md="10" className="mx-auto">
                        <Swiper {...params}>
                            {
                            data.map((obj, id) => (
                                <div key={id} className="clientslide">
                                    <img src={obj} className="client" />
                              
                                </div> 
                                ))
                            }     
                    </Swiper>
                    </Col>
            </Row>
            </Container>            
            </section>
    )
}


export default CertificateCarousel