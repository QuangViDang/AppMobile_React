import React from 'react'

export default function ButtonCustom({
    type,
    src_img_button,
    backgroundColor,
    handleClickButton = () => {},
    text,
    img_show,
}) {
    return (
        <button
            className="button-glow"
            type={type}
            onClick={handleClickButton}
            style={{ backgroundColor: { backgroundColor } }}
        >
            <img style={{display: {img_show}}} src={src_img_button} />
            {text}
        </button>
    )
}
