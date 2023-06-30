import React, { useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Demo() {
    const notify = () =>
        toast('Wow so easy!', {
            autoClose: 1000,
        })

    return (
        <div>
            <button onClick={notify}>
                <h1>Notify!</h1>
            </button>
            <ToastContainer />
        </div>
    )
}

export function MyComponent() {
    useEffect(() => {
        const form = document.querySelector('form')
        const sexElement = document.getElementsByName('sex')

        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault()
            }
            for (let i = 0; i <= sexElement.length; i++) {
                // if (sexElement[i].value) {
                console.log('hehe', sexElement[i].value)
                // }
            }
        }

        console.log('hehe', sexElement.length)
        form.addEventListener('keydown', handleKeyDown)
        return () => {
            form.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <form style={{ display: 'flex' }}>
            <input type="text" id="user" placeholder="Nhap vao day" />
            <label>
                <input type="radio" name="sex" value="male" />
                Male
            </label>
            <label>
                <input type="radio" name="sex" value="female" />
                Female
            </label>
            <label>
                <input type="radio" name="sex" value="other" />
                Other
            </label>
            <p></p>
            <button type="submit">Submit</button>
        </form>
    )
}
{
    /* export default Demo; */
}
