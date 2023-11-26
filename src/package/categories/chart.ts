import { Base } from '../base';

type WeeklyType = {
  nation: 'vn' | 'kr' | 'us';
  week?: number;
  year?: number;
};

export class Chart extends Base {
  public async getHome(): Promise<any> {
    try {
      const sig = this.createNoIdSig('/api/v2/page/get/chart-home');
      return await this.createRequest('/api/v2/page/get/chart-home', {
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getWeekly(params?: WeeklyType): Promise<any> {
    const defaultParams: WeeklyType = {
      nation: 'vn',
      week: 0,
      year: 0,
    };
    const { nation, week, year } = { ...defaultParams, ...params };
    const nationKeyCode = {
      vn: 'IWZ9Z08I',
      kr: 'IWZ9Z0BO',
      us: 'IWZ9Z0BW',
    };
    try {
      const sig = this.createIdSig(
        '/api/v2/page/get/week-chart',
        nationKeyCode[nation]
      );
      return await this.createRequest('/api/v2/page/get/week-chart', {
        id: nationKeyCode[nation],
        year: year || 0,
        week: week || 0,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getNewRelease() {
    try {
      const sig = this.createNoIdSig('/api/v2/page/get/newrelease-chart');
      const res = await this.createRequest(
        '/api/v2/page/get/newrelease-chart',
        {
          sig,
        }
      );
      return res;
    } catch (err) {
      throw err;
    }
  }
}
