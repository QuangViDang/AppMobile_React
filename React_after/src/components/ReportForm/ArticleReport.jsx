import React from 'react';
import { Card } from 'react-bootstrap';

const ArticleReport = ({ article }) => {
  // Hàm này sẽ xử lý format bài báo và hiển thị nội dung theo format chuẩn
  const formatArticle = () => {
    // Xử lý nội dung bài báo ở đây
    // Ví dụ: Tách thành từng đoạn, thêm các thẻ HTML như <p>, <h1>, ...
    // Return chuỗi HTML đã được format
    return article;
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Article Report</Card.Title>
        <div dangerouslySetInnerHTML={{ __html: formatArticle() }} />
      </Card.Body>
    </Card>
  );
};

export default ArticleReport;