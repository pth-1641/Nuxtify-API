import { NextFunction, Request, Response, Router } from 'express';
import Nuxtify from '../../package';

const router = Router();

router.get('/home', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await Nuxtify.getHome();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

router.get(
  '/top100',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await Nuxtify.getTop100();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  '/genres',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await Nuxtify.getGenres();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  '/genres',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await Nuxtify.getGenres();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
