import { Base } from '../base';

export class Video extends Base {
  public async getRelatedVideos(videoId: string): Promise<any> {
    try {
      const sig = this.createIdSig('/api/v2/video/get/section-relate', videoId);
      const res = await this.createRequest('/api/v2/video/get/section-relate', {
        id: videoId,
        sig,
      });
      if (res.err) throw new Error(res.msg);
      return res.data;
    } catch (err) {
      throw err;
    }
  }

  public async getDetail(videoId: string): Promise<any> {
    try {
      const sig = this.createIdSig('/api/v2/page/get/video', videoId);
      const res = await this.createRequest('/api/v2/page/get/video', {
        id: videoId,
        sig,
      });
      if (res.err) throw new Error(res.msg);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
}
