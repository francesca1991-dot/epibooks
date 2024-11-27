import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

//style import
import './AllTheBooks.style.css'

// data import
import historylist from "../../books/history.json";

//components import
import SingleBook from "../SingleBook/SingleBook.Component";
import CommentArea from "../CommentArea/CommentArea.Component";
//context import
import { ThemeContext } from "../../Contexts/context";

const AllTheBooks = ({ booklist }) => {
  const theme = useContext(ThemeContext);
  const [idSelected, setIdSelected] = useState(null);

  return (
    <Container data-bs-theme={theme}>
      <Row>
        <Col>
          <h1 className="text-center">Lista dei libri</h1>
        </Col>
      </Row>

      <Row>
        <Col sm={6} md={6} lg={8}>
          <Row>
            {booklist.map((book, index) => {
              return (
                <SingleBook
                  key={"book" + index}
                  title={book.title}
                  image={book.img}
                  asin={book.asin}
                  id={index + 1}
                  idSelected={idSelected}
                  setIdSelected={setIdSelected}
                />
              );
            })}
          </Row>
        </Col>
        <Col sm={6} md={6} lg={4}>
          <Container fluid  >
            <Row>
              <CommentArea asin={idSelected}/>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AllTheBooks;
