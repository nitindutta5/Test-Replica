import Slider from "react-slick";
import { Row, Col, Button } from "reactstrap";
import styles from '../styles/VerticalsSlider.module.css'
import { useState } from "react";
import Link from "next/link";
import { BusinessVerticals } from '../Data'

const VerticalsSlider = ({ data, ModalToggle, UpdateName, UpdateFile, UpdateType }) => {

    // const getIndex = (e) => {
    //     // setPreviousIndex(currentIndex);
    //     setCurrentIndex(e);
    // }
    console.log(data);

    const handleDownloadBrochure = (file, name, type) => {
        UpdateName(name);
        UpdateFile(file);
        UpdateType(type);
        ModalToggle();
    }
    const params = {
        autoplay: true,
        dots: true,
        fade: true,
        speed: 600,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
        swipeToSlide: true,
        arrows: false,
        adaptiveHeight: true,
        // afterChange: getIndex
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    // const [previousIndex, setPreviousIndex] = useState(null);
    return (
        <div id="our-Businesses">
            <Slider {...params} className={styles.slider} >
                {
                    data.map((obj, id) => (
                        <div key={id}>
                            <Row >
                                <Col lg="6" className="px-0">
                                    <div className={styles.left} style={{ backgroundImage: `url(${obj.Featured_Img.url})` }}>
                                    </div>
                                </Col>
                                <Col lg="6" className={styles.right} >
                                    <div>
                                        <img src={obj.logo.url} alt="" className={styles.logo} />
                                        <div className={styles.box1}>
                                            <h1 className={styles.title}>
                                                {obj.name}
                                            </h1>
                                        </div>
                                        <p className={styles.content}>
                                            {obj.Description}
                                        </p>
                                        <Link href={`/ourBusinesses/${obj.slug}`}>
                                            <a>
                                                <Button className={styles.button}>Know more
                                                    <img src="../Know-more-arrow-white.svg" className="img-fluid" />
                                                </Button>
                                            </a>
                                        </Link>
                                        <Button className="mt-5" color="secondary" onClick={() => handleDownloadBrochure(obj.File.url, obj.slug, "downloadBrochure")}>Download Brochure
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))
                }
            </Slider >
        </div >

    )
}

export default VerticalsSlider