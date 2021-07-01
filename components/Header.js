import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className="wrapper">
                <NavbarBrand href="/"><img src="./logo.svg" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <Button className="btn btn-primary me-4">
                            Download Brochure
                        </Button>
                        <img src="/hamburger.svg" className="img-fluid" />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;