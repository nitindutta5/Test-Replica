import Slider from "react-slick";
import { Row, Col, Button } from "reactstrap";
import styles from '../styles/VerticalsSlider.module.css'
import { useState } from "react";

const VerticalsSlider = () => {

    const getIndex = (e) => {
        setCurrentIndex(e);
    }
    const params = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: false,
        swipeToSlide: true,
        arrows: false,
        adaptiveHeight: true,
        afterChange: getIndex
    }

    const data = [
        {
            img: "../verticals/Homeware.jpg",
            name: "Homeware",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!"
        },
        {
            img: "../verticals/JINDAL_ARC_KITCHENS.jpg",
            name: "Jindal Arc Kitchen",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!"
        },
        {
            img: "../verticals/JSLL_INFRA.jpg",
            name: "JSLL Infra",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!"
        },
        {
            img: "../verticals/JSLL_MOBILITY.jpg",
            name: "JSLL Mobility",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!"
        },
        {
            img: "../verticals/PLUMBING.jpg",
            name: "Plumbing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!"
        },
        {
            img: "../verticals/VE.jpg",
            name: "Value Engineering",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div id="our-Businesses">
            <Slider {...params} className={styles.slider} >
                {
                    data.map((obj, id) => (
                        <div key={id}>
                            <Row>
                                <Col lg="6" className={styles.left} style={{ backgroundImage: `url(${obj.img})` }}>
                                </Col>
                                <Col lg="6" className={styles.right} >
                                    <div className={currentIndex === id ? [styles.active] : ""}>
                                        <div className={styles.box1}>
                                            <h1 className={styles.title}>
                                                {obj.name}
                                            </h1>
                                        </div>

                                        <p className={styles.content}>
                                            {obj.text}
                                        </p>
                                        <Button className={styles.button}>Know more
                                            <img src="../Know-more-arrow-white.svg" className="img-fluid" />
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default VerticalsSlider