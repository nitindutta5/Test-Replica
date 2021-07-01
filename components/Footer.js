import { Container, Row, Col } from "reactstrap";
import styles from '../styles/Footer.module.css'
import Image from "next/image";
import Link from 'next/link';
import logo from '../assets/logo.svg'
import { navlist, Businesses } from "../navlist";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container >
                <Row className="py-5" >
                    <Col lg="2" className={styles.addressDiv} >
                        <Image src={logo} layout="responsive" className="img-fluid" />
                        <p className="my-3">Stainless Centre, Plot No. 50, 6th Floor, Sector-32, Gurgaon, Haryana - 122001</p>
                        <p>contact@jindalstainless.com</p>
                    </Col>
                    <Col lg="2" className="ms-lg-auto">
                        <p className={styles.linkTitle}>SITE MAP</p>
                        {
                            navlist.map((obj, id) => (
                                <Link key={id} href={obj.link}><a ><p className={styles.link}>{obj.text}</p></a></Link>
                            ))
                        }
                    </Col>
                    <Col lg="2" className="ms-lg-auto">
                        <p className={styles.linkTitle}>OUR BUSINESSES</p>
                        {
                            Businesses.map((obj, id) => (
                                <Link key={id} href={obj.link}><a ><p className={styles.link}>{obj.text}</p></a></Link>
                            ))
                        }
                    </Col>
                    <Col lg="2" className="ms-lg-auto"  >
                        <p className={styles.linkTitle}>FOLLOW US</p>
                        <div className="sociallink-packet">
                            <div className="s-icon">
                                <a rel="noreferrer" href="https://www.linkedin.com/in/jindal-stainless-lifestyle-limited-b14792197/" target="_blank">
                                    <svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 37.699 37.701"><path className="social" d="M749.769,3363.7h0a18.85,18.85,0,0,1-18.85-18.85h0a18.85,18.85,0,0,1,18.85-18.85h0a18.85,18.85,0,0,1,18.849,18.85h0A18.85,18.85,0,0,1,749.769,3363.7Z" transform="translate(-730.919 -3325.994)" /><g transform="translate(9.928 8.347)"><rect className="social-icon" width="3.901" height="12.603" transform="translate(0.374 6.301)" /><path className="social-icon" d="M739.128,3335.608a2.325,2.325,0,1,0-2.306-2.326A2.317,2.317,0,0,0,739.128,3335.608Z" transform="translate(-736.822 -3330.957)" /><path className="social-icon" d="M744.589,3340.846c0-1.771.816-2.827,2.376-2.827,1.435,0,2.124,1.014,2.124,2.827v6.616h3.884v-7.98c0-3.375-1.914-5.007-4.586-5.007a4.394,4.394,0,0,0-3.8,2.083v-1.7h-3.742v12.6h3.742Z" transform="translate(-734.078 -3328.558)" /></g></svg>
                                </a>
                            </div>
                            <div className="s-icon">
                                <a rel="noreferrer" href="https://twitter.com/jsll_ve" target="_blank">
                                    <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 37.699 37.701"><path d="M782.779,3363.7h0a18.849,18.849,0,0,1-18.849-18.85h0a18.849,18.849,0,0,1,18.849-18.85h0a18.85,18.85,0,0,1,18.85,18.85h0A18.85,18.85,0,0,1,782.779,3363.7Z" transform="translate(-763.93 -3325.994)" className="social" /><path d="M769.166,3346.822a11.72,11.72,0,0,0,18.03-10.408,8.384,8.384,0,0,0,2.057-2.133,8.289,8.289,0,0,1-2.367.648,4.131,4.131,0,0,0,1.811-2.28,8.294,8.294,0,0,1-2.617,1,4.123,4.123,0,0,0-7.022,3.756,11.7,11.7,0,0,1-8.5-4.3,4.126,4.126,0,0,0,1.277,5.5,4.11,4.11,0,0,1-1.869-.518,4.128,4.128,0,0,0,3.307,4.095,4.126,4.126,0,0,1-1.86.07,4.124,4.124,0,0,0,3.848,2.861A8.285,8.285,0,0,1,769.166,3346.822Z" transform="translate(-760.36 -3321.661)" className="social-icon" /></svg>
                                </a>
                            </div>
                            <div className="s-icon">
                                <a rel="noreferrer" href="https://www.facebook.com/JSLL-Value-Engineering-101958765095741/" target="_blank">
                                    <svg id="fb" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 37.7 37.7"><rect className="social" width="37.7" height="37.7" rx="18.85" /><path className="social-icon" d="M807.408,3353.216H812v-11.491h3.2l.342-3.847H812v-2.191c0-.906.183-1.266,1.06-1.266h2.484v-3.993h-3.177c-3.416,0-4.955,1.505-4.955,4.383v3.067h-2.387v3.9h2.387Z" transform="translate(-791.43 -3322.972)" /></svg>
                                </a>
                            </div>
                            <div className="s-icon">
                                <a rel="noreferrer" href="https://www.instagram.com/jindalstainless/?hl=en" target="_blank">
                                    <svg id="insta" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 37.699 37.701"><path className="social" d="M848.8,3363.7h0a18.85,18.85,0,0,1-18.849-18.85h0a18.85,18.85,0,0,1,18.849-18.85h0a18.85,18.85,0,0,1,18.85,18.85h0A18.85,18.85,0,0,1,848.8,3363.7Z" transform="translate(-829.951 -3325.994)" /><g transform="translate(8.514 8.515)"><path className="social-icon" d="M845.348,3332.919c2.76,0,3.088.01,4.178.061a5.719,5.719,0,0,1,1.919.355,3.432,3.432,0,0,1,1.961,1.962,5.745,5.745,0,0,1,.357,1.92c.049,1.089.059,1.416.059,4.175s-.01,3.087-.059,4.177a5.744,5.744,0,0,1-.357,1.919,3.215,3.215,0,0,1-.774,1.189,3.183,3.183,0,0,1-1.187.772,5.69,5.69,0,0,1-1.919.356c-1.09.05-1.418.06-4.178.06s-3.086-.01-4.176-.06a5.691,5.691,0,0,1-1.919-.356,3.42,3.42,0,0,1-1.961-1.961,5.749,5.749,0,0,1-.357-1.919c-.049-1.09-.059-1.416-.059-4.177s.01-3.086.059-4.175a5.749,5.749,0,0,1,.357-1.92,3.432,3.432,0,0,1,1.961-1.962,5.721,5.721,0,0,1,1.919-.355c1.09-.051,1.418-.061,4.176-.061m0-1.862c-2.807,0-3.159.012-4.26.062a7.563,7.563,0,0,0-2.509.48,5.282,5.282,0,0,0-3.022,3.024,7.586,7.586,0,0,0-.481,2.507c-.05,1.1-.062,1.455-.062,4.262s.012,3.159.062,4.262a7.59,7.59,0,0,0,.481,2.508,5.291,5.291,0,0,0,3.022,3.024,7.66,7.66,0,0,0,2.509.479c1.1.051,1.453.062,4.26.062s3.16-.011,4.262-.062a7.659,7.659,0,0,0,2.509-.479,5.291,5.291,0,0,0,3.022-3.024,7.579,7.579,0,0,0,.481-2.508c.05-1.1.062-1.454.062-4.262s-.012-3.158-.062-4.262a7.576,7.576,0,0,0-.481-2.507,5.281,5.281,0,0,0-3.022-3.024,7.562,7.562,0,0,0-2.509-.48c-1.1-.05-1.455-.062-4.262-.062" transform="translate(-835.013 -3331.057)" /><path className="social-icon" d="M843.309,3334.046a5.308,5.308,0,1,0,5.308,5.308,5.307,5.307,0,0,0-5.308-5.308m0,8.753a3.445,3.445,0,1,1,3.446-3.445,3.445,3.445,0,0,1-3.446,3.445" transform="translate(-832.974 -3329.019)" /><path className="social-icon" d="M846.182,3334.426a1.24,1.24,0,1,1-1.24-1.242,1.24,1.24,0,0,1,1.24,1.242" transform="translate(-829.089 -3329.606)" /></g></svg>
                                </a>
                            </div>
                            <div className="s-icon">
                                <a rel="noreferrer" href="https://www.youtube.com/channel/UCx_m3nHhT2g8zE7za_aO-Wg" target="_blank">
                                    <svg id="youtube" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 37.7 37.7"><rect className="social" width="37.7" height="37.7" rx="18.85" /><g transform="translate(5.241 9.262)"><path className="social-icon" d="M891.848,3333.877a3.416,3.416,0,0,0-2.406-2.422c-2.123-.573-10.634-.573-10.634-.573s-8.511,0-10.634.573a3.416,3.416,0,0,0-2.406,2.422,38.489,38.489,0,0,0,0,13.188,3.416,3.416,0,0,0,2.406,2.421c2.123.574,10.634.574,10.634.574s8.511,0,10.634-.574a3.416,3.416,0,0,0,2.406-2.421,38.505,38.505,0,0,0,0-13.188Z" transform="translate(-865.199 -3330.882)" /><path className="social" d="M872.334,3343.507v-8.973l7.886,4.487Z" transform="translate(-861.925 -3329.433)" /></g></svg>
                                </a>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.line}></div>
                        <p className="my-4 text-center">© 2021 Jindal Stainless Limited Lifestyle. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
}

export default Footer