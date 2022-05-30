import express from 'express';
import config from './config';
import severRender from './serverRender.js';
import { data } from "./components/testData.json";
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
     const initialContent = await severRender();
     return res.render('index', { ...initialContent });
});
app.get('/data', (req, res) => {
     return res.send(data);
});

app.listen(config.port, () => {
     console.log(`Running on port ${config.port}`);
});