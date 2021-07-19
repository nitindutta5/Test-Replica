import Head from "next/head"
import Banner from "../components/Banner"
import ContactForms from "../components/ContactForms"
import GetInTouch from "../components/GetInTouch"
import OurLocations from "../components/OurLocations"
import OurOffices from "../components/OurOffices"
import Overlay from "../components/Overlay"




const ContactUs = ({ checkOpen }) => {
    return (
        <div>
            <Overlay checkOpen={checkOpen} />
            <Head>
                <title>Contact Us | JSLL  Lifestyle</title>
                <meta name="description" content="Contact Us Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/ContactUs.png" text="CONTACT US" />
            <OurLocations/>
            <ContactForms/>
            <OurOffices />
            <GetInTouch />
        </div>
    );
}

export default ContactUs