import React, {useState, useEffect} from 'react';

//components imports
import CommentList from '../CommentList/CommentList.Component';
import AddComment from '../AddComment/AddComment.component';


//link imports
import { GET_COMMENT_URL, POST_COMMENT_URL, PUT_COMMENT_URL, API_KEY } 
from '../../utils/costants';

//style imports
import './CommentArea.style.css';


function CommentArea({asin})  {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

   const fetchData = async (asin) => {
    const url = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;

    const response = await fetch(url, {
      headers: {
        Authorization: API_KEY,
      },
    });

    if (response.ok) {
      const data = await response.json();
      setCommentList(data);  
    } else {
      console.error("Errore nella richiesta GET:", response.statusText);
    }
  };

  
  useEffect(() => {
     if (asin) {
      fetchData(asin);  
    }
  },[asin]);  

  console.log(commentList); 


  const deleteComment = async (commentId) => {
    const url = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`;
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: API_KEY,
      },
    });
  
    if (!response.ok) {
    alert("Errore nell'eliminazione del commento.")}
     else {
      setCommentList(prevComments => prevComments.filter(comment => comment._id !== commentId));
    }
     
  };
  

return (
  <div className="comment-area">
      <h3 className="m-2">Recensioni {asin}</h3>
      {commentList.map((commentObj, index) => (
        <CommentList
          commentObj={commentObj}
          key={commentObj._id + index} 
          deleteComment={deleteComment}
        />
      ))}
      <AddComment asin={asin}
        fetchData={fetchData}
        setCommentList={setCommentList}
         />
    </div>
  );
};


export default CommentArea;
