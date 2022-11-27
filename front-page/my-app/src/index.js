import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import ParticipleBackground from './component/ParticipleBackground';



import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ParticipleBackground />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);