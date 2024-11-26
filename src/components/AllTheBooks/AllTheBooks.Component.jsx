
import React, {useState, useContext} from 'react'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


// data import
import historylist from '../../books/history.json';

//components import 
import SingleBook from '../SingleBook/SingleBook.Component';

//context import 
import {ThemeContext} from "../../Contexts/context";
 

const AllTheBooks = ({booklist}) => {

  const theme = useContext (ThemeContext);
 
  return (
      <Container data-bs-theme= {theme}>
        <Row>
          <Col>
          <h1 class="text-center">Lista dei libri</h1>
          </Col>
       </Row>
      
        <Row>
        {booklist.map((book, index) =>{
         return ( 
         <SingleBook 
         title={book.title} 
         image = {book.img}
         asin={book.asin}
         id = {index+1} key = {"book" + index }
         />)
            } )
        }
       </Row>
      </Container>
    
  )};

export default AllTheBooks;



