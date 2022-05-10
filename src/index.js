import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HomePage, ProductListing, Login, Signup, Cart, Wishlist, PageNotFound  } from "./pages/index";
import { makeServer } from "./server";
import { 
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import { FilterProvider } from './context/filterContext';
import { CartProvider } from './context/CartContext';



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      
      <FilterProvider>
      <CartProvider>
        <App />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/productlist" element={<ProductListing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      </CartProvider> 
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
