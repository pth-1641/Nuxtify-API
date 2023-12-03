import { NextFunction, Request, Response, Router } from 'express';
import { Nuxtify } from '../../package';

const router = Router();

const enpoints = [
  {
    path: '/',
    callback: (q: string) => Nuxtify.search.getResult(q),
  },
  {
    path: '/suggestion',
    callback: (q: string) => Nuxtify.search.getSuggestion(q),
  },
  {
    path: '/recommend',
    callback: () => Nuxtify.search.getRecommendKeyword(),
  },
];

enpoints.forEach(({ path, callback }) => {
  router.get(path, async (req: Request, res: Response, next: NextFunction) => {
    try {
      const q = req.query.q || '';
      const data = await callback(q as string);
      if (data.err) throw new Error(data.msg);
      res.status(200).json(data.data);
    } catch (err) {
      next(err);
    }
  });
});

router.get('/type', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { q = '', type, page = 1 } = req.query as any;
    const data = await Nuxtify.search.getResultByType({
      q,
      type,
      page,
    });
    if (data.err) throw new Error(data.msg);
    res.status(200).json(data.data);
  } catch (err) {
    next(err);
  }
});

export default router;
