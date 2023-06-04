import { Base } from '../base';

export class Chart extends Base {
  public async getHomeChart(): Promise<any> {
    try {
      const sig = this.createNoIdSig('/api/v2/page/get/chart-home');
      return await this.createRequest('/api/v2/page/get/chart-home', {
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getWeekChart(
    nationKey: 'vn' | 'kr' | 'us',
    week: number = 0,
    year: number = 0
  ): Promise<any> {
    const nation = {
      vn: 'IWZ9Z08I',
      kr: 'IWZ9Z0BO',
      us: 'IWZ9Z0BW',
    };
    const nationId = nation[nationKey];
    try {
      const sig = this.createIdSig('/api/v2/page/get/week-chart', nationId);
      return await this.createRequest('/api/v2/page/get/week-chart', {
        id: nationId,
        year,
        week,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getNewReleaseChart(): Promise<any> {
    try {
      const sig = this.createNoIdSig('/api/v2/page/get/newrelease-chart');
      return await this.createRequest('/api/v2/page/get/chart-home', {
        sig,
      });
    } catch (err) {
      throw err;
    }
  }
}
