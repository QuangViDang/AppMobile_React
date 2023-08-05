import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'

export default function PaginationComponent({
    total,
    pageShow,
    itemPerPage,
    onChangeStartEnd = () => {},
}) {
    const [inputValue, setInputValue] = useState({
        value: 1,
        isOk: '',
    })

    const inputHandle = (text) => {
        let input = parseInt(text)
        console.log(input)
        if (input && !isNaN(input) && input <= total) {
            setInputValue({
                ...inputValue,
                value: input.toString(),
                isOk: 'valid',
            })
        } else {
            setInputValue({ ...inputValue, isOk: 'invalid' })
        }
    }

    const handleSave = () => {
        setNumber({ ...number, line: inputValue.value })
        handleSetPage(1)
    }

    const [number, setNumber] = useState({
        isChooseTable: 1,
        isChoose: 0,
        line: total,
        start: 0,
        end: total,
        pageShow: pageShow,
        page: Math.ceil(total / inputValue.value),
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
                number.isChooseTable <
                    number.page - Math.round(number.pageShow / 2) &&
                number.isChooseTable > Math.round(number.pageShow / 2) &&
                number.page > number.pageShow
                    ? number.isChoose + index_ - 1
                    : number.isChooseTable <
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
                <TouchableOpacity
                    onPress={() => handleSetPage(index)}
                    key={index}
                >
                    <Text
                        style={[
                            styles.paginationItem,
                            number.isChooseTable === index &&
                                styles.activePaginationItem,
                            number.isChooseTable === index && {
                                color: 'white',
                            },
                        ]}
                    >
                        {index}
                    </Text>
                </TouchableOpacity>
            )
        }
    )
    const PaginationSmallerShow = Array.from(
        { length: number.page },
        (_, index_) => {
            const index = index_ + 1
            return (
                <TouchableOpacity
                    onPress={() => handleSetPage(index)}
                    key={index}
                >
                    <Text
                        style={[
                            styles.paginationItem,
                            number.isChooseTable === index &&
                                styles.activePaginationItem,
                        ]}
                    >
                        {index}
                    </Text>
                </TouchableOpacity>
            )
        }
    )
    const handleSetPage = (index) => {
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
        <View style={styles.paginationDiv}>
            <View style={styles.pagination}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => {
                        handleSetPage(1)
                    }}
                >
                    <Text>{'<<'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => {
                        let newChoose =
                            number.isChooseTable === 1
                                ? number.page
                                : number.isChooseTable - 1
                        handleSetPage(newChoose)
                    }}
                >
                    <Text>{'<'}</Text>
                </TouchableOpacity>
                {number.page > number.pageShow ? (
                    <View style={styles.PagiBig}>
                        <TouchableOpacity onPress={() => handleSetPage(1)}>
                            <Text
                                style={[
                                    styles.paginationItem,
                                    number.isChooseTable === 1 &&
                                        styles.activePaginationItem,
                                    number.isChooseTable === 1 && {
                                        color: 'white',
                                    },
                                ]}
                            >
                                1
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.paginationItem,
                                styles.ellipsis,
                                {
                                    display:
                                        (number.page > number.pageShow &&
                                            number.isChooseTable <=
                                                Math.round(
                                                    number.pageShow / 2
                                                )) ||
                                        number.page <= number.pageShow
                                            ? 'none'
                                            : null,
                                },
                            ]}
                        >
                            <Text>...</Text>
                        </TouchableOpacity>
                        {PaginationSmall}
                        <TouchableOpacity
                            style={[
                                styles.paginationItem,
                                styles.ellipsis,
                                {
                                    display:
                                        number.page > number.pageShow &&
                                        number.isChooseTable >=
                                            number.page -
                                                Math.round(number.pageShow / 2)
                                            ? 'none'
                                            : number.page > number.pageShow
                                            ? 'flex'
                                            : 'none',
                                },
                            ]}
                        >
                            <Text>...</Text>
                        </TouchableOpacity>
                        {number.page > 1 && (
                            <TouchableOpacity
                                onPress={() => handleSetPage(number.page)}
                            >
                                <Text
                                    style={[
                                        styles.paginationItem,
                                        number.isChooseTable === number.page &&
                                            styles.activePaginationItem,
                                        number.isChooseTable ===
                                            number.page && {
                                            color: 'white',
                                        },
                                    ]}
                                >
                                    {number.page}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ) : (
                    PaginationSmallerShow
                )}

                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => {
                        let newChoose =
                            number.isChooseTable === number.page
                                ? 1
                                : number.isChooseTable + 1
                        handleSetPage(newChoose)
                    }}
                >
                    <Text>{'>'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => {
                        handleSetPage(number.page)
                    }}
                >
                    <Text>{'>>'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.pageNumber}>
                <TextInput
                    style={[
                        styles.input,
                        inputValue.isOk === 'invalid' && styles.invalidInput,
                    ]}
                    onChangeText={(text) => inputHandle(text)}
                    value={inputValue.value}
                    keyboardType="numeric"
                    maxLength={5}
                />
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => handleSave()}
                >
                    <Text style={styles.saveButtonText}>ItemPerPage</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = {
    paginationDiv: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        padding: 10,
    },
    paginationItem: {
        borderRadius: 15,
        padding: 10,
    },
    activePaginationItem: {
        color: 'white',
        backgroundColor: 'blue',
    },
    ellipsis: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    PagiBig: {
        flexDirection: 'row',
    },
    pageNumber: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 30,
        width: 50,
        borderWidth: 1,
        marginRight: 10,
        textAlign: 'center',
        borderColor: '#00FF00',
        borderRadius: 15,
    },
    invalidInput: {
        borderColor: 'red',
    },
    buttonSAVE: { borderRadius: 15 },
    saveButton: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0099FF',
        padding: 5,
        borderRadius: 15,
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
}
