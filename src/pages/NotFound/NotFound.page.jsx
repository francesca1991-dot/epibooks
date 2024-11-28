import React from "react";
import { useLocation } from "react-router";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const NotFound = () => {
  let location = useLocation();
  console.log(location);

  return (
    <Container className="vh-100 d-flex align-items-center justify-content-center">
      <Alert variant="danger" className="w-75">
        <Alert.Heading>404, Pagina non trovata</Alert.Heading>
        <hr />
        {location.pathname === "" ? (
          <PageNotFound pathname={location.pathname} />
        ) : (
          <ItemNotFound search={location.search} />
        )}
        <p>Prova a tornare alla home e usare la navbar per navigare.</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button variant="outline-danger"> Home </Button>
        </div>
      </Alert>
    </Container>
  );
};

const ItemNotFound = ({ search }) => {
  return (
    <p>
      Attenzione, l'elemento {search} che stai cercando non esiste o è stato
      spostato.
    </p>
  );
};
const PageNotFound = ({ pathname }) => {
  return (
    <p>
      Attenzione, la pagina {pathname} che stai cercando non esiste o è stata
      spostata.
    </p>
  );
};
export default NotFound;
