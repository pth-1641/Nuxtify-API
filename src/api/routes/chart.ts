import { NextFunction, Request, Response, Router } from 'express';
import Nuxtify from '../../package';

const router = Router();

const enpoints = [
  { path: '/home', callback: () => Nuxtify.chart.getHome() },
  { path: '/new-release', callback: () => Nuxtify.chart.getNewRelease() },
];

enpoints.forEach(({ path, callback }) => {
  router.get(path, async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await callback();
      if (data.err) throw new Error(data.msg);
      res.status(200).json(data.data);
    } catch (err) {
      next(err);
    }
  });
});

router.get(
  '/weekly',
  async (req: Request, res: Response, next: NextFunction) => {
    const { nation = 'vn', week = 0, year = 0 } = req.query as any;
    try {
      if (!['vn', 'kr', 'us'].includes(nation)) {
        throw new Error('Invalid nation');
      }
      const data = await Nuxtify.chart.getWeekly({
        nation,
        week,
        year,
      });
      if (data.err) throw new Error(data.msg);
      res.status(200).json(data.data);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
