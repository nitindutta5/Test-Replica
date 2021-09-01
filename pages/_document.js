import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>

          {/* Netlify Partner Form*/}
          <form data-netlify="true" hidden name="partner-form" netlify-honeypot="bot-field">
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="tel" name="Mob" />
            <input type="text" name="CompanyName" />
            <input type="select" name="Location" />
            <input type="checkbox" name="Homeware" />
            <input type="checkbox" name="PlumbingSolution" />
            <input type="checkbox" name="JindalKitchen" />
            <input type="checkbox" name="InfraSolution" />
            <input type="checkbox" name="OemSolutions" />
            <input type="checkbox" name="Mobility" />
            <input type="submit" />
          </form>

          {/* Netlify Contact Form */}
          <form data-netlify="true" hidden name="contact-form" netlify-honeypot="bot-field">
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="select" name="Department" />
            <input type="textarea" name="Msg" />
            <input type="submit" />
          </form>

          {/* Netlify Download Brochure Form */}
          <form data-netlify="true" hidden name="download-brochure" netlify-honeypot="bot-field">
            <input type="hidden" name="brochureName" />
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="select" name="countryCode" />
            <input type="tel" name="Mob" />
            <input type="text" name="CompanyName" />
            <input type="submit" />
          </form>

          {/* Netlify Download CaseStudy Form */}
          <form data-netlify="true" hidden name="download-casestudy" netlify-honeypot="bot-field">
            <input type="hidden" name="casestudyName" />
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="select" name="countryCode" />
            <input type="tel" name="Mob" />
            <input type="text" name="CompanyName" />
            <input type="submit" />
          </form>

          {/* Netlify Enquiry Form */}
          <form data-netlify="true" hidden name="enquiry" netlify-honeypot="bot-field">
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="select" name="countryCode" />
            <input type="tel" name="Mob" />
            <input type="text" name="CompanyName" />
            <input type="textarea" name="Msg" />
            <input type="submit" />
          </form>


          {/* Netlify job Form */}
          <form data-netlify="true" hidden name="job-form" netlify-honeypot="bot-field">
            <input type="file" name="Resume" />
            <input type="text" name="Name" />
            <input type="email" name="Email" />
            <input type="select" name="countryCode" />
            <input type="tel" name="Mob" />
            <input type="text" name="Address" />
            <input type="text" name="currentLocation" />
            <input type="date" name="dOB" />
            <input type="number" name="totalExperience" />
            <input type="number" name="noticePeriod" />
            <input type="text" name="currentCompany" />
            <input type="text" name="currentCtc" />
            <input type="text" name="expectedCtc" />
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