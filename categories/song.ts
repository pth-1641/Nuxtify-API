import { Base } from '../base';

export class Song extends Base {
  public async getSongUrl(songId: string): Promise<any> {
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

  public async getSongDetail(songId: string): Promise<any> {
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

  public async getNewReleaseSongs() {
    try {
      const res = await this.createRequest(
        '/api/v2/page/get/newrelease-chart',
        {
          sig: this.createNoIdSig('/api/v2/page/get/newrelease-chart'),
        }
      );
      return res;
    } catch (err) {
      throw err;
    }
  }

  public async getPlaylist(playlistId: string): Promise<any> {
    try {
      const sig = this.createIdSig('/api/v2/page/get/playlist', playlistId);
      return await this.createRequest('/api/v2/page/get/playlist', {
        id: playlistId,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }
}
