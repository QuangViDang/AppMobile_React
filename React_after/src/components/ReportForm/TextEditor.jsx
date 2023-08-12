import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import VideoPlugin from 'react-quill-plugin-video'

const TextEditor = ({ value, onChange }) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'], // Thêm option 'video' vào toolbar
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
        'video', // Thêm định dạng 'video'
        'align',
    ]

    return (
        <ReactQuill
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            placeholder="Start typing..."
            plugins={[VideoPlugin]} // Thêm plugin 'VideoPlugin'
        />
    )
}

export default TextEditor
