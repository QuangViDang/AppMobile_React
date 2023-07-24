import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './stylePagination.scss'
import PaginationComponent from '../../components/pagination/PaginationComponent'
import Table_card from '../../components/pageTable/Table_card'

export default function PaginationAndTable() {

    const [arrayValue, setArrayValue] = useState({
        total: [],
        single: [],
    })

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
        end: 10,
    })
    useEffect(() => {
        GET_DATA_USER()
    }, [])

    const handleSetPage = (start, end) => {
        let singleArray = arrayValue.total.slice(start, end)
        setArrayValue({ ...arrayValue, single: singleArray })
    }

    useEffect(() => {
        handleSetPage(number.start, number.end)
    }, [number.isChoosePage, number.start, number.end])

    //Header for Table
    const listItemInput = [
        { name: 'id', label: 'ID', space: '40px' },
        { name: 'title', label: 'Title', space: '400px' },
        { name: 'albumId', label: 'Album ID', space: '70px' },  
        { name: 'url', label: 'URL', space: '400px' },  
        { name: 'thumbnailUrl', label: 'ThumbnailUrl', space: '400px' },  
    ]
    const api = 'https://jsonplaceholder.typicode.com/photos'
    return (
        <div id="pageTable">
            <div className="backToHome">
                <Link to={`/`}>Back to Root</Link>
            </div>
            <div className="topPage">
                <h4>We have {arrayValue.total.length} lines of data</h4>
                <h5>How many lines do you want each page to have?</h5>
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
