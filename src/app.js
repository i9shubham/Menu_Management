import express from 'express';
import { connectDB } from './db/db.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

export default app;
