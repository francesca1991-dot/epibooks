import React from 'react'
import { useState } from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const AddComment = ({ asin}) => {
 
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [author, setAuthor] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!author || !rating || !comment) {
      alert("Tutti i campi devono essere compilati.");
      return;
    }

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
                placeholder="Autore recensione"
                className="custom-input"
                onChange={handleAuthorChange} 
                value={author}
              />
            </Col>
            <Col sm={3} className="ps-4">
              <Form.Control
                type="number"
                placeholder="Rating (1-5)"
                className="custom-input"
                onChange={handleRatingChange}
                value={rating}
              />
            </Col>
          </Row>
          <Row className="my-1">
            <Col sm={12} className="ps-4">
              <Form.Control
                type="text"
                placeholder="Cosa ne pensi di questo libro?"
                className="custom-input"
                onChange={handleCommentChange} 
                value={comment}
              />
            </Col>
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


