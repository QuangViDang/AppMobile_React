import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    FlatList,
    Alert,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import PrimaryButton from '../../components/button/PrimaryButton'

export default function StartGameScreen({ onChangeInput = () => {} }) {
    const [input, setInput] = useState('')
    const onPressReset = () => setInput('')
    const onPressConfirm = () => {
        if (isNaN(input) || input < 0) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [
                    {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: onPressReset,
                    },
                ]
            )   
        }
        return onChangeInput(input)
    }

    const [item, setItem] = useState({ value: '', isOk: false })
    const [listItem, setListItem] = useState([])

    return (
        <View>
            <View color={['blue', 'red']} style={styles.inputContainer}>
                <TextInput
                    onChangeText={(e) => {
                        setInput(e)
                    }}
                    value={input}
                    placeholder=""
                    style={styles.inputNumber}
                    maxLength={2}
                    autoCapitalize="none" //Thuộc tính autoCapitalize được sử dụng để kiểm soát việc viết hoa chữ cái đầu tiên trong các từ khi người dùng nhập liệu vào ô TextInput. Nếu thuộc tính này được đặt là "none" (như trong trường hợp này), các từ sẽ không được tự động chuyển sang viết hoa chữ cái đầu tiên. Các giá trị khác của thuộc tính này bao gồm "words" (viết hoa chữ cái đầu tiên của mỗi từ), "sentences" (viết hoa chữ cái đầu tiên của mỗi câu) và "characters" (viết hoa chữ cái đầu tiên của mỗi ký tự).
                    autoCorrect={false} //Thuộc tính autoCorrect được sử dụng để kiểm soát việc tự động sửa lỗi chính tả trong khi người dùng nhập liệu vào ô TextInput. Nếu thuộc tính này được đặt là "false" (như trong trường hợp này), các từ không được sửa đổi tự động. Nếu thuộc tính này được đặt là "true", các từ được chỉnh sửa tự động để sửa lỗi chính tả.
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPressHandel={onPressReset}
                            Children={'Reset'}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPressHandel={onPressConfirm}
                            Children={'Confirm'}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.inputNumberList}
                        onChangeText={(e) => setItem({ ...item, value: e })}
                        value={item.value}
                        placeholder="item . . ."
                    />
                    <Text>Vi Đăng Quang</Text>
                    <Button
                        onPress={() => {
                            setItem({ value: '', isOk: true })
                            return setListItem([...listItem, item.value])
                        }}
                        title="Add"
                    ></Button>
                </View>

                <FlatList
                    data={listItem}
                    keyExtractor={(value) => {
                        return value + new Date().getTime() + Math.random(100)
                    }}
                    renderItem={(item) => {
                        return (
                            <View>
                                <Text>{item.item}</Text>
                            </View>
                        )
                    }}
                ></FlatList>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#d2a8ff',
        borderRadius: 15,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#d2a8ff',
        borderRadius: 15,
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: { flexDirection: 'row' },
    buttonContainer: { flex: 1 },
    inputNumber: {
        fontSize: 25,
        display: 'flex',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 8,
    },
    inputNumberList: { marginBottom: 10, width: 100, height: 70 },
    listItem: { height: 30, width: 100, backgroundColor: 'white' },
})
