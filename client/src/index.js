// import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="295760089034-rtnvk7jcia0rhoa3m5mn2bv7fv9uq3c5.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider> */}
    <App/>
  </React.StrictMode>
);

reportWebVitals();
