import { Container, Row, Col } from "reactstrap";
import Slider from 'react-slick';
import styles from '../styles/SocialMedia.module.css'
import NextBtn from "./NextBtn";
import Previous from "./Previous";
// import InstagramEmbed from 'react-instagram-embed';

const data = [
    {
        img: './socialmedia/1.png',
        type: "fb"
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
    },
    {
        img: './socialmedia/3.png',
        type: 'twitter'
    }
];

const SocialMedia = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <Previous />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    return (
        <section>
            <Container >
                <Row>
                    <Col lg="12">
                        <h2 className="heading text-center ">Social Media</h2>
                    </Col>
                    <Col lg="12" className="mx-auto" id="social-media">

                        {/* <Slider {...settings} className="inn">
                            {
                                data.map((obj, id) => (
                                    <div key={id} className="position-relative">
                                        <img className={styles.icon} src={obj.type == "fb" && "./socialmedia/fb.svg" || obj.type == "insta" && "./socialmedia/insta.svg" || obj.type == "twitter" && "./socialmedia/twitter.svg"} />
                                        <img src={obj.img} className="img-fluid" />
                                    </div>
                                ))
                            }
                        </Slider> */}
                    </Col>
                    <Col xs="auto" className="mx-auto mb-5">
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJindalStainlessOfficial%2F&tabs=timeline&width=300&height=400&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId" width="100%" height="400" style={{ "border": "none", "overflow": "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </Col>
                    <Col xs="auto" className="mx-auto">
                        <a className="twitter-timeline" data-lang="en" data-width="300" data-height="400" href="https://twitter.com/Jindal_Official?ref_src=twsrc%5Etfw">Tweets by Jindal</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    </Col>
                    {/* <Col lg="4">
                         <InstagramEmbed
                            url='https://www.instagram.com/p/CSMYzGCqHDX/'
                            clientAccessToken='123|456'
                            maxWidth={300}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        /> 
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default SocialMedia