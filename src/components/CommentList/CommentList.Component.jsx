import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CommentList({commentObj}) {

  const {
    author,
    comment,
    rate} = commentObj;
   

  return (
      <Card className="m-2 small">
      <Card.Header as="h6">{rate}/5</Card.Header>
      <Card.Body className="d-flex flex-column align-items-start h-auto">
        <Card.Text className="ms-1">
          <span className="fw-bold">{author}</span>
          {"- " + comment}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CommentList;
