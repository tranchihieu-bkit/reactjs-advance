import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/App.js';

const severRender = () => {
     return ReactDOMServer.renderToString(<App />);
};
export default severRender;