import { Container, Row, Col } from "reactstrap";
import Slider from 'react-slick';
import styles from '../styles/SocialMedia.module.css'


const data = [
    {
        img: './socialmedia/1.png',
        type:"fb"
    },
    {
        img: './socialmedia/2.png',
        type: 'insta'
    },
    {
        img: './socialmedia/3.png',
        type: 'twitter'
    },
    {
        img: './socialmedia/4.png',
        type: 'twitter'
    }
];

const SocialMedia = () =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true
    };
    return(
        <section>
        <Container >
            <Row>
                <Col lg="12">
                    <h2 className="heading text-center ">Social Media</h2>
                </Col>
                <Col lg="12" className="mx-auto" >

                        <Slider {...settings}>
                            {
                                data.map((obj, id) => (
                                    <div key={id} className="position-relative">
                                        <img className={styles.icon} src={obj.type=="fb"&&"./socialmedia/fb.svg" ||obj.type=="insta"&&"./socialmedia/insta.svg" || obj.type=="twitter"&&"./socialmedia/twitter.svg"   }/>
                                        <img src={obj.img} className="img-fluid" />
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

export default SocialMedia