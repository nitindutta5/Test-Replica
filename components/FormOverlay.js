import styles from '../styles/FormOverlay.module.css'
import { useState } from 'react'
import classNames from 'classnames';


const FormOverlay = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOverlayStatus = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className={classNames({
                [styles.overlay]: true,
                [styles.show]: isOpen
            })}>
                <div className={classNames({
                    [styles.floatingDiv]: true,
                    [styles.move]: isOpen
                })} onClick={handleOverlayStatus}>
                    <span>CONTACT US</span>
                    <img src="../upArrow.svg" className="mb-4   img-fluid" />
                </div>
            </div>
        </>
    )
}

export default FormOverlay