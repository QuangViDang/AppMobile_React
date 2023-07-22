import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './stylePagination.scss'
import PaginationComponent from '../../components/pagination/PaginationComponent'
import Table_card from '../../components/pageTable/Table_card'

export default function PaginationAndTable() {
    const api = 'https://jsonplaceholder.typicode.com/albums'

    const [arrayValue, setArrayValue] = useState({ total: [], single: [] })

    const GET_DATA_USER = async () => {
        try {
            const reponse = await fetch(api)
            const resuft = await reponse.json()
            setArrayValue({ ...arrayValue, total: resuft })
            // console.log(arrayValue.total)
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    const [number, setNumber] = useState({
        isChoosePage: 1,
        itemPerPage: 1,
        start: 0,
        end: 0,
    })
    useEffect(() => {
        GET_DATA_USER()
        setNumber({ ...number, end: arrayValue.total.length })
        // console.log(number)
    }, [])

    const [inputValue, setInputValue] = useState({
        value: '',
        error: '',
        isOk: 'none',
    })

    const inputHandle = (e, total) => {
        setInputValue({ ...inputValue, isOk: 'none' })
        if (
            !isNaN(e.target.value) &&
            e.target.value > 0 &&
            e.target.value < total
        ) {
            setInputValue({
                ...inputValue,
                value: e.target.value,
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

    const handleSave = () => {
        !inputValue.value
            ? setInputValue({
                  ...inputValue,
                  error: ' Bạn cần nhập ĐÚNG!',
              })
            : setInputValue({ ...inputValue, isOk: 'inline' })
        setNumber({ ...number, itemPerPage: inputValue.value })
        let singleArray = arrayValue.total.slice(0, inputValue.value)
        setArrayValue({ ...arrayValue, single: singleArray })
    }

    const handleSetPage = (start, end) => {
        let singleArray = arrayValue.total.slice(start, end)
        setArrayValue({ ...arrayValue, single: singleArray })
    }

    useEffect(() => {
        handleSetPage(number.start, number.end)
    }, [number.isChoosePage, number.start, number.end])

    //Header for Table
    const listItemInput = [
        { name: 'id', label: 'ID' },
        { name: 'title', label: 'Title' },
    ]
    return (
        <div id="pageTable">
            <div className="backToHome">
                <Link to={`/`}>Back to Root</Link>
            </div>
            <div className="topPage">
                <h4>We have {arrayValue.total.length} lines of data</h4>
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
                            onChange={(e) =>
                                inputHandle(e, arrayValue.total.length + 1)
                            }
                        />
                        <p style={{ color: 'red' }}>{inputValue.error}</p>
                    </div>
                    <button onClick={handleSave}>OK</button>
                </div>
            </div>
            <div className="pageTableDiv">
                <PaginationComponent
                    total={
                        arrayValue.total.length === 0
                            ? 1
                            : arrayValue.total.length
                    }
                    itemPerPage={number.itemPerPage}
                    pageShow={7}
                    onChangeStartEnd={(isChoosePage, start, end) => {
                        // console.log('Parent', isChoosePage, start, end)
                        setNumber({
                            ...number,
                            isChoosePage: isChoosePage,
                            start: start,
                            end: end,
                        })
                    }}
                />
                <Table_card
                    arr_value={arrayValue.single}
                    listItem={listItemInput}
                />
            </div>
        </div>
    )
}
