import express from 'express';
import 'dotenv/config';

const status = 'active';

const app = express();

app.get('/status', (req, res) => {
  res.status(200).send({ status });
});

app.listen(process.env.PORT);

export default app;
