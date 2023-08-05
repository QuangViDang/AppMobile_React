import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import TableCard from '../../components/PaginationANDTable/TableCard'
import PaginationComponent from '../../components/PaginationANDTable/PaginationComponent'

export default function TableAndPagination() {
    const api = 'https://jsonplaceholder.typicode.com/albums'

    const [arrayValue, setArrayValue] = useState({ total: [], single: [] })

    const GET_DATA_USER = async () => {
        try {
            const response = await fetch(api)
            const result = await response.json()
            setArrayValue({ ...arrayValue, total: result })
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
    }, [])

    const [inputValue, setInputValue] = useState({
        value: '',
        error: '',
        isOk: 'none',
    })

    const inputHandle = (value, total) => {
        setInputValue({ ...inputValue, isOk: 'none' })
        if (!isNaN(value) && value > 0 && value < total) {
            setInputValue({
                ...inputValue,
                value: value,
                error: '',
            })
        } else if (value === '') {
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
        if (!inputValue.value) {
            setInputValue({
                ...inputValue,
                error: ' Bạn cần nhập ĐÚNG!',
            })
        } else {
            setInputValue({ ...inputValue, isOk: 'inline' })
            setNumber({ ...number, itemPerPage: inputValue.value })
            let singleArray = arrayValue.total.slice(0, inputValue.value)
            setArrayValue({ ...arrayValue, single: singleArray })
        }
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
        <View style={styles.container}>
            <View style={styles.topPage}>
                <Text>We have {arrayValue.total.length} lines of data</Text>
                <Text>How many lines do you want each page to have?</Text>
                <Text>Nhập số dòng bạn muốn trên một trang nhé! --{'>'}</Text>
                <View style={styles.divLineNumber}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tại đây"
                        onChangeText={(value) =>
                            inputHandle(value, arrayValue.total.length + 1)
                        }
                    />
                    <Text style={{ color: 'red' }}>{inputValue.error}</Text>
                    <Button title="OK" onPress={handleSave} />
                </View>
            </View>
            <View style={styles.pageTableDiv}>
                <PaginationComponent
                    total={
                        arrayValue.total.length === 0
                            ? 1
                            : arrayValue.total.length
                    }
                    itemPerPage={number.itemPerPage}
                    pageShow={7}
                    onChangeStartEnd={(isChoosePage, start, end) => {
                        setNumber({
                            ...number,
                            isChoosePage: isChoosePage,
                            start: start,
                            end: end,
                        })
                    }}
                />
                <TableCard
                    arrValue={arrayValue.single}
                    listItem={listItemInput}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageTableDiv: {},
    flatList: { margin: 20 },
    header: { alignItems: 'center' },
})
