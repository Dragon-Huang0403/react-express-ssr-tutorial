import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './common/App';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
