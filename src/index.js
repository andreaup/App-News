import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App/>, rootElement);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);