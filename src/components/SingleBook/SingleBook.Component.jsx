import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../Contexts/context";
import "./SingleBook.style.css";

// components imports
import CommentArea from "../CommentArea/CommentArea.Component";

function SingleBook(props) {
  const { title, image, asin, id, idSelected, setIdSelected } = props;
  const [selected, setSelected] = useState(false);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    setSelected(id === idSelected);
  }, [id, idSelected]);

  const handleCoverClick = () => {
    if (selected) {
      setIdSelected(null);
    } else {
      setIdSelected(id);
    }
    setSelected(!selected);
  };
  return (
    <Col sm={6} md={6} lg={4} className="mb-4">
      <Container className="Card-Container">
        <Row>
          <Col className="p-0">
            <Card
              className={`SingleBook ${selected ? "selected" : ""}`}
              onClick={handleCoverClick}
            >
              <Card.Img
                className={`img-fluid ${selected ? "selected-image" : ""}`}
                variant="top"
                src={image}
              />
              <Card.Body
                className={
                  theme === "dark" ? "card-body-dark" : "card-body-light"
                }
              >
                <Card.Title>{title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

export default SingleBook;
