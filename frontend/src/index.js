import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignUp from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";
import About from "./landing_page/about/AboutPage";
import Pricing from './landing_page/pricing/PricingPage';
import Product from "./landing_page/products/ProductPage";
import Support from "./landing_page/support/SupportPage";
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import OpenAccount from './landing_page/OpenAccount';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/product' element={<Product />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/support' element={<Support />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <OpenAccount/>
    <Footer />
  </BrowserRouter>
);

