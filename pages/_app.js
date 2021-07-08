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

function MyApp({ Component, pageProps }) {
      //For white Overlay
      const [checkOpen, setOpen] = useState(false);

      const handleOverlay = (value) => {
        setOpen(value)
      }
  return (
    <ThemeProvider>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <Header  handleOverlay={handleOverlay}/>
      <Component {...pageProps} checkOpen={checkOpen}/>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
