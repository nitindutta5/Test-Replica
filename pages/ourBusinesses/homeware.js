import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";
import { Button, Container } from "reactstrap";

const jindalKitchen = ({homeware,ModalToggle}) => {
    const data = {
        type: "homeware",
        brands: [
            {
                content: "Arttd’inox was born out of the belief that art is a holistic expansion of global décor identities, further enhanced by the functionality and beauty of high-quality stainless steel. These contemporary home lifestyle products juxtapose traditional elegance and Karigari with modern whimsy, making each product a timeless masterpiece."
            }
        ],
        // icons: [
        //     {
        //         img: "../../verticals/kitchen/Icons/01_Termite-Proof.png",
        //         title: "Termite Proof"
        //     },
        //     {
        //         img: "../../verticals/kitchen/Icons/02_Fire-Resistant.png",
        //         title: "Fire Resistant"
        //     },
        //     {
        //         img: "../../verticals/kitchen/Icons/03_Range-of-Hues.png",
        //         title: "Range of Hues"
        //     },
        //     {
        //         img: "../../verticals/kitchen/Icons/04_Timely-Delivery.png",
        //         title: "Timely Delivery"
        //     },
        //     {
        //         img: "../../verticals/kitchen/Icons/05_Water-Resistant.png",
        //         title: "Water Resistant"
        //     },
        //     {
        //         img: "../../verticals/kitchen/Icons/06_EcoFriendly.png",
        //         title: "Eco Friendly"
        //     }
        // ],
        products: [
            {
                img: "../../verticals/homeware/products/Urban-Horizon-Collection.jpg",
                title: "Tableware",
                content: "Our range of clean and contemporary stainless steel artisanal tableware essentials are perfect for every day as well as special occasion usage. "
            },
            {
                img: "../../verticals/homeware/products/Aladdin-Collection.jpg",
                title: "Serveware",
                content: " Our unique serveware solutions create a welcoming table for everyday meals, casual dinner parties and luncheons."
            },
            {
                img: "../../verticals/homeware/products/Pink-Bloom-Collection.jpg",
                title: "Dinnerware",
                content: "From uniquely styled spoons to quarter plates, trays to serve pots, we have got your covered with aesthetical designing! With our bespoke range of dinnerware & elegant serving bowls."
            },
            {
                img: "../../verticals/homeware/products/barware.png",
                title: "Barware",
                content: "Handcrafted barware that captures the allure of the past with the sensibilities of the present!"
            }
        ]
    };
    return (
        <div>
            <Head>
                <title>Homeware</title>
                <meta name="description" content="Homeware" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/Homeware.jpg" text="Homeware" />
            <Section1 data={data} title2="Why Choose Us">Why Arttd'inox</Section1>
            <Section2 data={data.products}>Our Range of Products</Section2>
            <section className="pt-0">
                <Container className="d-flex justify-content-center">
                <Button color="secondary" onClick={ModalToggle} className="download">
                        <img src="../Download-Brochure_02.svg"  />
                        Brochure</Button>
                    <a target="_blank" href="https://www.arttdinox.com/">
                        <Button color="secondary" className="ms-3">
                            Shop Now</Button>
                    </a>
                </Container>
            </section>
        </div>
    )
}
export async function getStaticProps() {
    const baseURL = process.env.API_URL;
    let data;
    try {
        const res = await fetch(baseURL + `brochures?slug=homeware`);
        data = await res.json();
    } catch (error) {
        console.log("Server Error Occured");
    }
  
    return {
        props: {
            homeware: data,
        }
    }
  }

export default jindalKitchen