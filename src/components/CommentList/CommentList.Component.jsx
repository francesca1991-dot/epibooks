import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CommentList(props) {
  const defaultProps = {
 comment: "Libro interessante, lo consiglierei",
 rate: "5",
 elementId: "0000"
}
  const {
    comment= defaultProps.comment, 
    rate= defaultProps.rate, 
    elementId = defaultProps.elementId} = props;

  return (
      <Card className="m-2 small">
      <Card.Header as="h6">{rate}/5</Card.Header>
      <Card.Body className="d-flex flex-column align-items-start h-auto">
      <div className="d-flex justify-content-start">
        <Card.Title className="h6 mb-0 me-2" style={{ lineHeight: "1.4" }}>Filippo</Card.Title>
        <Card.Text className="ms-1">
          {comment}
        </Card.Text>
      </div>
      </Card.Body>
    </Card>
  )
}

export default CommentList;
