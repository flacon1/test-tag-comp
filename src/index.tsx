import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//TODO - does not work in IE with those

import {defineCustomElements, applyPolyfills } from '@tag/tag-components-v3/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);