import Head from "next/head"
import Banner from "../components/Banner"
import ContactForms from "../components/Form/ContactForms"
import GetInTouch from "../components/GetInTouch"
import OurLocations from "../components/OurLocations"
import OurOffices from "../components/OurOffices"




const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Contact Us | Jindal  Lifestyle</title>
                <meta name="description" content="Contact Us Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src="./banner/ContactUs.png" text="CONTACT US" />
            <OurLocations/>
            <ContactForms/>
            <OurOffices />
            <GetInTouch />
        </>
    );
}

export default ContactUs