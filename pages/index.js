import Head from 'next/head'
import BannerImage from '../public/banner/homepage.jpg'
import AboutUs from '../components/AboutUs'
import OurPlants from '../components/OurPlants'
import Media from '../components/Media'
import SocialMedia from '../components/SocialMedia'
import OurBusinesses from '../components/OurBusinesses'
import BannerCarousel from '../components/BannerCarousel'
import { homePageBanners } from '../Data'


export default function Home({verticals, ModalToggle, UpdateName, UpdateFile, UpdateType, latestBlogs, mediaData }) {
  return (
    <>
      <Head>
        <title>JSLL | Lifestyle</title>
        <meta name="description" content="Jindal Lifestyle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerCarousel data={homePageBanners}/>
      <AboutUs />
      <OurBusinesses data={verticals} ModalToggle={ModalToggle} UpdateFile={UpdateFile} UpdateName={UpdateName} UpdateType={UpdateType}/>
      <OurPlants/>
      <Media blogData={latestBlogs} mediaData={mediaData}/>
      <SocialMedia/>
    </>
  )
}


export async function getStaticProps() {
  const baseURL = process.env.API_URL;
  let data, data2, data3;
  try {
      const res = await fetch(baseURL + 'brochures');
      const res2 = await fetch(baseURL + 'blogs?_sort=Id:desc');
      const res3 = await fetch(baseURL + `media-contents?_sort=Id:desc`);
      data = await res.json();
      data2 = await res2.json();
      data3 = await res3.json();
  } catch (error) {
      console.log("Server Error Occured");
  }

  return {
      props: {
          verticals: data,
          latestBlogs: data2.slice(0,2),
          mediaData:data3.slice(0,2)
      }
  }
}