import React, { useState } from 'react'
import './styles.scss'
import ButtonCustom from '../../components/ButtonCustom'
import HTMLParser from '../../components/HTMLParser'

import SunEditorScreen from './SunEditorScreen'
import 'suneditor/dist/css/suneditor.min.css'

export default function MyWordSreen() {
    const [content, setContent] = useState({
        isShow: false,
        value: '<h1>What is this?<h1/>',
    })
    function handleEditorChange(value) {
        setContent({ ...content, value: value })
    }

    const handleSaveReport = () => {
        setContent({ value: content.value, isShow: false })
        // let check = content.value === check1
        console.log('Lưu lại', content.value)
    }
    const handleEditReport = () => {
        setContent({ ...content, value: content.value })
        // console.log('Chuẩn bị EDit', content.value)
        setContent({ ...content, isShow: true })
    }
    return (
        <div id="texteditDiv">
            <h1>Quang Vi Đăng's Post</h1>
            {content.isShow ? (
                <div id="textedit">
                    <div className="editScreen">
                        {/* <Container className="editDiv">
                            <TextEditor
                                value={content.value}
                                onChange={handleEditorChange}
                            />
                        </Container> */}
                        <div className="editDiv">
                            <SunEditorScreen
                                content={content.value}
                                onChange={handleEditorChange}
                            />
                        </div>

                        <ButtonCustom
                            handleClickButton={handleSaveReport}
                            text={'SAVE'}
                        />
                    </div>
                </div>
            ) : (
                <div id="textedit">
                    <div className="editScreen">
                        <div className="editDiv se-container">
                            <HTMLParser htmlString={content.value} />
                        </div>

                        <ButtonCustom
                            handleClickButton={handleEditReport}
                            img_show={'inline'}
                            src_img_button={
                                'https://img.icons8.com/?size=1x&id=3dbDiCK5fTtx&format=png'
                            }
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
