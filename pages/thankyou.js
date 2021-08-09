import Link from 'next/link'
import { Button } from 'reactstrap'

const thankyou = () => {
    return (
        <div style={{ width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '9999', backgroundColor: '#fff' }} className="flex-column d-flex justify-content-center align-items-center vh-100">
            <img src="../logo2.svg" style={{ maxWidth: '300px' }} className="mb-5" />
            <h1 style={{ color: '#363C4C' }} className="heading mb-3">Thank you for contacting us.</h1>
            <h3 style={{ color: '#363C4C' }} className="text-center mb-3">We'll get in touch shortly.</h3>
            <Link href='/'><a><Button color="primary" className="text-center mt-2">Back to home</Button></a></Link>
        </div>
    )
}

export default thankyou