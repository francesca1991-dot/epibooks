import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CommentList({ commentObj, deleteComment }) {
  const { author, comment, rate, _id } = commentObj; 
 
 
  return (
      <Card className="m-2 small">
      <Card.Header as="h6">{rate}/5</Card.Header>
      <Card.Body className="d-flex flex-column align-items-start h-auto">
        <Card.Text className="ms-1">
          <span className="fw-bold">{author}</span>
          {"- " + comment}
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Button variant="outline-primary" onClick={() => console.log("ho eliminato il commento")}>
            Modifica
          </Button>
          <Button variant="outline-danger" className="ms-2" onClick={() => deleteComment(_id)}>
         Elimina
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CommentList;
