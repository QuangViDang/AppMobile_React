import React, { useState } from 'react'
import Todoapp from './todoapp'
import ButtonCustom from '../../components/button/button'

function Modal() {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => setIsOpen(false)

    const handleOverlayClick = (e) => {
        // console.log('Click đê!', isOpen)
        if (e.target.classList.contains('modal-overlay')) {
            closeModal()
        }
    }

    return (
        <div>
            <button
                style={{ width: '100px', height: '100px' }}
                onClick={openModal}
            >
                Open Modal
            </button>
            {isOpen && (
                <div
                    className="modal-overlay"
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor:
                            'rgba(0, 0, 0, 0.5)' /* Màu đen với độ mờ 50% */,
                    }}
                    onClick={handleOverlayClick}
                >
                    <div
                        className="modal"
                        style={{
                            position: 'relative',
                            zIndex: '1',
                            backgroundColor: 'white',
                            width: '100px',
                            padding: '20px',
                        }}
                    >
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <h2>Modal Header</h2>
                        <p>Modal Content</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
