import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './src/routes/routes';

const app = express();

// Db connection config
const DB_CONNECT_URL = process.env.DB_CONNECT_URL;

// Connect to db
mongoose.connect(
    DB_CONNECT_URL,
    { useNewUrlParser: true, useFindAndModify: false }
);

mongoose.connection.once('open', () => {
    console.log('Connected to database.');
});

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use cors
app.use(cors());

// Use routes
app.use('/api', routes);

app.listen(5000, () => console.log('Listening on 5000'));