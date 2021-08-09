import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Netlify Download Brochure Form */}
          <form data-netlify="true" hidden name="download-brochure" netlify-honeypot="bot-field">
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="tel" name="Mob" />
            <input type="text" name="CompanyName" />
            <input type="submit" />
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument