import React, { useState, useContext } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    Button
} from 'reactstrap';
import hamburger from "../public/hamburger.svg"
import logo from '../public/logo.svg'
import ThemeContext from '../components/ThemeContext';
import hamburger2 from '../public/hamburger2.svg'
import logo2 from '../public/logo2.svg'


const Header = () => {
    const { dark } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color={dark ? 'dark' : 'fadded'} light expand="md" className="wrapper">
                <NavbarBrand href="/"> <img src={dark ? logo2 : logo} alt="logo" className="img-fluid " /></NavbarBrand>
                <Nav className="ms-auto align-items-center" navbar>
                    <Button color="primary" className="me-lg-5 me-4">
                        <img src="./Download-Brochure_02.svg" /> Brochure
                    </Button>
                    <img onClick={toggle} src={dark ? hamburger2 : hamburger} alt="hamburger" className="img-fluid hamburger" />
                </Nav>
            </Navbar>
            <div id="myNav" className={isOpen?"overlay open":"overlay"} >


  <a  className="closebtn" onClick={toggle}>&times;</a>

  <div className="overlay-content">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>

</div>

        </div>
    );
}

export default Header;