import Head from "next/head"
import Banner from "../../components/Banner"
import Section1 from "../../components/VerticalsSections/Section1"
import Section2 from "../../components/VerticalsSections/Section2";

const oem_solutions = () => {
    const data = {
        type: "oem",
        brands: [
            {
                content: "The core ambition of JSLL Value Engineering is focused towards manufacturing stainless steel products for development and broad usage across industries. Through our own in-house backhand integration, we design finished end product for B2B and B2C segments. Being an original equipment manufacturer, JSLL Value Engineering fabricates daily use and industrial components in varied sectors."
            }
        ],
        icons: [
            {
                img: "../../verticals/ve/Icons/1.png",
                title: "Extensive Fire & Heat Resistant"
            },
            {
                img: "../../verticals/ve/Icons/2.png",
                title: "Great Combination Of Strength & Pliability"
            },
            {
                img: "../../verticals/ve/Icons/3.png",
                title: "Aesthetic Appeal With Ease Of Fabrication"
            },
            {
                img: "../../verticals/ve/Icons/4.png",
                title: "Hygienic And Extremely Sturdy With Long Term Values"
            },
            {
                img: "../../verticals/ve/Icons/5.png",
                title: "Recyclable With Reduced Waste"
            },
            {
                img: "../../verticals/ve/Icons/6.png",
                title: "Earthquake Proof as it can withstand vibrations and shocks"
            },
            {
                img: "../../verticals/ve/Icons/7.png",
                title: "Enhanced Formability With Corrosion Resistance"
            },
            {
                img: "../../verticals/ve/Icons/8.png",
                title: "Maintenance Free With A Long Life"
            },
            {
                img: "../../verticals/ve/Icons/9.png",
                title: "Environment Friendly & 100% Green Metal"
            }
        ],
        products: [
            {
                img: "../../verticals/ve/products/Automobile.jpg",
                title: "Automobile",
                content: "Our capabilities enable us to manufacture stainless steel parts used in automobile like car exhaust systems hose clamps and seatbelt springs."
            },
            {
                img: "../../verticals/ve/products/Handheld-Fire-Extinguisher.jpg",
                title: "Handheld Fire Extinguisher",
                content: "A compact fire estinguisher made of Stainless Steel with easy discharge mechanism containing simple aerosol valve mechanism like a deodorant."
            },
            {
                img: "../../verticals/ve/products/Mixer-Jars.jpg",
                title: "Mixers Jars",
                content: "Available in different designs and sizes, the mixer jars are manufactured with high grade stainless steel. It is durable and apt for usage of longer durations."
            },
            {
                img: "../../verticals/ve/products/OBM.jpg",
                title: "OBM",
                content: "As one of the leading OBM in Stainless Steel, we also manufacture ﬁnished goods for different brands from in-house designing to prototyping to mass production."
            }
        ]
    };
    return (
        <div>
            <Head>
                <title>OEM Solutions</title>
                <meta name="description" content="OEM Solutions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner src=".././banner/jindalkitchen.png" text="OEM Solutions" />
            <Section1 data={data} title2="Why Stainless Steel">Manufacturing Tomorrow’s Products</Section1>
            <Section2 data={data.products}>Our Range of Products</Section2>
        </div>
    )
}

export default oem_solutions