import React from 'react'
import { useState } from 'react';

//bootstrap-react imports
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import {
   POST_COMMENT_URL,
   API_KEY
} from "../../utils/costants";


const AddComment = ({ asin, fetchData, setCommentList}) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

const postData = async () => {
  const response = await fetch(POST_COMMENT_URL, {
    headers: {
      Authorization: API_KEY,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      comment: comment,
      rate: parseInt(rating, 10),
      elementId: asin,
    }),
  });

  console.log(response);

  if (response.ok) {
    alert("Commento aggiunto con successo!");
    const newComment = await response.json();
    setCommentList(prevComments => [newComment, ...prevComments]);
  } else {
    alert("Errore nell'aggiunta del commento.");
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (!rating || !comment) {
    alert("Tutti i campi devono essere compilati.");
    return; 
  }

  if (!Number.isInteger(parseInt(rating, 10)) || rating < 1 || rating > 5) {
    alert("Il rating deve essere un numero tra 1 e 5.");
    return;
  }

  postData();

  setComment("");
  setRating("");
};
  
    return (
    <Card className="m-2 add-comment">
      <Card.Header as="h6" className="mb-3">Aggiungi un commento</Card.Header>
      <Form className="pb-3" onSubmit={handleSubmit}>
        <Container>
          <Row className="my-1">
            <Col sm={9} className="ps-1">
              <Form.Control
                type="text"
                placeholder="Cosa ne pensi di questo libro?"
                className="custom-input"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </Col>
            <Col sm={3} className="ps-0 pe-1">
              <Form.Control
                type="number"
                placeholder="Rating (1-5)"
                className="custom-input Rating"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
            </Col>
          </Row>
          <Row className="my-1">
          </Row>
          <Row className="ms-0 mt-2 pe-0">
            <Col sm="auto">
              <Button className="custom-button btn btn-secondary" type="submit">Aggiungi un commento</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Card>
  );

};
export default AddComment;


