import { Container, Row, Col } from "reactstrap"
import BlogCard from "./BlogCard";


const Blogs = () => {
    const blogData = [
        {
            img: "./blog/dummy1.png",
            title: "Lorem ipsum dolor sit amet, consetetur",
            date: "13th June 2021",
            info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
            slug: "lorem_Ispem"
        },
        {
            img: "./blog/dummy2.png",
            title: "Lorem ipsum dolor sit amet, consetetur",
            date: "13th June 2021",
            info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
            slug: "lorem_Ispem"
        },
        {
            img: "./blog/dummy1.png",
            title: "Lorem ipsum dolor sit amet, consetetur",
            date: "13th June 2021",
            info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
            slug: "lorem_Ispem"
        }
    ];
    return (
        <section className="bg2">
            <Container fluid className="wrapper">
                <Row>
                    <Col lg="12">
                        <h1 className="heading text-center">Blogs</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg="11" className="mx-auto">
                        <Row>
                            {
                                blogData.map((obj, id) => (
                                    <Col lg="4" key={id}>
                                        <BlogCard data={obj} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Blogs