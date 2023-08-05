import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const TableCard = ({
    listItem,
    arrValue,
    handleDetail,
    handleEdit,
    handleDelete,
    isCheckAll,
    handleCheck,
    listChecked = [],
    isCheck = false,
}) => {
    let counter = 0

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {isCheck && (
                    <View style={styles.headerColumn}>
                        <Text>Select All</Text>
                        <TouchableOpacity
                            onPress={(e) => {
                                handleCheck(
                                    e,
                                    e.target.checked ? 'ALL' : 'NONE'
                                )
                            }}
                            style={styles.checkbox}
                        >
                            {isCheckAll && (
                                <Image
                                    source={
                                        'https://img.icons8.com/?size=1x&id=UBmsT2rjxnYD&format=png'
                                    }
                                />
                            )}
                            {!isCheckAll && (
                                <Image
                                    source={
                                        'https://img.icons8.com/?size=1x&id=83250&format=png'
                                    }
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                )}
                <View style={styles.headerColumn}>
                    <Text>STT</Text>
                </View>
                {listItem.map((value, index) => {
                    return (
                        <View style={styles.headerColumn} key={index}>
                            <Text>{value.label}</Text>
                        </View>
                    )
                })}
                {isCheck && (
                    <>
                        <View style={styles.headerColumn}>
                            <Text>Edit</Text>
                        </View>
                        <View style={styles.headerColumn}>
                            <Text>Delete</Text>
                        </View>
                    </>
                )}
            </View>
            {arrValue.map((value, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={styles.row}
                        onPress={() => {
                            handleDetail(value)
                        }}
                    >
                        {isCheck && (
                            <View style={styles.column}>
                                <TouchableOpacity
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleCheck(
                                            e,
                                            e.target.checked
                                                ? 'ITEM_CHECK'
                                                : 'ITEM_UNCHECK',
                                            value
                                        )
                                    }}
                                    style={styles.checkbox}
                                >
                                    {listChecked.includes(value.id) && (
                                        <Image
                                            source={
                                                'https://img.icons8.com/?size=1x&id=UBmsT2rjxnYD&format=png'
                                            }
                                        />
                                    )}
                                    {!listChecked.includes(value.id) && (
                                        <Image
                                            source={
                                                'https://img.icons8.com/?size=1x&id=83250&format=png'
                                            }
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>
                        )}
                        <View style={styles.column}>
                            <Text>{++counter}</Text>
                        </View>

                        {/* VALUE */}
                        {listItem.map((valueKey, index) => {
                            return (
                                <View
                                    key={index}
                                    style={styles.column}
                                    onPress={() => {
                                        handleDetail(value)
                                    }}
                                >
                                    <Text>{value[valueKey.name]}</Text>
                                </View>
                            )
                        })}

                        {isCheck && (
                            <>
                                <View style={styles.column}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            handleEdit(value)
                                        }}
                                    >
                                        <Image
                                            source={{
                                                uri: 'https://img.icons8.com/?size=1x&id=oR5tfd18Ei7C&format=gif',
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.column}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            handleDelete(value, index)
                                        }}
                                    >
                                        <Image
                                            source={{
                                                uri: 'https://img.icons8.com/?size=1x&id=4B0kCMNiLlmW&format=gif',
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default TableCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    headerColumn: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
    },
    column: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
