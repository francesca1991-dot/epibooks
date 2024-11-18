import React from 'react';

import CommentList from '../CommentList/CommentList.Component';
//link imports
import { GET_COMMENT_URL, POST_COMMENT_URL, PUT_COMMENT_URL } 
from '../../utils/costants';

function CommentArea()  {
  return (
    <>
    <h3 className="m-2">Recensioni</h3>
    <CommentList/>
    </>
  )
}

export default CommentArea;
