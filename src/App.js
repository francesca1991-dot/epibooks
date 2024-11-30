import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

//component imports
import MyNav from "./components/MyNav/MyNav.Component";
import Footer from "./components/MyFooter/MyFooter.Component";
import Welcome from "./components/Welcome/Welcome.Component";
import SingleBook from "./components/SingleBook/SingleBook.Component";
import BookDetails from "./pages/BookDetails/BookDetails.page";


//style import
import "./App.css";

//data import
import historylist from "./books/history.json";

//context import
import { ThemeContext } from "./Contexts/context";

import Homepage from "./pages/Homepage/Homepage.page";
import NotFound from "./pages/NotFound/NotFound.page";

function App() {
  const [bookList, setBookList] = useState(historylist);

  const handleChange = (event) => {
    console.log(event.target.value);

    const filterResult = historylist.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setBookList(filterResult);
  };

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <div className={`App ${theme}`} data-bs-theme={theme}>
          <MyNav handleChange={handleChange} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Homepage bookList={bookList} />} />
            <Route path="/login" element={<Welcome />} />
           <Route path="*" element={<NotFound/>} />
           <Route path="/" element={<SingleBook />} />
           <Route path="/Book/:asin" element={<BookDetails />} />
             </Routes>
           <Footer />
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
