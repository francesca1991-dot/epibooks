import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useContext } from "react";

import {ThemeContext} from "../../Contexts/context"

import iconSave from "./icon-save.png"; 

function CommentList({ commentObj, deleteComment, updateComment }) {
  const { author, comment, rate, _id } = commentObj;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(comment);
  const [updatedRate, setUpdatedRate] = useState(rate);

  const theme= useContext(ThemeContext);

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
      <Card.Body className={` d-flex flex-column align-items-start ${theme === "dark" ? "bg-dark navbar-dark" : "bg-light navbar-light"}`}>
        <Card.Text className="ms-1 text-break">
          <span className="fw-bold">{author}</span>
          {isEditing ? (
            <div className="edit-container d-flex">
              <textarea 
                value={updatedComment}
                onChange={(e) => setUpdatedComment(e.target.value)}
                className="w50"
                />
              <input
                type="number"
                value={updatedRate}
                onChange={(e) => setUpdatedRate(e.target.value)}
                />
            </div>
          ) : (
            " - " + comment
          )}{" "}
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Button
            variant="outline-secondary"
            className="me-2 ms-1 custom-button"
            onClick={() => deleteComment(_id)}
          >
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<linearGradient id="hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1" x1="7.534" x2="27.557" y1="7.534" y2="27.557" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1)" d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0	L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599	c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"></path><linearGradient id="hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2" x1="27.373" x2="40.507" y1="27.373" y2="40.507" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#a8142e"></stop><stop offset=".179" stop-color="#ba1632"></stop><stop offset=".243" stop-color="#c21734"></stop></linearGradient><path fill="url(#hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2)" d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019	c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"></path>
</svg>
          </Button>

          <Button
            variant="outline-secondary"
            className="custom-button"
            onClick={handleEdit}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<linearGradient id="iFo2NHV0hSUm8p4rOmjjAa_1NNIMsM95n2A_gr1" x1="18.9" x2="29.609" y1="-1.589" y2="59.145" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e8e189"></stop><stop offset="1" stop-color="#8f4433"></stop></linearGradient><polygon fill="url(#iFo2NHV0hSUm8p4rOmjjAa_1NNIMsM95n2A_gr1)" points="30.485,9.029 8.029,31.485 16.515,39.971 38.971,17.515"></polygon><linearGradient id="iFo2NHV0hSUm8p4rOmjjAb_1NNIMsM95n2A_gr2" x1="33.447" x2="39.376" y1="-12.227" y2="21.399" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe2a6"></stop><stop offset="1" stop-color="#903a51"></stop></linearGradient><path fill="url(#iFo2NHV0hSUm8p4rOmjjAb_1NNIMsM95n2A_gr2)" d="M33.743,5.772l-3.257,3.257l8.485,8.485l3.257-3.257c2.343-2.343,2.343-6.142,0-8.485l0,0	C39.885,3.429,36.086,3.429,33.743,5.772z"></path><linearGradient id="iFo2NHV0hSUm8p4rOmjjAc_1NNIMsM95n2A_gr3" x1="3.164" x2="12.217" y1="24.371" y2="49.243" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e8e189" stop-opacity="0"></stop><stop offset="1" stop-color="#8f4433"></stop></linearGradient><polygon fill="url(#iFo2NHV0hSUm8p4rOmjjAc_1NNIMsM95n2A_gr3)" points="8.029,31.485 3,45 16.515,39.971"></polygon>
</svg>
          </Button>
          <Button
            variant="outline-secondary"
            className="ms-2 custom-button"
            onClick={handleSave}
            disabled={!isEditing}
          >
             <img src={iconSave} alt="Save Icon" className="img-fluid" style={{ width: "30px" }} />

          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CommentList;
