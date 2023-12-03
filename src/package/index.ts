import { Podcast } from './categories/podcast';
import { Base } from './base';
import { Song } from './categories/song';
import { Search } from './categories/search';
import { Video } from './categories/video';
import { Chart } from './categories/chart';

class NuxtifyApi extends Base {
  public podcast: Podcast;
  public song: Song;
  public search: Search;
  public video: Video;
  public chart: Chart;

  constructor(apiKey?: string, secretKey?: string) {
    super(apiKey, secretKey);
    this.podcast = new Podcast(apiKey, secretKey);
    this.song = new Song(apiKey, secretKey);
    this.search = new Search(apiKey, secretKey);
    this.video = new Video(apiKey, secretKey);
    this.chart = new Chart(apiKey, secretKey);
  }

  public async getHome(): Promise<any> {
    try {
      const sig = this.createHomeSig('/api/v2/page/get/home');
      const res = await this.createRequest('/api/v2/page/get/home', {
        page: 1,
        count: 30,
        sig,
      });
      if (res.err) throw new Error(res.msg);
      return res.data;
    } catch (err) {
      throw err;
    }
  }

  public async getTop100(): Promise<any> {
    try {
      const sig = this.createNoIdSig('/api/v2/page/get/top-100');
      const res = await this.createRequest('/api/v2/page/get/top-100', { sig });
      if (res.err) throw new Error(res.msg);
      return res.data;
    } catch (err) {
      throw err;
    }
  }

  public async getArtist(alias: string): Promise<any> {
    try {
      const sig = this.createNoIdSig('/api/v2/page/get/artist');
      return await this.createRequest('/api/v2/page/get/artist', {
        alias,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getGenres(): Promise<any> {
    try {
      const sig = this.createNoIdSig('/api/v2/page/get/hub-home');
      const res = await this.createRequest('/api/v2/page/get/hub-home', {
        sig,
      });
      if (res.err) throw new Error(res.msg);
      return res.data;
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

const Nuxtify = new NuxtifyApi();

export { Nuxtify };
