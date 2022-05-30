import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from './components/App.js';
import DataApi from './components/DataApi.js';
import config from './config';
const severRender = async () => {
     const resp = await axios.get(`http://${config.host}:${config.port}/data`);
     const store = new DataApi(resp.data);
     return {
          initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
          initialData: resp.data,
     }
};
export default severRender;