import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from "@apollo/client";
import Client from './ApolloClient';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <ApolloProvider client={Client}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
