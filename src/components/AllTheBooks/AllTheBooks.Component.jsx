
import React, {useState} from 'react'
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AllTheBooks.style.css';

// data import
import historylist from '../../books/history.json';

//components import 
import SingleBook from '../SingleBook/SingleBook.Component';
 

const AllTheBooks = () => {
  const [bookList, setBookList] = useState(historylist);

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
          <Col>
          <Form className="pb-3">
        <Row className="ms-5">
          <Col sm="auto" className="ps-5">
            <Form.Control
              type="text"
              placeholder="Cerca libro"
              className=" Custom-Input mr-sm-2"
              onChange= {(e) => handleChange(e)}
            />
          </Col>
          <Col sm="auto">
            <Button className="Custom-Button" type="submit">Cerca</Button>
          </Col>
        </Row>
      </Form>
          </Col>
       </Row>
      </Container>
      <Container>
        <Row>
        {bookList.map((book, index) =>{
         return ( 
         <SingleBook 
         title={book.title} 
         image = {book.img}
         id = {index+1} key = {"book" + index }
         />)
            } )
        }
       </Row>
      </Container>
    </div>
  )
}

export default AllTheBooks;



