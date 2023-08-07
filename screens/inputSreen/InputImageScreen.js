import React, { useState } from 'react'
import { View, TextInput, Button, Image, Text } from 'react-native'

export default function InputImageScreen() {
    const [inputValue, setInputValue] = useState('')
    const [imageSource, setImageSource] = useState(null)

    const handleInputChange = (text) => {
        setInputValue(text)
    }

    const handleImageSubmit = () => {
        // Xử lý logic khi người dùng gửi ảnh
        // Ví dụ: validate, lưu trữ hoặc hiển thị ảnh

        // Ở đây, tớ chỉ đơn giản hiển thị ảnh người dùng đã chọn
        setImageSource(inputValue)
    }

    return (
        <View>
            <TextInput
                value={inputValue}
                onChangeText={handleInputChange}
                placeholder="Nhập đường dẫn ảnh hoặc văn bản"
            />
            <Button title="Gửi ảnh" onPress={handleImageSubmit} />

            {imageSource && (
                <View>
                    {imageSource.startsWith('http') ? (
                        <Image
                            source={{ uri: imageSource }}
                            style={{ width: 200, height: 200 }}
                        />
                    ) : (
                        <Text>{imageSource}</Text>
                    )}
                </View>
            )}
        </View>
    )
}
