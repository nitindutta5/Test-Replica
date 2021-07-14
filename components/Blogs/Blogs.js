import { Container, Row, Col, Pagination, PaginationLink, PaginationItem } from "reactstrap"
import BlogCard from "./BlogCard";
import { useState } from "react";

export const blogData = [
    {
        img: "../../blog/dummy1.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
        slug: "lorem_Ispem"
    },
    {
        img: ".././blog/dummy2.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
        slug: "lorem_Ispem"
    },
    {
        img: "../../blog/dummy3.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
        slug: "lorem_Ispem"
    },
    {
        img: "../../blog/dummy2.png",
        title: "Lorem ipsum dolor sit amet, consetetur",
        date: "13th June 2021",
        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum",
        slug: "lorem_Ispem"
    }
];
const Blogs = () => {
    const pageSize = 3;
    const pagesCount = 2;
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(index);
    };

    const handlePreviousClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(currentPage - 1);
    };

    const handleNextClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(currentPage + 1);
    };

    // const handleFirstClick = (e, index) => {
    //     e.preventDefault();
    //     setCurrentPage(0);
    // };

    // const handleLastClick = (e, index) => {
    //     e.preventDefault();
    //     setCurrentPage(pagesCount - 1);
    // }
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
                                blogData.slice(currentPage * pageSize, (currentPage + 1) * pageSize).map((obj, id) => (
                                    <Col lg="4" key={id} className="mb-5">
                                        <BlogCard data={obj} />
                                    </Col>
                                ))
                            }
                        </Row>
                        <Pagination aria-label="Page navigation example">
                            {/* <PaginationItem disabled={currentPage <= 0}>
                                <PaginationLink onClick={handleFirstClick} first href="#" />
                            </PaginationItem> */}
                            <PaginationItem disabled={currentPage <= 0}>
                                <PaginationLink onClick={handlePreviousClick} previous href="#" />
                            </PaginationItem>
                            {[...Array(pagesCount)].map((page, i) => (
                                <PaginationItem active={i === currentPage} key={i}>
                                    <PaginationLink className="page-number" onClick={e => handlePageClick(e, i)} href="#">
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem disabled={currentPage === pagesCount - 1}>
                                <PaginationLink onClick={handleNextClick} next href="#" />
                            </PaginationItem>
                            {/* <PaginationItem disabled={currentPage === pagesCount - 1}>
                                <PaginationLink onClick={handleLastClick} last href="#" />
                            </PaginationItem> */}
                        </Pagination>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Blogs