import express, {Express, Request, Response } from 'express';

const app: Express = express();

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong');
})

app.listen('3000', () => console.log('running on port 3000'))