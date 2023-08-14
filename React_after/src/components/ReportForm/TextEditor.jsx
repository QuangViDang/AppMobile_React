import ReactQuill from 'react-quill'

const TextEditor = ({ value, onChange }) => {
    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ script: []  }],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
            ['link', 'image', 'video'],
            ['clean'],
        ],
    }

    const formats = [
        'font',
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'color',
        'background',
        'script',
        'blockquote',
        'code-block',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'align',
    ]

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
