import React from "react";
import { useParams } from "react-router";

import { Container, Row, Col } from "react-bootstrap";

import historylist from "../../books/history.json"; 

//style import
import './BookDetails.style.css'

const BookDetails = () => {

  let { asin } = useParams();

  const selectedBook = historylist.find((book) => book.asin === asin);

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img
            src={selectedBook.img}
            alt={selectedBook.title}
            className="img-fluid rounded img-page"
          />
        </Col>
        <Col md={6}>
          <h1>{selectedBook.title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            sapiente quis cum, expedita voluptates itaque? Laudantium deserunt
            explicabo non, saepe quia ea a asperiores exercitationem, itaque
            nam, quis pariatur doloribus? Ab cumque amet voluptate vitae iusto
            assumenda numquam illum voluptatum nostrum, quaerat eius incidunt
            libero tempore, perspiciatis earum. Recusandae officia alias
            mollitia nobis ab ipsum, corrupti optio dolor, rem iusto iste sint
            ex quia aspernatur adipisci commodi fuga ducimus at itaque, nihil
            odit reprehenderit tenetur. Quis accusamus voluptatum iusto. Quam
            vitae, consequuntur temporibus delectus voluptatum commodi
            perspiciatis harum eaque? Enim iusto exercitationem est ipsam nam
            eaque asperiores odio, in delectus cupiditate earum labore at
            nesciunt, id voluptatem aperiam eligendi molestiae distinctio sunt
            reprehenderit dignissimos. Impedit magnam omnis fugiat? Eligendi
            nihil accusantium quidem soluta quod vel inventore expedita dolore
            est mollitia, in voluptatem placeat error consequuntur id saepe!
            Alias, vel, amet ex rerum blanditiis nulla impedit corporis
            architecto voluptatem esse asperiores similique nesciunt cupiditate
            sed. Esse excepturi rem, ipsam mollitia, debitis minus velit enim
            error, nisi voluptatem facere quibusdam officiis! Optio, magni.
            Tempora odit provident, vitae tenetur, debitis nemo veniam ipsam,
            quam consequuntur est dolorum rerum eius incidunt amet placeat id
            porro quis consectetur non beatae? Ducimus illum totam quos
            laudantium.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
