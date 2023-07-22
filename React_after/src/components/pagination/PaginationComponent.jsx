import React, { useEffect, useState } from 'react'
import './style.scss'
export default function PaginationComponent({
    total,
    pageShow,
    itemPerPage,
    onChangeStartEnd = () => {},
}) {
    let totalPage = Math.ceil(total / itemPerPage)
    const [number, setNumber] = useState({
        isChooseTable: 1,
        isChoose: 0,
        line: itemPerPage,
        start: 0,
        end: itemPerPage,
        pageShow: pageShow,
        page: totalPage,
    })

    // console.log(
    //     'total',
    //     total,
    //     pageShow,
    //     itemPerPage,
    //     Math.ceil(total / itemPerPage)
    // )
    const [inputValue, setInputValue] = useState({
        value: total,
        isOk: '',
    })

    const inputHandle = (e) => {
        let input = e.target.value
        console.log(input)
        if (input && !isNaN(input) && input <= total) {
            setInputValue({ ...inputValue, value: input, isOk: 'valid' })
        } else {
            setInputValue({ ...inputValue, isOk: 'invalid' })
        }
    }

    const handleSave = () => {
        // console.log(inputValue)
        setNumber({ ...number, line: inputValue.value })
        handleSetPage(1)
    }

    const PaginationSmall = Array.from(
        {
            length:
                number.page > number.pageShow
                    ? number.isChooseTable <= Math.round(number.pageShow / 2) ||
                      number.isChooseTable >=
                          number.page - Math.round(number.pageShow / 2)
                        ? Math.round(number.pageShow / 2)
                        : Math.round(number.pageShow / 2) - 1
                    : number.page - 2,
        },
        (_, index_) => {
            let startLast = number.page - Math.round(number.pageShow / 2)
            const index__ =
                number.isChooseTable < // Nhỏ hơn số Page - 4
                    number.page - Math.round(number.pageShow / 2) &&
                number.isChooseTable > Math.round(number.pageShow / 2) &&
                number.page > number.pageShow
                    ? number.isChoose + index_ - 1
                    : // Đối với
                    number.isChooseTable < // Nhỏ hơn số Page - 4
                          number.page - Math.round(number.pageShow / 2) &&
                      number.isChooseTable > Math.round(number.pageShow / 2) &&
                      number.page > number.pageShow
                    ? number.isChoose + index_
                    : number.isChooseTable >=
                      number.page - Math.round(number.pageShow / 2)
                    ? startLast + index_ - 1
                    : index_ + 1
            const index = index__ + 1
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
    const PaginationSmallerShow = Array.from(
        { length: number.page },
        (_,index_) => {
            const index = index_ +1
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
        // console.log(index)
        let start = number.line * (index - 1)
        let end = Number(start) + Number(number.line)
        setNumber({
            ...number,
            line: inputValue.value,
            isChooseTable: index,
            isChoose: index - 1,
            start: start,
            end: end,
            page: Math.ceil(total / inputValue.value),
        })
    }
    useEffect(() => {
        handleSetPage(number.isChooseTable)
        onChangeStartEnd(number.isChooseTable, number.start, number.end)
    }, [number.isChooseTable, inputValue.value])
    useEffect(() => {
        handleSetPage(1)
    }, [inputValue.value])

    useEffect(() => {
        handleSetPage()
    }, [number.line])

    return (
        <div className="PaginationDiv">
            <div class="pagination">
                <a
                    className="icon"
                    href="#"
                    onClick={() => {
                        handleSetPage(1)
                    }}
                >
                    &laquo;
                </a>{' '}
                <a
                    className="icon"
                    href="#"
                    onClick={() => {
                        let newChoose =
                            number.isChooseTable === 1
                                ? number.page
                                : number.isChooseTable - 1
                        handleSetPage(newChoose)
                    }}
                >
                    ‹
                </a>
                {number.page > number.pageShow ? (
                    <>
                        <a
                            style={{
                                display: number.page === 1 ? 'none' : '',
                            }}
                            href="#"
                            onClick={() => handleSetPage(1)}
                            className={
                                number.isChooseTable === 1 ? 'active' : ''
                            }
                        >
                            1
                        </a>
                        <a
                            style={{
                                display:
                                    (number.page > number.pageShow &&
                                        number.isChooseTable <=
                                            Math.round(number.pageShow / 2)) ||
                                    number.page <= number.pageShow
                                        ? 'none'
                                        : '',
                            }}
                            onClick={() => {
                                handleSetPage(1)
                            }}
                        >
                            ...
                        </a>
                        {PaginationSmall}
                        <a
                            style={{
                                display:
                                    (number.page > number.pageShow &&
                                        number.isChooseTable >=
                                            number.page -
                                                Math.round(
                                                    number.pageShow / 2
                                                )) ||
                                    number.page <= number.pageShow
                                        ? 'none'
                                        : '',
                            }}
                            href="#"
                            onClick={() => handleSetPage(number.page)}
                        >
                            ...
                        </a>
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
                    </>
                ) : (
                    PaginationSmallerShow
                )}
                <a
                    className="icon"
                    href="#"
                    onClick={() => {
                        let newChoose =
                            number.isChooseTable === number.page
                                ? 1
                                : number.isChooseTable + 1
                        handleSetPage(newChoose)
                    }}
                >
                    ›
                </a>
                <a
                    className="icon"
                    href="#"
                    onClick={() => {
                        handleSetPage(number.page)
                    }}
                >
                    &raquo;
                </a>
            </div>
            <div className="inputItemPerPage">
                <input
                    className={inputValue.isOk}
                    type="text"
                    placeholder="item"
                    onChange={inputHandle}
                />
                <button onClick={handleSave}>OK</button>
            </div>
        </div>
    )
}
