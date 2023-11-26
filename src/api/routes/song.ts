import { NextFunction, Request, Response, Router } from 'express';
import Nuxtify from '../../package';

const router = Router();

const enpoints = [
  { path: '/url/:id', callback: (id: string) => Nuxtify.song.getUrl(id) },
  {
    path: '/detail/:id',
    callback: (id: string) => Nuxtify.song.getDetail(id),
  },
  {
    path: '/lyrics/:id',
    callback: (id: string) => Nuxtify.song.getLyrics(id),
  },
];

enpoints.forEach(({ path, callback }) => {
  router.get(path, async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id || '';
      const data = await callback(id as string);
      console.log(data);
      if (data.err) throw new Error(data.msg);
      res.status(200).json(data.data);
    } catch (err) {
      next(err);
    }
  });
});

export default router;
