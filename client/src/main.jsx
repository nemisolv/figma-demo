import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.scss'
import { BrowserRouter as Router } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="82219702171-udsle2pggkr7m2aqjgocd5fgftp92bhp.apps.googleusercontent.com" >
      <Router>
        <App /> 
      </Router>
  </GoogleOAuthProvider>
  //  </React.StrictMode>,
);
