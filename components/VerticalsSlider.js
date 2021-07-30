import Slider from "react-slick";
import { Row, Col, Button } from "reactstrap";
import styles from '../styles/VerticalsSlider.module.css'
import { useState } from "react";
import Link from "next/link";

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

    const data = [
        {
            img: "../verticals/Homeware.jpg",
            name: "Homeware",
            logo:"../verticals/logos/Arttdinox_Logo.svg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!",
            url: "ourBusinesses/jindalKitchen"
        },
        {
            img: "../verticals/JINDAL_ARC_KITCHENS.jpg",
            name: "Jindal Arc Kitchen",
            logo:"../verticals/logos/arc.svg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem! Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!",
            url: "ourBusinesses/jindalKitchen"
        },
        {
            img: "../verticals/JSLL_INFRA.jpg",
            name: "JSLL Infra",
            logo:"../verticals/logos/Infra-White.svg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!",
            url: "ourBusinesses/infra"
        },
        {
            img: "../verticals/JSLL_MOBILITY.jpg",
            name: "JSLL Mobility",
            logo:"../verticals/logos/Mobility-White.svg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!",
            url: "ourBusinesses/mobility"
        },
        {
            img: "../verticals/PLUMBING.jpg",
            name: "Plumbing",
            logo:"../verticals/logos/plumbing-White.svg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!",
            url: "ourBusinesses/plumbing"
        },
        {
            img: "../verticals/VE.jpg",
            name: "OEM Solutions",
            logo:"../verticals/logos/ve.png",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi adipisci sapiente odio cumque placeat labore eaque quia dignissimos. Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem! Nobis quidem corrupti reprehenderit est assumenda odit iste laboriosam temporibus exercitationem!",
            url: "ourBusinesses/oem_solutions"
        }
    ];
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
                                    <div className={styles.left} style={{ backgroundImage: `url(${obj.img})` }}>
                                        <img src={obj.logo} alt="" className={styles.logo}/>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </Col>
                <Col lg="6" className={styles.right} >
                    <div className={`${currentIndex>previousIndex?styles.forward:styles.backward}`}>
                        <div className={styles.box1}>
                            <h1 className={styles.title}>
                                {data[currentIndex].name}
                            </h1>
                        </div>
                        <p className={styles.content}>
                            {data[currentIndex].text}
                        </p>
                        <Link href={data[currentIndex].url}>
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