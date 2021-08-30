import Banner from "../components/Banner"
import MajorInitiatives from "../components/MajorInitiatives"
import LocalInitiatives from "../components/LocalInitiatives";
import Parallax from "../components/Parallax"
import { parallaxData, localInitiatives } from "../Data"
import { Row, Col, Container } from "reactstrap"
import VideoGallery from "../components/VideoGallery"
import CaseStudyCard from '../components/CaseStudyCard.js'
import CaseStudies from "../components/CaseStudies"


const posts = [
    {
        cardTitle: "Environment, Health & Safety",
        postTitle: "",
        postFeaturedImg: "../blogsPostSlider/csr/1.jpg",
        postSlug: '/media',
        postBrief: "Environment, Health & Safety (EHS) is the key agenda of the company. Jindal Stainless has taken numerous initiatives to realise improvements in these areas."
    },

    {
        cardTitle: "Human Rights",
        postTitle: "",
        postFeaturedImg: "../blogsPostSlider/csr/2.jpg",
        postSlug: '/media',
        postBrief: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
    },
    {
        cardTitle: "UNGC & GNCI",
        postTitle: "",
        postFeaturedImg: "../blogsPostSlider/csr/3.jpg",
        postSlug: '/media',
        postBrief: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
    },
]


const reportData = [
    {
        img: "../reports/CSR-Policy.jpg",
        title: "CSR Policy",
    },
    {
        img: "../reports/CSR-Annual.jpg",
        title: "CSR Annual Report",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum"
    },
    {
        img: "../reports/SROI.jpg",
        title: "SROI Reports",
    },
];

const _sliderConfig = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
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
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};


const CSR = () => {
    const _parallaxData = parallaxData.csr;
    const videoData = [{
        video: "https://player.vimeo.com/video/534314647",
        title: "Value Engineering",
        time: "4min"
    }];

    return (
        <>
            <Banner src="./banner/CSR.png" text="Corporate Social Responsibility" />
            <section >
                <Container>
                    <Row>
                        <Col lg="9">
                            <h1 className="heading text-center">
                                The Sustainability Promise
                            </h1>
                            <p className="text-center para">
                                At the apex of the industrial recycling pyramid lays sustainable steel which is 100% recyclable. At Jindal Stainless, we work today to build a  better tomorrow.
                            </p>
                            <p className="text-center para">
                                We believe that efficient sustainability goes beyond conservation. It starts with building a culture around the workspace where every individual takes mindful steps towards the environment.
                            </p>
                        </Col>
                        <Col lg="3">
                            <img src="./SustainabilityPromise.jpg" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Parallax data={_parallaxData} />
            <MajorInitiatives
                posts={posts}
                title="Our Initiatives"
            />

            <LocalInitiatives posts={localInitiatives} />

            <VideoGallery
                data={videoData}
                dimension={1080 / 1920}
                title="Jindal Stainless CSR Film"
            />

            <CaseStudies
                bg2={true}
                data={reportData}
                title="Report"
                sliderConfig={_sliderConfig}
            />

        </>
    )
}

export default CSR;