import { Base } from '../base';

export class Podcast extends Base {
  public async getPodcast(): Promise<any> {
    try {
      const sig = this.createNoIdSig('/api/v2/page/get/radio');
      return await this.createRequest('/api/v2/page/get/radio', {
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getTopPodcast(): Promise<any> {
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

  public async getPodcastUrl(podcastId: string): Promise<any> {
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

  public async getPodcastDetail(podcastId: string): Promise<any> {
    try {
      const sig = this.createIdSig('/api/v2/page/get/hub-detail', podcastId);
      return await this.createRequest('/api/v2/page/get/hub-detail', {
        id: podcastId,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getPodcastInfo(podcastId: string): Promise<any> {
    try {
      const sig = this.createIdSig(
        '/api/v2/page/get/podcast-program',
        podcastId
      );
      return await this.createRequest('/api/v2/page/get/podcast-program', {
        id: podcastId,
        sig,
      });
    } catch (error) {
      throw error;
    }
  }

  public async getPodcastPlaylist(
    podcastPlaylistId: string,
    page: number = 1
  ): Promise<any> {
    try {
      const sig = this.createPodcastSig(
        '/api/v2/podcast/episode/get/list',
        podcastPlaylistId,
        page
      );
      return await this.createRequest('/api/v2/podcast/episode/get/list', {
        id: podcastPlaylistId,
        page,
        count: 20,
        sig,
      });
    } catch (error) {
      throw error;
    }
  }

  public async getPodcastByGenre(
    genreId: string,
    page: number = 1
  ): Promise<any> {
    try {
      const sig = this.createPodcastSig(
        '/api/v2/podcast/program/get/list-by-cate',
        genreId,
        page
      );
      return await this.createRequest(
        '/api/v2/podcast/program/get/list-by-cate',
        {
          id: genreId,
          page,
          count: 20,
          sig,
        }
      );
    } catch (err) {
      throw err;
    }
  }

  public async getPodcastCategories(): Promise<any> {
    try {
      const sig = this.createNoIdSig(
        '/api/v2/podcast/program/get/podcast-categories'
      );
      return await this.createRequest(
        '/api/v2/podcast/program/get/podcast-categories',
        {
          sig,
        }
      );
    } catch (err) {
      throw err;
    }
  }

  public async getNewestPodcast(): Promise<any> {
    try {
      const sig = this.createNoIdSig(
        '/api/v2/podcast/program/get/list-by-type'
      );
      //   return await this.createRequest(
      //     '/api/v2/podcast/program/get/podcast-categories',
      //     {
      //       sig,
      //     }
      //   );
      return sig;
    } catch (err) {
      throw err;
    }
  }
}
