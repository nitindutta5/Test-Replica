import Slider from "react-slick";
import { Row, Col, Button } from "reactstrap";
import styles from '../styles/VerticalsSlider.module.css'
import { useState } from "react";
import Link from "next/link";
import {BusinessVerticals} from '../Data'

const VerticalsSlider = () => {

    const getIndex = (e) => {
        setPreviousIndex(currentIndex);
        setCurrentIndex(e);
    }
    const params = {
        autoplay: true,
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(null);
    return (
        <div id="our-Businesses">

            <Row>
                <Col lg="6" className="px-0">
                    <Slider {...params} className={styles.slider} >
                        {
                            BusinessVerticals.map((obj, id) => (
                                <div key={id}>
                                    <div className={styles.left} style={{ backgroundImage: `url(${obj.img})` }}>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </Col>
                <Col lg="6" className={styles.right} >
                    <div className={`${currentIndex>previousIndex?styles.forward:styles.backward}`}>
                    <img src={BusinessVerticals[currentIndex].logo} alt="" className={styles.logo}/>
                        <div className={styles.box1}>
                            <h1 className={styles.title}>
                                {BusinessVerticals[currentIndex].name}
                            </h1>
                        </div>
                        <p className={styles.content}>
                            {BusinessVerticals[currentIndex].text}
                        </p>
                        <Link href={BusinessVerticals[currentIndex].url}>
                            <Button className={styles.button}>Know more
                                <img src="../Know-more-arrow-white.svg" className="img-fluid" />
                            </Button>
                        </Link>
                        <Button className="mt-5" color="secondary">Download Brochure
                        </Button>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default VerticalsSlider