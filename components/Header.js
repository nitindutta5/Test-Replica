import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
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
import downloadLogo from "../public/Download-Brochure_02.svg"

const Header = (props) => {
    const router = useRouter();
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
            <Navbar color={dark || props.route === "/downloadBrochure" || props.route === "/ourbusinesses" ? 'dark' : 'fadded'} light expand="md" className="wrapper">
                <NavbarBrand> <Link href="/"><img src={dark || props.route === "/downloadBrochure" || props.route === "/ourbusinesses" ? logo2 : logo} alt="logo" className="img-fluid " /></Link></NavbarBrand>
                <Nav className="ms-auto align-items-center" navbar>
                    <Button color="primary" className="me-lg-5 me-4" onClick={() => router.push('/downloadBrochure')}>
                        <img src={downloadLogo} /> Brochure
                    </Button>
                    <img onClick={toggle} src={dark || props.route === "/downloadBrochure" ? hamburger2 : hamburger} alt="hamburger" className="img-fluid hamburger" />
                </Nav>
            </Navbar>
            <div id="myNav" className={isOpen ? "overlay open" : "overlay"} >
                <a className="closebtn" onClick={toggle}><img src="../../Cross.svg" className="img-fluid" /></a>
                {
                    !levelTwo ? (
                        <div className="overlay-content">
                            {
                                navlist.map((obj, id) => (
                                    obj.text === "Our Businesses" ?
                                        <Link key={id}
                                            href="#"><a
                                                onClick={() => setLevelTwo(!levelTwo)}>{obj.text}
                                                <img
                                                    className=" arrow img-fluid ms-2"
                                                    src="../../dropdown arrow-Right.svg" />
                                                <div className="bottom"></div>
                                            </a>
                                        </Link>
                                        :
                                        <Link key={id} href={obj.link}>
                                            <a onClick={toggle} className={props.route === obj.link ? "active" : ""}>{obj.text}
                                                <div className={props.route === obj.link ? "bottom show-line" : "bottom"}></div></a>
                                        </Link>
                                ))
                            }
                        </div>
                    ) :
                        (
                            <div className="overlay-content">
                                <a className="TitleItem" onClick={() => setLevelTwo(!levelTwo)}>MAIN MENU</a>
                                <Link href="/ourBusinesses"><a onClick={toggle} className="TitleItem">Our Businesses</a></Link>
                                {
                                    Businesses.map((obj, id) => (
                                        <Link key={id} href={obj.link}>
                                        <a onClick={toggle} className={props.route === obj.link ? "active" : ""}>{obj.text}
                                            <div className={props.route === obj.link ? "bottom show-line" : "bottom"}></div></a>
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