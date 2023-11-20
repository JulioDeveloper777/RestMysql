import express from 'express';
import routes from './app/routes/routes.js';

const app = express();
app.use(express.json());
app.use(routes)

export default app;
