import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Header from './Header/Header'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <App />
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
