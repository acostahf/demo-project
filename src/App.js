import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import JumbotronPage from './pages/homePage/homePage';
import Navbar from './components/navbar/navbar';
import About from './pages/aboutPage/aboutPage';
import products from './pages/productsPage/productsPage';
import contact from './pages/contactPage/contactPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
          <Route path='/about' component={About} />
          <Route path='/products' component={products} />
          <Route path='/contact' component={contact} />
          <Route path='/' component={JumbotronPage} />         
        </Switch>
    </div>
  );
}

export default App;
