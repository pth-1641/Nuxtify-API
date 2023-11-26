import { Base } from '../base';

export class Podcast extends Base {
  public async getHome(): Promise<any> {
    try {
      const sig = this.createNoIdSig('/api/v2/page/get/radio');
      return await this.createRequest('/api/v2/page/get/radio', {
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getTop(): Promise<any> {
    try {
      const sig = this.createNoIdSig('/api/v2/podcast/program/get/top-episode');
      return await this.createRequest(
        '/api/v2/podcast/program/get/top-episode',
        {
          sig,
        }
      );
    } catch (err) {
      throw err;
    }
  }

  public async getUrl(podcastId: string): Promise<any> {
    try {
      const sig = this.createIdSig(
        '/api/v2/podcast/episode/get/streaming',
        podcastId
      );
      return await this.createRequest('/api/v2/podcast/episode/get/streaming', {
        id: podcastId,
        sig,
      });
    } catch (error) {
      throw error;
    }
  }

  public async getCurrentMedia(podcastId: string): Promise<any> {
    try {
      const sig = this.createIdSig(
        '/api/v2/livestream/program/get/detail',
        podcastId
      );
      return await this.createRequest('/api/v2/livestream/program/get/detail', {
        id: podcastId,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getDetail(podcastId: string): Promise<any> {
    try {
      const sig = this.createIdSig('/api/v2/livestream/get/info', podcastId);
      return await this.createRequest('/api/v2/livestream/get/info', {
        id: podcastId,
        sig,
      });
    } catch (error) {
      throw error;
    }
  }

  public async getComments(podcastId: string): Promise<any> {
    try {
      const sig = this.createCommentSig(
        '/api/v2/download/livestream/get/comments',
        podcastId
      );
      return await this.createRequest(
        '/api/v2/download/livestream/get/comments',
        {
          id: podcastId,
          sig,
          count: 50,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  public async getAll(): Promise<any> {
    try {
      const sig = this.createPodcastSig(
        '/api/v2/livestream/get/list',
        'promote'
      );
      return await this.createRequest('/api/v2/livestream/get/list', {
        type: 'promote',
        count: 20,
        sig,
        page: 1,
      });
    } catch (error) {
      throw error;
    }
  }
}
