import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
import chart from './routes/chart';
import podcast from './routes/podcast';
import search from './routes/search';
import song from './routes/song';
import video from './routes/video';

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());

// Routes
app.use('/video', video);
app.use('/song', song);
app.use('/chart', chart);
app.use('/search', search);
app.use('/podcast', podcast);
app.use('/', routes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    statusCode: 404,
    message: 'Not found',
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    statusCode: 500,
    message: err.message,
  });
});

app.listen(PORT);
