import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './stylePagination.scss'

export default function Pagination() {
    const [inputValue, setInputValue] = useState()
    return (
        <div id="pageTable">
            <div className="backToHome">
                <Link to={`/`}>Back to Root</Link>
            </div>
            <div className="topPage">
                <h1>Chúng tôi có 10 dòng dữ liệu</h1>
                <h4>We have ten lines of data</h4>
                <h3>Bạn muốn chia thành bao nhiêu dòng 1 trang?</h3>
                <h5>How many lines do you want each page to have?</h5>

                <label htmlFor="lineNumber">
                    Nhập số dòng bạn muốn trên một trang nhé! --{'>'}
                </label>
                <div id="divLineNumber">
                    <input
                        id="lineNumber"
                        type="text"
                        placeholder="Nhập tại đây"
                        onChange={(e) => {
                            console.log(e.target.value)
                            return setInputValue(e.target.value)
                        }}
                    />
                    <Link to={`/table/page1`}>
                        <button>OK</button>
                    </Link>
                </div>
            </div>
            <div>
                <h1>Say hiiiiiiiii!!!!!!!!</h1>
                <Outlet />
            </div>
        </div>
    )
}
