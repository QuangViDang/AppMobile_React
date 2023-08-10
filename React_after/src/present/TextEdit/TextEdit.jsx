import React ,{ useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import ArticleReport from '../../components/ReportForm/ArticleReport';

export default function TextEdit() {
    const [article, setArticle] = useState('')

    const handleInputChange = (e) => {
        setArticle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Thực hiện các xử lý hoặc gọi API tại đây nếu cần
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="articleInput">
                    <Form.Label>Article Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        value={article}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Generate Report
                </Button>
            </Form>
            {article && <ArticleReport article={article} />}
        </Container>
    )
}
