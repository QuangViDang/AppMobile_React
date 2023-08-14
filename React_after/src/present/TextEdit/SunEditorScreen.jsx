import SunEditor from 'suneditor-react'

import React from 'react'
export default function SunEditorScreen({ onChange, content }) {
    return (
        <div>
            <SunEditor
                autoFocus={false}
                placeholder="Hi guy, staying typing . . ."
                onChange={onChange}
                defaultValue={content}
                setOptions={{
                    buttonList: [
                        ['undo', 'redo'],
                        ['font', 'fontSize', 'formatBlock'],
                        ['paragraphStyle', 'blockquote'],
                        [
                            'bold',
                            'underline',
                            'italic',
                            'strike',
                            'subscript',
                            'superscript',
                        ],
                        ['fontColor', 'hiliteColor', 'textStyle'],

                        ['removeFormat', 'outdent', 'indent'],
                        ['align', 'horizontalRule', 'list', 'lineHeight'],
                        ['table', 'link', 'image', 'video' /** 'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                        ['fullScreen', 'showBlocks', 'codeView'],
                        ['preview', 'print'],
                        ['save', 'template'],
                    ],
                }}
            />
        </div>
    )
}
