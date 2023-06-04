import { Base } from '../base';

export class Video extends Base {
  public async getRelatedVideos(videoId: string): Promise<any> {
    try {
      const sig = this.createIdSig('/api/v2/video/get/section-relate', videoId);
      return await this.createRequest('/api/v2/video/get/section-relate', {
        id: videoId,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getVideoDetail(videoId: string): Promise<any> {
    try {
      const sig = this.createIdSig('/api/v2/page/get/video', videoId);
      return await this.createRequest('/api/v2/page/get/video', {
        id: videoId,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }
}
