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
import ModalForm from '../components/Form/ModalForm';



function MyApp({ Component, pageProps, router }) {
  //For white Overlay
  const [checkOpen, setOpen] = useState(false);
  const handleOverlay = (value) => setOpen(value);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

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
      <Component {...pageProps} ModalToggle={toggle} UpdateFile={setFile} UpdateName={setName} UpdateType={setType} />
      {/* <FormOverlay/> */}
      {/* <Chat/> */}
      <ModalForm toggle={toggle} modal={modal} file={file} name={name} type={type} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
