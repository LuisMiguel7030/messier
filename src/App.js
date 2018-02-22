import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import BlogPage from './components/pages/BlogPage';
import Navbar from './components/navigation/Navbar';
import Footer from './components/contentpages/Footer';
import ScrollToTop from './components/navigation/ScrollToTop';


const App = () =>
<div>
	
		<Navbar/>
  		<Route path="/" exact component={HomePage} />
  		<Route path="/blog" exact component={BlogPage} />
  		<Footer />
  	
</div>

export default App;
