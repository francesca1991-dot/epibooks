import {useState} from 'react';
import React from 'react';
import './App.css';
import MyNav from './components/MyNav/MyNav.Component'; 
import Footer from './components/MyFooter/MyFooter.Component';
import Welcome from './components/Welcome/Welcome.Component';
import AllTheBooks from './components/AllTheBooks/AllTheBooks.Component';


//data import
import historylist from './books/history.json';

//context import
import { ThemeContext } from './Contexts/context';


function App() {
  const [bookList, setBookList] = useState(historylist);
   
  const handleChange = (event) => {
    console.log(event.target.value);

    const filterResult = historylist.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setBookList(filterResult);
  };

  const [theme, setTheme]=useState("dark");
  const toggleTheme = () => {
    setTheme (theme === "dark" ? "light" : "dark");
  };

    return (
      <ThemeContext.Provider value={theme}>
    <div className={`App ${theme}`} data-bs-theme={theme}>
    <MyNav handleChange={handleChange} toggleTheme={toggleTheme} />
    <Welcome />
    <AllTheBooks booklist={bookList} />
    <Footer />
     </div> 
    </ThemeContext.Provider>
 );
}

export default App;

