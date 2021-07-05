import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import Head from 'next/head'
import ThemeProvider from '../components/ThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
