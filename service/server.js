import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './src/routes/routes';

const app = express();

// Use routes
app.use('/api', routes);

// Use body parser
app.use(bodyParser.json());

// Use cors
app.use(cors());

app.listen(5000, () => console.log('Listening on 5000'));