import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>

          {/* Netlify Download Partner Form*/}
          <form data-netlify="true" hidden name="partner-form" netlify-honeypot="bot-field">
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="tel" name="Mob" />
            <input type="text" name="CompanyName" />
            <input type="select" name="Location" />
            <input type="checkbox" name="homeware" />
            <input type="checkbox" name="plumbingSolution" />
            <input type="checkbox" name="jindalKitchen" />
            <input type="checkbox" name="infraSolution" />
            <input type="checkbox" name="oemSolutions" />
            <input type="checkbox" name="mobility" />
            <input type="submit" />
          </form>

          {/* Netlify Download Brochure Form */}
          <form data-netlify="true" hidden name="contact-form" netlify-honeypot="bot-field">
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="select" name="department" />
            <input type="textarea" name="msg" />
            <input type="submit" />
          </form>

          {/* Netlify Download Brochure Form */}
          <form data-netlify="true" hidden name="download-brochure" netlify-honeypot="bot-field">
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="tel" name="Mob" />
            <input type="text" name="CompanyName" />
            <input type="submit" />
          </form>

          {/* Netlify Enquiry Form */}
          <form data-netlify="true" hidden name="enquiry" netlify-honeypot="bot-field">
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="tel" name="Mob" />
            <input type="text" name="CompanyName" />
            <input type="textarea" name="Msg" />
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