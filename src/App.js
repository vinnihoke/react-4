// React Imports
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Local Imports
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>
)};

export default App;
