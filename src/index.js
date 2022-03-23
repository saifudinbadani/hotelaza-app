import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HomePage, ProductListing  } from "./pages/index";
import { makeServer } from "./server";
import { 
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import { FilterProvider } from './context/filterContext';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <App />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/productlist" element={<ProductListing />}/>
      </Routes>
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
