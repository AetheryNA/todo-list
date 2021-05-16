import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';

// Pages
import Listing from './pages/listing/index'

ReactDOM.render(
  <React.StrictMode>
    <Listing />
  </React.StrictMode>,
  document.getElementById('root')
);
