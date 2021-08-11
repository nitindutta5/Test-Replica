import Slider from "react-slick";
import { Row, Col, Button } from "reactstrap";
import styles from '../styles/VerticalsSlider.module.css'
import { useState } from "react";
import Link from "next/link";
import {BusinessVerticals} from '../Data'

const VerticalsSlider = ({data,ModalToggle, UpdateName, UpdateFile, UpdateType}) => {

    const getIndex = (e) => {
        setPreviousIndex(currentIndex);
        setCurrentIndex(e);
    }

    const handleDownloadBrochure = (file, name, type) => {
        UpdateName(name);
        UpdateFile(file);
        UpdateType(type);
        ModalToggle();
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
                            data.map((obj, id) => (
                                <div key={id}>
                                    <div className={styles.left} style={{ backgroundImage: `url(${obj.Featured_Img.url})` }}>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </Col>
                <Col lg="6" className={styles.right} >
                    <div className={`${currentIndex>previousIndex?styles.forward:styles.backward}`}>
                    <img src={data[currentIndex].logo.url} alt="" className={styles.logo}/>
                        <div className={styles.box1}>
                            <h1 className={styles.title}>
                                {data[currentIndex].name}
                            </h1>
                        </div>
                        <p className={styles.content}>
                            {data[currentIndex].Description}
                        </p>
                        <Link href={`ourBusinesses/${data[currentIndex].slug}`}>
                            <Button className={styles.button}>Know more
                                <img src="../Know-more-arrow-white.svg" className="img-fluid" />
                            </Button>
                        </Link>
                        <Button className="mt-5" color="secondary" onClick={() => handleDownloadBrochure(data[currentIndex].File.url, data[currentIndex].slug, "downloadBrochure")}>Download Brochure
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default VerticalsSlider