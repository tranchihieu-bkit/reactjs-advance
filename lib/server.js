import express from 'express';
import config from './config';
import severRender from './serverRender.js';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
     const initialContent = severRender();
     res.render('index', { initialContent: initialContent });
});

app.listen(config.port, () => {
     console.log(`Running on port ${config.port}`);
});