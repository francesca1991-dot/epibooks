import {useState} from 'react';
import React from 'react';
import './App.css';
import MyNav from './components/MyNav/MyNav.Component'; 
import Footer from './components/MyFooter/MyFooter.Component';
import Welcome from './components/Welcome/Welcome.Component';
import AllTheBooks from './components/AllTheBooks/AllTheBooks.Component';


//data import
import historylist from './books/history.json';



function App() {
  const [bookList, setBookList] = useState(historylist);
   
  const handleChange = (event) => {
    console.log(event.target.value);

    const filterResult = historylist.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setBookList(filterResult);
  };

    return (
    <div className="App">
    <MyNav handleChange={handleChange} />
    <Welcome />
    <AllTheBooks booklist={bookList} />
    <Footer />
     </div> 
 );
}

export default App;

