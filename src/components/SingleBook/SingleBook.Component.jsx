
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import './BookCard.style.css';

// components imports
import CommentArea from '../CommentArea/CommentArea.Component';



function SingleBook(props) {
    const {title, image} = props;

    const  [selected,setSelected] = useState (false);

    const handleCoverClick = () => {
      setSelected (!selected);
   };


   return (
    
    <Col sm={selected ? 12 : 6 } md={selected ? 6 : 3 }lg={selected ? 4 : 2} className="mb-4">
       <Container className= "Card-Container">
       <Row>
       <Col className= "p-0">
       <Card  className={`SingleBook ${selected ? 'selected' : ''}`}
                    onClick={handleCoverClick}>
      <Card.Img className={`img-fluid ${selected ? 'selected-image' : ''}`} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
    </Col>
    {selected && (
     <Col sm={6} md={6} lg={6} className="p-0" >
    <CommentArea />
    </Col>
     )}
    </Row>
    </Container>
    </Col>
    
  )
}

export default SingleBook;



