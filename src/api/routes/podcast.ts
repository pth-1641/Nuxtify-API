import { NextFunction, Request, Response, Router } from 'express';
import { Nuxtify } from '../../package';

const router = Router();

const enpoints = [
  {
    path: '/',
    callback: () => Nuxtify.podcast.getAll(),
  },
  {
    path: '/home',
    callback: () => Nuxtify.podcast.getHome(),
  },
  {
    path: '/top',
    callback: () => Nuxtify.podcast.getTop(),
  },
  {
    path: '/url/:id',
    callback: (id: string) => Nuxtify.podcast.getUrl(id),
  },
  {
    path: '/media/:id',
    callback: (id: string) => Nuxtify.podcast.getCurrentMedia(id),
  },
  {
    path: '/detail/:id',
    callback: (id: string) => Nuxtify.podcast.getDetail(id),
  },
  {
    path: '/comments/:id',
    callback: (id: string) => Nuxtify.podcast.getComments(id),
  },
];

enpoints.forEach(({ path, callback }) => {
  router.get(path, async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id = '' } = req.params;
      const data = await callback(id);
      if (data.err) throw new Error(data.msg);
      res.status(200).json(data.data);
    } catch (err) {
      next(err);
    }
  });
});

export default router;
