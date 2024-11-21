import React from 'react'

import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const AddComment = () => {
  return (
    <Card className="m-2 add-comment">
        <Card.Header as="h6" className="mb-3">
            Aggiungi un commento
            </Card.Header>
    <Form className="pb-3">
      <Container>
        <Row className="my-1">
          <Col sm={9} className="ps-4">
            <Form.Control
              type="text"
              placeholder="Autore recensione"
              className=" Custom-Input mr-sm-2"
            />
          </Col>
          
          <Col sm={3} className="ps-4">
            <Form.Control
              type="text"
              placeholder="Rating (1-5)"
              className=" Custom-Input mr-sm-2"
            />
          </Col>
          </Row>
          <Row className="my-1">
          <Col sm={12} className="ps-4">
            <Form.Control
              type="text"
              placeholder="Cosa ne pensi di questo libro?"
              className=" Custom-Input mr-sm-2"
            />
          </Col>
          </Row>
          <Row className="ms-1 mt-2">
          <Col sm="auto">
            <Button className="Custom-Button" type="submit">Aggiungi un commento</Button>
          </Col>
        </Row>
      </Container>
      </Form>
      </Card>
  )
}

export default AddComment;

