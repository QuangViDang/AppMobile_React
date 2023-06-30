import { useState } from 'react'

export default function Clock() {
    const timenow = new Date().toLocaleTimeString()
    const [time, setTime] = useState(timenow)

    const updateTime = () => {
        let time_up = new Date().toLocaleTimeString()
        setTime(time_up)
    }

    setInterval(updateTime, 1000)
    const [color, setColor] = useState('')
    return (
        <div>
            <label style={{ color: color }} htmlFor="">
                Pick a color
            </label>
            <select
                style={{ color: color }}
                onChange={(choose_color) => {
                    setColor(choose_color.target.value)
                }}
            >
                <option style={{ color: color }} value="blue">
                    Blue
                </option>
                <option style={{ color: color }} value="red">
                    Red
                </option>
                <option style={{ color: color }} value="black">
                    Black
                </option>
            </select>
            <h1 style={{ color: color }}>{time}</h1>
        </div>
    )
}
