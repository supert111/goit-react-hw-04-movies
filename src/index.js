import React from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from "./App";
import "./styles/styles.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);