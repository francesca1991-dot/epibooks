import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CommentList(props) {
  const defaultProps = {
 comment: "Libro interessante",
 rate: "5",
 elementId: "0000"
}
  const {
    comment= defaultProps.comment, 
    rate= defaultProps.rate, 
    elementId = defaultProps.elementId} = props;

  return (
      <Card className="m-2">
      <Card.Header as="h5">{rate}/5</Card.Header>
      <Card.Body className="d-flex flex-column align-items-start h-auto">
        <Card.Title>{elementId}-Filippo</Card.Title>
        <Card.Text>
          {comment}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CommentList;
