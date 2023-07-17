import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './stylePagination.scss'
import Table_card from '../features/pageTable/Table_card'

export default function Pagination() {
    const [inputValue, setInputValue] = useState({ value: '', error: '' })
    const inputHandle = (e, total) => {
        if (e.target.value > 0 && e.target.value < total) {
            console.log(e.target.value)
            setInputValue({
                ...inputValue,
                value: e.target.value,
            })
            setInputValue({
                ...inputValue,
                error: '',
            })
        } else if (e.target.value === '') {
            setInputValue({
                ...inputValue,
                error: '',
            })
        } else {
            setInputValue({
                ...inputValue,
                error: ' Đã lớn hơn tổng số',
            })
        }
    }

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
                    <div>
                        <input
                            id="lineNumber"
                            type="text"
                            placeholder="Nhập tại đây"
                            onChange={(e) => inputHandle(e, 10)}
                        />
                        <p style={{ color: 'red' }}>{inputValue.error}</p>
                    </div>
                    <Link to={`/table/page1`}>
                        <button>OK</button>
                    </Link>
                </div>
            </div>
            <div>
                <h1>Say hiiiiiiiii!!!!!!!! Mã số: {inputValue.value}</h1>
                <Table_card isCheck="true" isCheckAll="true" />
            </div>
        </div>
    )
}
