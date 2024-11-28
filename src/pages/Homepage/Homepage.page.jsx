import React from 'react'

//component imports 
import Welcome from '../../components/Welcome/Welcome.Component';
import AllTheBooks from '../../components/AllTheBooks/AllTheBooks.Component';

const Homepage= ({ bookList }) => {
  return (
    <>
     <Welcome />
     <AllTheBooks booklist={bookList} />  
    </>
  )
}

export default Homepage
