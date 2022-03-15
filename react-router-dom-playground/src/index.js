import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes/routes";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header/>
          <AppRoutes/>
          <Footer/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
