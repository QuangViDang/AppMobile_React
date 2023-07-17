import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './stylePagination.scss'
import Table_card from '../features/pageTable/Table_card'

export default function Pagination() {
    const [number, setNumber] = useState({
        page: 1,
        line: 0,
        start: 0,
        end: 0,
        isChooseTable: 1,
    })
    const [inputValue, setInputValue] = useState({
        value: '',
        error: '',
        isOk: 'none',
    })

    const listItem = [
        { name: 'id', label: 'ID' },
        { name: 'title', label: 'Title' },
    ]
    const [arrayValue, setArrayValue] = useState({ total: [], single: [] })

    const GET_DATA_USER = async () => {
        try {
            const reponse = await fetch(
                'https://jsonplaceholder.typicode.com/albums'
            )
            const resuft = await reponse.json()
            setArrayValue({ ...arrayValue, total: resuft })
            // console.log(arrayValue.total)
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    useEffect(() => {
        GET_DATA_USER()
    }, [])

    const inputHandle = (e, total) => {
        setInputValue({ ...inputValue, isOk: 'none' })
        console.log(inputValue.isOk)
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

        const pageS = arrayValue.total.length / inputValue.value
        setNumber({
            ...number,
            page: Math.ceil(pageS),
            line: inputValue.value,
            start: 0,
            end: number.line,
        })

        let singleArray = arrayValue.total.slice(number.start, number.end)
        setArrayValue({ ...arrayValue, single: singleArray })
        console.log(number)
    }

    const PaginationSmall = Array.from(
        { length: number.page - 2 },
        (_, index_) => {
            const index = index_ + 2
            return (
                <a
                    onClick={() => handleSetPage(index)}
                    className={number.isChooseTable === index ? 'active' : ''}
                    key={index}
                >
                    {index}
                </a>
            )
        }
    )
    const handleSetPage = (index) => {
        console.log(number)
        setNumber({
            ...number,
            isChooseTable: index,
            end: index * number.line,
            start: number.end - number.line,
        })

        let singleArray = arrayValue.total.slice(number.start, number.end)
        setArrayValue({ ...arrayValue, single: singleArray })
        console.log(number)
    }

    return (
        <div id="pageTable">
            <div className="backToHome">
                <Link to={`/`}>Back to Root</Link>
            </div>
            <div className="topPage">
                <h1>Chúng tôi có 5000 dòng dữ liệu</h1>
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
                <h1>
                    Say hiiiiiiiii!!!!!!!! Number lines is: {inputValue.value}
                </h1>
                
                <div className="pageTableDiv_pagination">
                    <a
                        href="#"
                        onClick={() => {
                            let newChoose =
                                number.isChooseTable === 1
                                    ? number.page
                                    : number.isChooseTable - 1
                            setNumber({
                                ...number,
                                isChooseTable: newChoose,
                            })
                        }}
                    >
                        {'<--'} Previous
                    </a>
                    <div class="pagination">
                        <a
                            href="#"
                            onClick={() => {
                                let newChoose =
                                    number.isChooseTable === 1
                                        ? number.page
                                        : number.isChooseTable - 1
                                setNumber({
                                    ...number,
                                    isChooseTable: newChoose,
                                })
                            }}
                        >
                            &laquo;
                        </a>
                        <a
                            style={{
                                display: number.page === 1 ? 'none' : 'inline',
                            }}
                            href="#"
                            onClick={() => handleSetPage(1)}
                            className={
                                number.isChooseTable === 1 ? 'active' : ''
                            }
                        >
                            1
                        </a>
                        {PaginationSmall}
                        <a
                            href="#"
                            onClick={() => handleSetPage(number.page)}
                            className={
                                number.isChooseTable === number.page
                                    ? 'active'
                                    : ''
                            }
                        >
                            {number.page}
                        </a>
                        <a
                            href="#"
                            onClick={() => {
                                let newChoose =
                                    number.isChooseTable === number.page
                                        ? 1
                                        : number.isChooseTable + 1
                                setNumber({
                                    ...number,
                                    isChooseTable: newChoose,
                                })
                            }}
                        >
                            &raquo;
                        </a>
                    </div>
                    <a
                        href="#"
                        onClick={() => {
                            let newChoose =
                                number.isChooseTable === number.page
                                    ? 1
                                    : number.isChooseTable + 1
                            setNumber({
                                ...number,
                                isChooseTable: newChoose,
                            })
                        }}
                    >
                        Next {'-->'}
                    </a>
                </div><Table_card
                    arrayValue={arrayValue.single}
                    listItem={listItem}
                />
            </div>
        </div>
    )
}
