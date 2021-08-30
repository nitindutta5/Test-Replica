import { Container, Row, Col, Pagination, PaginationLink, PaginationItem } from "reactstrap"
import BlogCard from "./BlogCard";
import { useState } from "react";


const Blogs = ({data}) => {
    const pageSize = 6;
    const pagesCount = Math.ceil(data.length/pageSize);
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
                                data.slice(currentPage * pageSize, (currentPage + 1) * pageSize).map((obj, id) => (
                                    <Col lg="4" md="6" xs="6" key={id} className="mb-5">
                                        <BlogCard data={obj} />
                                    </Col>
                                ))
                            }
                        </Row>
                        <Pagination aria-label="Page navigation example">
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
                        </Pagination>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default Blogs