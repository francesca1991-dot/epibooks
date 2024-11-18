import React from 'react';
//style imports
import './MyFooter.style.css'
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="Custom-Footer text-black text-center pt-0">
      <Container>
     <p>&copy; 2024 Company, Inc. All rights reserved.</p>
      <p>Follow us on:
        <a href="#" className="text-black">Facebook</a> |
        <a href="#" className="text-black">Twitter</a> |
        <a href="#" className="text-black">Instagram</a>
      </p>
      </Container>
     </footer>

  );
}

export default Footer;
