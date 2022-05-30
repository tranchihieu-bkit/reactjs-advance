import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import DataApi from './DataApi';

const store = new DataApi(window.initialData);

ReactDom.render(<App store={store} />, document.getElementById('root'));
