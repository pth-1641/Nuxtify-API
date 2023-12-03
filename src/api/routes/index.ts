import { NextFunction, Request, Response, Router } from 'express';
import { Nuxtify } from '../../package';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      Github: 'https://github.com/pth-1641/Nuxtify-API',
      Issues: 'https://github.com/pth-1641/Nuxtify-API/issues',
    });
  } catch (err) {
    next(err);
  }
});

const enpoints = [
  {
    path: '/home',
    callback: () => Nuxtify.getHome(),
  },
  {
    path: '/top100',
    callback: () => Nuxtify.getTop100(),
  },
  {
    path: '/genres',
    callback: () => Nuxtify.getGenres(),
  },
  {
    path: '/artist/:id',
    callback: (id: string) => Nuxtify.getArtist(id),
  },
  {
    path: '/playlist/:id',
    callback: (id: string) => Nuxtify.getPlaylist(id),
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
