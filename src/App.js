import React from 'react';
import './App.css';
import MyNav from './components/MyNav/MyNav.Component'; 
import Footer from './components/MyFooter/MyFooter.Component';
import Welcome from './components/Welcome/Welcome.Component';
import AllTheBooks from './components/AllTheBooks/AllTheBooks.Component';

function App() {
  return (
    <div className="App">
    <MyNav />
    <Welcome />
    <AllTheBooks />
    <Footer />
     </div> 
 );
}

export default App;

