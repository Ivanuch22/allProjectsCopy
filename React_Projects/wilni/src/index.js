import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './component/app/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
fetch("https://630a790132499100328636f0.mockapi.io/user")
  .then(data => data.json())
  .then(data => console.log(data))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
