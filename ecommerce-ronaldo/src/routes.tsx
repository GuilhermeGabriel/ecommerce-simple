import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/' component={Home} />
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;