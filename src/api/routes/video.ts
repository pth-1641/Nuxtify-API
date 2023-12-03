import { NextFunction, Request, Response, Router } from 'express';
import { Nuxtify } from '../../package';

const router = Router();

const enpoints = [
  {
    path: '/detail/:id',
    callback: (id: string) => Nuxtify.video.getDetail(id),
  },
  {
    path: '/related/:id',
    callback: (id: string) => Nuxtify.video.getRelatedVideos(id),
  },
];

enpoints.forEach(({ path, callback }) => {
  router.get(path, async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id || '';
      const data = await callback(id as string);
      if (data.err) throw new Error(data.msg);
      res.status(200).json(data.data);
    } catch (err) {
      next(err);
    }
  });
});

export default router;
