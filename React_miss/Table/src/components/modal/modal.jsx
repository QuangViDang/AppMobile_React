import React from 'react'
import { useStore } from '../../context'
import Model_Detail from '../../pages/todoApp/model_todoUser/model_detail'
import styles from './style.module.scss'
import Model_Edit from '../../pages/todoApp/model_todoUser/model_edit'

const Modal__ = () => {
    const [{ isOpenModal, dataModal: user, typeModal }, dispatch] = useStore()
    const handleHide_modal = () => {
        dispatch({
            type: 'HIDE_MODAL',
        })
    }
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            handleHide_modal()
        }
    }

    return (
        <div
            className="modal-overlay"
            id={styles.modal}
            onClick={handleOverlayClick}
        >
            <form
                className={styles.todoapp}
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <div>
                    {typeModal === 'DETAIL_USER' && (
                        <Model_Detail
                            handleHide_modal={handleHide_modal}
                            action={'Thông tin chi tiết'}
                        />
                    )}
                    {typeModal === 'EDIT_USER' && (
                        <Model_Edit
                            handleHide_modal={handleHide_modal}
                            action={'Chỉnh sửa thông tin tại đây'}
                        />
                    )}
                </div>
            </form>
        </div>
    )
}

export default Modal__
