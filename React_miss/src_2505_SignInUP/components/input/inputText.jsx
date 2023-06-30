import React from 'react'
import styles from './style.module.scss'
import { useState } from 'react'

const InputCustom = ({
    label,
    ICON,
    type,
    error,
    onChange = () => {},
    name,
    Show_pass,
    Planet,
    DateNow,
    value_input,
}) => {
    const [value, setValue] = useState('')

    return (
        <div className={styles.inputCom}>
            <h4>{label}</h4>
            <div className={styles.inp}>
                <div>
                    <img src={ICON} />
                    <input
                        name={name}
                        onChange={(e) => onChange(e.target)}
                        type={type}
                        placeholder=""
                        max={DateNow}
                        value={value_input}
                    />
                </div>
                {Planet}
                <img type="button" src={Show_pass} />
            </div>
            <p className={styles.errorP}>{error}</p>
            <hr />
        </div>
    )
}

export default InputCustom
