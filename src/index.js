import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Calendar from './components/Calendar.js';
import './styles/index.scss';

import App from './App';

render(
    <BrowserRouter>
        <App />
        {/* <Calendar / > */}
    </BrowserRouter>,
    document.getElementById('root')
);
