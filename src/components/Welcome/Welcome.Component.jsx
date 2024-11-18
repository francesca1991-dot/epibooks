import './Welcome.style.css';
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
     <h1 className="text-center">Benvenuti in Epibooks</h1> 
     </Col>
</Row>
<Row>
<Col>
     <Alert className="custom-alert"  variant="info">
          Non ti sei ancora registrato sul nostro sito
        </Alert>
 </Col>
</Row>
     </Container>
    </div>
  )
}

export default Welcome

