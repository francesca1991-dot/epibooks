import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

//component imports
import MyNav from "./components/MyNav/MyNav.Component";
import Footer from "./components/MyFooter/MyFooter.Component";

//style import
import "./App.css";

//data import
import historylist from "./books/history.json";

//context import
import { ThemeContext } from "./Contexts/context";

import Homepage from "./pages/Homepage/Homepage.page";

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
          </Routes>

          <Footer />
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
