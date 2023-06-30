import React from 'react'
import styles from './style.module.scss'

const ButtonCustom = ({type, text, handleButton = () => {} }) => {
    return (
        <button type={type} className={styles.button} onClick={handleButton}>
            {text}
        </button>
    )
}
export default ButtonCustom
