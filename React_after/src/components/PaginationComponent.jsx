import React, { useEffect, useState } from 'react'

export default function PaginationTable({
    total,
    pageShow,
    itemPerPage,
    onChangeStartEnd = () => {},
}) {
    let totalPage = total / itemPerPage
    const [number, setNumber] = useState({
        isChooseTable: 1,
        isChoose: 0,
        line: itemPerPage,
        start: 0,
        end: itemPerPage,
        pageShow: pageShow,
        page: !Math.ceil(totalPage) ? 1:Math.ceil(totalPage),
    })
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

    const handleSetPage = (index) => {
        // console.log(index)
        let start = number.line * (index - 1)
        let end = Number(start) + Number(number.line)
        setNumber({
            ...number,
            isChooseTable: index,
            isChoose: index - 1,
            start: start,
            end: end,
        })
        console.log(number)
    }

    useEffect(() => {
        handleSetPage(number.isChooseTable)
        onChangeStartEnd(number.isChooseTable, number.start, number.end)
    }, [number.isChooseTable])

    return (
        <div className="pageTableDiv">
            <div className="pageTableDiv_pagination">
                <a
                    href="#"
                    onClick={() => {
                        let newChoose =
                            number.isChooseTable === 1
                                ? number.page
                                : number.isChooseTable - 1
                        handleSetPage(newChoose)
                    }}
                >
                    {'<--'} Previous
                </a>
                <div class="pagination">
                    <a
                        href="#"
                        onClick={() => {
                            handleSetPage(1)
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
                        className={number.isChooseTable === 1 ? 'active' : ''}
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
                                    : 'inline',
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
                                            Math.round(number.pageShow / 2)) ||
                                number.page <= number.pageShow
                                    ? 'none'
                                    : 'inline',
                        }}
                        href="#"
                        onClick={() => handleSetPage(number.page)}
                    >
                        ...
                    </a>
                    <a
                        style={{
                            display: number.page === 1 ? 'none' : 'inline',
                        }}
                        href="#"
                        onClick={() => handleSetPage(number.page)}
                        className={
                            number.isChooseTable === number.page ? 'active' : ''
                        }
                    >
                        {number.page}
                    </a>
                    <a
                        href="#"
                        onClick={() => {
                            handleSetPage(number.page)
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
                        handleSetPage(newChoose)
                    }}
                >
                    Next {'-->'}
                </a>
            </div>
        </div>
    )
}
