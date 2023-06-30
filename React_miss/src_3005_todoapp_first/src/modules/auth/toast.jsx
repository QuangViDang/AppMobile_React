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
