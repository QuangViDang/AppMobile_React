import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const TextEditor = ({ value, onChange }) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'imageResize'], // Thêm option 'video' vào toolbar
            [{ align: [] }],
            ['clean'],
        ],
    }

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'bullet',
        'link',
        'image',
        'imageResize',
        'align',
    ]
    const handleImageUpload = async (file) => {
        // Xử lý tải lên hình ảnh và nhận về URL
        const imageUrl = await uploadImage(file)

        // Chèn hình ảnh vào trình soạn thảo với thuộc tính style và resizable
        const range = quillRef.getEditor().getSelection(true)
        quillRef.getEditor().insertEmbed(range.index, 'image', imageUrl, 'user')

        // Set thuộc tính resizable cho hình ảnh
        const image = quillRef
            .getEditor()
            .scroll.domNode.querySelector(`[src="${imageUrl}"]`)
        image.setAttribute('resizable', 'true')
    }

    // ...

    return (
        <ReactQuill
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            placeholder="Start typing..."
        />
    )
}

export default TextEditor
