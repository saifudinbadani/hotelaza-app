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

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/productlist" element={<ProductListing />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
