import express, { json } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { notFound } from './middleware.js';
import { stopBusRouter } from './v1/routes/index.js';


var app;

const paths = {
    stopBus: '/api/v1/stopBus',
}

app = express();

try {
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(cors());
    app.use(json());

    app.use(paths.stopBus, stopBusRouter);

    app.use(notFound);

    app.get('/', async (req, res) => {
        res.json({
            message: 'Welcome developer',
        });
    });




} catch (error) {
    console.log(error);
}


export default app