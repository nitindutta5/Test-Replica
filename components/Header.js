import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button
} from 'reactstrap';
import Image from "next/image";
import logo from '../public/logo.svg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className="wrapper">
                <NavbarBrand href="/"> <Image src={logo} className="img-fluid" /></NavbarBrand>
                <Nav className="ms-auto" navbar>
                    <Button className="btn btn-primary me-4">
                        Download Brochure
                    </Button>
                    <img src="/hamburger.svg" className="img-fluid" />
                </Nav>

            </Navbar>
        </div>
    );
}

export default Header;