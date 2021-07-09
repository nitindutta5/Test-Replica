import React, { useState, useContext, useEffect } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    Button
} from 'reactstrap';
import Link from 'next/link';
import hamburger from "../public/hamburger.svg"
import logo from '../public/logo.svg'
import ThemeContext from '../components/ThemeContext';
import hamburger2 from '../public/hamburger2.svg'
import logo2 from '../public/logo2.svg'
import { navlist, Businesses } from "../navlist";


const Header = (props) => {
    const { dark } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [levelTwo, setLevelTwo] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        }
        else {
            document.body.style.overflowY = "scroll";
        }
    }, [isOpen])

    useEffect(() => {
        props.handleOverlay(isOpen)
    }, [isOpen])
    return (
        <div>
            <Navbar color={dark ? 'dark' : 'fadded'} light expand="md" className="wrapper">
                <NavbarBrand> <Link href="/"><img src={dark ? logo2 : logo} alt="logo" className="img-fluid " /></Link></NavbarBrand>
                <Nav className="ms-auto align-items-center" navbar>
                    <Button color="primary" className="me-lg-5 me-4">
                        <img src="./Download-Brochure_02.svg" /> Brochure
                    </Button>
                    <img onClick={toggle} src={dark ? hamburger2 : hamburger} alt="hamburger" className="img-fluid hamburger" />
                </Nav>
            </Navbar>
            <div id="myNav" className={isOpen ? "overlay open" : "overlay"} >


                <a className="closebtn" onClick={toggle}><img src="./Cross.svg" className="img-fluid" /></a>
                {
                    !levelTwo ? (
                        <div className="overlay-content">
                            {
                                navlist.map((obj, id) => (
                                    obj.text === "Our Businesses" ?
                                        <Link key={id}
                                            href={obj.link}><a
                                                onClick={() => setLevelTwo(!levelTwo)}>{obj.text}
                                                <img
                                                    className=" arrow img-fluid ms-2"
                                                    src="./dropdown arrow-Right.svg" />
                                            </a>
                                        </Link>
                                        :
                                        <Link key={id} href={obj.link}>
                                            <a onClick={toggle} >{obj.text}</a>
                                        </Link>
                                ))
                            }
                        </div>
                    ) :
                        (
                            <div className="overlay-content">
                                <a className="TitleItem" onClick={() => setLevelTwo(!levelTwo)}>MAIN MENU</a>
                                <a className="TitleItem">Our Businesses</a>
                                {
                                    Businesses.map((obj, id) => (
                                        <Link key={id} href={obj.link}>
                                            <a >{obj.text}</a>
                                        </Link>
                                    ))
                                }
                            </div>
                        )
                }


            </div>

        </div >
    );
}

export default Header;