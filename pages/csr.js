import Banner from "../components/Banner"
import LocalInitiatives from "../components/LocalInitiatives";
import Parallax from "../components/Parallax"
import { parallaxData, reportData} from "../Data"
import { Row, Col, Container } from "reactstrap"
import VideoGallery from "../components/VideoGallery"
import CaseStudies from "../components/CaseStudies"




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


const CSR = ({initiatives}) => {
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
            <LocalInitiatives posts={initiatives} />

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


export async function getStaticProps() {
    const baseURL = process.env.API_URL;
    let data;
    try {
        const res = await fetch(baseURL + 'csr-initiatives');
        data = await res.json();

    } catch (error) {
        console.log("Server Error Occured");
    }
  
    return {
        props: {
            initiatives: data,
        }
    }
  }


export default CSR;