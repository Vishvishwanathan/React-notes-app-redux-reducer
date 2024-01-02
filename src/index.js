import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router}from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthenticationContextProvider from './Contexts/Authentication.context';
import { Provider } from "react-redux";
import Store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthenticationContextProvider>
    <Provider store={Store}>
      <App />
      </Provider>
    </AuthenticationContextProvider>
    </Router>
);


reportWebVitals();
