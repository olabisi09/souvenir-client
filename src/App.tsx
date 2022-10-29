import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path='*' element={<PageNotFound/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/products/:productName' element={<ProductDetails/>}/>
          </Routes>
        </Navbar>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
