import React from 'react';
import ReactDOM from 'react-dom';

//imported BrowserRouter as Router
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

//Wrapped App with the ROUTER + const rootElement = 
const rootElement = document.getElementById('root'); 
ReactDOM.render(
    <Router>
        <App /> 
    </Router>
, rootElement
);
