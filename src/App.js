import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import PortPage from './components/pages/PortPage';
import Navbar from './components/navigation/Navbar';
import Footer from './components/contentpages/Footer';

const App = () =>
<div>
  <Navbar/>

  <Route path="/" exact component={HomePage} />
  <Route path="/portafolio" exact component={PortPage} />
  <Footer />
</div>

export default App;
