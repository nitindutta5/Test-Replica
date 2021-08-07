import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css/swiper.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import { useState } from 'react';
import Head from 'next/head'
import ThemeProvider from '../components/ThemeProvider';
import Overlay from '../components/Overlay';
import Chat from '../components/Chat';
import FormOverlay from '../components/FormOverlay';



function MyApp({ Component, pageProps, router }) {
  //For white Overlay
  const [checkOpen, setOpen] = useState(false);
  const handleOverlay = (value) => setOpen(value);


  return (
    <ThemeProvider>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <Header route={router.route} handleOverlay={handleOverlay} />
      <Overlay checkOpen={checkOpen} />
      <Component {...pageProps} />
      {/* <FormOverlay/> */}
      {/* <Chat/> */}
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
