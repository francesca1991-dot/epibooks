import React from 'react';
//style imports
import './MyFooter.style.css'
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="Custom-Footer text-white text-center pt-0">
      <Container>
     <p>&copy; 2024 Company, Inc. All rights reserved.</p>
      <p>Follow us on:
        <a href="#" className="text-white">Facebook</a> |
        <a href="#" className="text-white">Twitter</a> |
        <a href="#" className="text-white">Instagram</a>
      </p>
      </Container>
     </footer>

  );
}

export default Footer;
