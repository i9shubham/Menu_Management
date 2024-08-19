import express from 'express';
import { connectDB } from './db/db.js';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(cors()); //allowing all origins to access the server for cross resource sharing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api', routes);

export default app;
