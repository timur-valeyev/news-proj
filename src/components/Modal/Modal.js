import React, {useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef()

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode === 27) {
                onClose()
            }
        }

        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, onClose])

    return isOpen ? ReactDOM.createPortal(
        <div className="modal" ref={modalRef}>
            <div className={classes.modal}>
                {children}
            </div>
        </div>,
        document.body
    ) : null
}

export default Modal