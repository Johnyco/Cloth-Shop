import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage'


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/logo" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
//one way data flow