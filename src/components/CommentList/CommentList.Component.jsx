import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function CommentList({ commentObj, deleteComment, updateComment }) {
  const { author, comment, rate, _id } = commentObj;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(comment);
  const [updatedRate, setUpdatedRate] = useState(rate);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!updatedComment || !updatedRate) {
      alert("Tutti i campi devono essere compilati.");
      return;
    }
    if (updatedRate < 1 || updatedRate > 5) {
      alert("Il rating deve essere tra 1 e 5.");
      return;
    }

    updateComment(_id, { comment: updatedComment, rate: updatedRate });

    setIsEditing(false);

    alert("Commento modificato con successo!");
  };

  return (
    <Card className="m-2 small">
      <Card.Header as="h6">{rate}/5</Card.Header>
      <Card.Body className="d-flex flex-column align-items-start">
        <Card.Text className="ms-1 text-break">
          <span className="fw-bold">{author}</span>
          {isEditing ? (
            <>
              <textarea 
                value={updatedComment}
                onChange={(e) => setUpdatedComment(e.target.value)}
                />
              <input
                type="number"
                value={updatedRate}
                onChange={(e) => setUpdatedRate(e.target.value)}
                />
            </>
          ) : (
            " - " + comment
          )}{" "}
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Button
            variant="outline-danger"
            className="me-2 ms-1 custom-button"
            onClick={() => deleteComment(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
              style={{ fill: "beige" }}
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </Button>

          <Button
            variant="outline-primary"
            className="custom-button"
            onClick={handleEdit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
              style={{ fill: "beige" }}
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </Button>
          <Button
            variant="outline-danger"
            className="ms-2 custom-button"
            onClick={handleSave}
            disabled={!isEditing}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              style={{ fill: "beige" }}
            >
              <path d="M 4 2 L 4 22 L 12 19 L 20 22 L 20 2 L 6 2 L 4 2 z"></path>
            </svg>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CommentList;
