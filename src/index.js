import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from './context/filterContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from "./context/AuthContext";



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider> 
      </FilterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
