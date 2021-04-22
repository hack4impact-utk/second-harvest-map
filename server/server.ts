/* eslint-disable no-console */
import express, { Request, Response } from 'express';
import cors from 'cors';
import getFoodPantries from './Contentful';

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/foodPantries', async (req: Request, res: Response) => {
  res.send(await getFoodPantries());
});
