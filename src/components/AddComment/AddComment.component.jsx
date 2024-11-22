import React from 'react'
import { useState } from 'react';
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


const AddComment = ({ asin, fetchData}) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [author, setAuthor] = useState("");

//chiamata post

const postData = async () => {
  const response = await fetch(POST_COMMENT_URL, {
    headers: {
      Authorization: API_KEY,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      comment: comment,
      rate: rating,
      elementId: asin,
    }),
  });

  console.log(response);

  if (response.ok) {
    alert("Commento aggiunto con successo!");
    fetchData();
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

  postData();

  setComment("");
  setRating("");
  setAuthor("");
};
  
    return (
    <Card className="m-2 add-comment">
      <Card.Header as="h6" className="mb-3">Aggiungi un commento</Card.Header>
      <Form className="pb-3" onSubmit={handleSubmit}>
        <Container>
          <Row className="my-1">
            <Col sm={9} className="ps-4">
              <Form.Control
                type="text"
                placeholder="Cosa ne pensi di questo libro?"
                className="custom-input"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </Col>
            <Col sm={3} className="ps-4">
              <Form.Control
                type="number"
                placeholder="Rating (1-5)"
                className="custom-input"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
            </Col>
          </Row>
          <Row className="my-1">
          </Row>
          <Row className="ms-1 mt-2">
            <Col sm="auto">
              <Button className="custom-button" type="submit">Aggiungi un commento</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Card>
  );

};
export default AddComment;


