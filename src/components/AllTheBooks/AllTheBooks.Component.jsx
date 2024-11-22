
import React, {useState} from 'react'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// data import
import historylist from '../../books/history.json';

//components import 
import SingleBook from '../SingleBook/SingleBook.Component';
 

const AllTheBooks = ({booklist, setBookList}) => {

  const handleChange = (event) => {
    console.log(event.target.value);
    
    const filterResult = historylist.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase()) 
    );
    setBookList(filterResult);
  };

  return (
    <div>
     <Container>
        <Row>
          <Col>
          <h1>Lista dei libri</h1>
          </Col>
       </Row>
      </Container>
      <Container>
        <Row>
        {booklist.map((book, index) =>{
         return ( 
         <SingleBook 
         title={book.title} 
         image = {book.img}
         id = {index+1} key = {"book" + index } asin={book.asin}
         />)
            } )
        }
       </Row>
      </Container>
    </div>
  )};

export default AllTheBooks;



