import { Base } from '../base';

type SearchType = {
  q: string;
  type: 'song' | 'playlist' | 'artist' | 'video';
  page?: number;
};

export class Search extends Base {
  public async getResult(q: string): Promise<any> {
    try {
      if (!q.trim()) throw new Error('Invalid query string');
      const sig = this.createNoIdSig('/api/v2/search/multi');
      return await this.createRequest('/api/v2/search/multi', {
        q,
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getResultByType(params: SearchType): Promise<any> {
    try {
      const { q, type, page = 1 } = params;
      if (!q.trim()) throw new Error('Invalid query string');
      if (!['song', 'playlist', 'artist', 'video'].includes(type)) {
        throw new Error('Invalid type');
      }

      const sig = this.createSearchSig('/api/v2/search', type, page);
      return await this.createRequest('/api/v2/search', {
        q,
        sig,
        type,
        count: 20,
        page,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getRecommendKeyword(): Promise<any> {
    try {
      const sig = this.createNoIdSig('/api/v2/app/get/recommend-keyword');
      return await this.createRequest('/api/v2/app/get/recommend-keyword', {
        sig,
      });
    } catch (err) {
      throw err;
    }
  }

  public async getSuggestion(query: string): Promise<any> {
    try {
      const sig = this.createNoIdSig('/v1/web/ac-suggestions');
      const res = await fetch(
        'https://ac.zingmp3.vn/v1/web/ac-suggestions?' +
          new URLSearchParams({
            sig,
            query,
            language: 'vi',
            num: '10',
          })
      );
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  }
}
