import { Container, Row, Col } from "reactstrap"
import Slider from 'react-slick';
import styles from "../styles/Testimonials.module.css"

const Testimonials = () =>{
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows:false,
        dots:true,
        autoplay:true,
        fade: true,
    };
    const data=[{img:"../Testimonial.jpg",name:"SANJEEV KATARIA"},{img:"../Rajesh.png",name:"RAJESH"}];
    return(
        <section>
            <Container>
                <Row>
                    <Col lg="10"  className="mx-auto">
                            <h2 className="heading text-center ">Our Testimonials</h2>
                                                 <Slider {...settings}>
                    {
                        data.map((obj, id) => (
                            <div key={id}>
                                <div className={styles.slide}>
                                    <div className={styles.imageholder}>
                                    <img src={obj.img} className="img-fluid mb-3" />
                                    </div>
                                    <p className={styles.content}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."</p>
                                    <p className={styles.name}>{obj.name}</p>
                                    <p className={styles.desig}>Author</p>
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

export default Testimonials