import { Base } from '../base';

export class Song extends Base {
  public async getUrl(songId: string): Promise<any> {
    try {
      const sig = this.createIdSig('/api/v2/song/get/streaming', songId);
      return await this.createRequest('/api/v2/song/get/streaming', {
        id: songId,
        sig,
      });
    } catch (error) {
      throw error;
    }
  }

  public async getDetail(songId: string): Promise<any> {
    try {
      const sig = this.createIdSig('/api/v2/song/get/info', songId);
      return await this.createRequest('/api/v2/song/get/info', {
        id: songId,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getLyrics(songId: string): Promise<any> {
    try {
      const sig = this.createIdSig('/api/v2/lyric/get/lyric', songId);
      return await this.createRequest('/api/v2/lyric/get/lyric', {
        id: songId,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }
}
