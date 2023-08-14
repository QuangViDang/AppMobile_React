import React from 'react'

const HTMLParser = ({ htmlString }) => {
    const parseStringToHTML = (string) => {
        const parser = new DOMParser()
        const parsedDocument = parser.parseFromString(string, 'text/html')
        return parsedDocument.body.innerHTML
    }

    const parsedHTML = parseStringToHTML(htmlString)

    return (
        <div className="">
            <div
                className=""
                dangerouslySetInnerHTML={{ __html: parsedHTML }}
            />
        </div>
    )
}

export default HTMLParser
