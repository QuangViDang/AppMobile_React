import React from 'react';
import './Login.css';

export default function Clock({ color, time }) {
    const timeText = new Date().toLocaleTimeString("en-US");

    // const background_ = document.getElementById("clock_box").add;
    // const background_lightcoral = document.getElementById("Lightcoral");
    // const background_yellow = document.getElementById("Yellow");
    return (
        <div id='clock_box'>
            <div className='pick_color'>
                Pick a color:
                <select>
                    <option id='Lightcoral'>Lightcoral</option>
                    <option id='Yellow'>Yellow</option>
                </select>
            </div>
            <h1 className='clock'>
                {timeText}
            </h1>
        </div>
    );
}
