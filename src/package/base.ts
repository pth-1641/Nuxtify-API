//@ts-ignore
import { createHash, createHmac } from 'crypto';
const baseURL = 'https://zingmp3.vn';

export class Base {
  private readonly version: string;
  private readonly ctime: string;
  private readonly secretKey: string;
  private readonly apiKey: string;

  constructor(apiKey?: string, secretKey?: string) {
    this.version = '0'; // Default 0
    this.ctime = '0'; // Default 0
    this.secretKey = secretKey || 'acOrvUS15XRW2o9JksiK1KgQ6Vbds8ZW';
    this.apiKey = apiKey || 'X5BM3w8N7MKozC0B85o4KMlzLZKhV00y';
  }

  private createHash256(params: string): string {
    return createHash('sha256').update(params).digest('hex');
  }

  private createHmac512(str: string, key: string): string {
    const hmac = createHmac('sha512', key);
    return hmac.update(str).digest('hex');
  }

  private async getCookie(): Promise<any> {
    try {
      const res = await fetch(baseURL);
      const cookie = res.headers.getSetCookie().join(';');
      return cookie;
    } catch (err) {
      throw err;
    }
  }

  protected async createRequest(
    path: string,
    params: Record<string, string | number>
  ): Promise<any> {
    try {
      const cookie = await this.getCookie();
      const searchParams = new URLSearchParams({
        ...params,
        version: this.version,
        ctime: this.ctime,
        apiKey: this.apiKey,
      });
      const res = await fetch(`${baseURL + path}?${searchParams}`, {
        headers: {
          cookie,
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  }

  // Create Signature //
  protected createHomeSig(path: string): string {
    return this.createHmac512(
      path +
        this.createHash256(
          `count=30ctime=${this.ctime}page=1version=${this.version}`
        ),
      this.secretKey
    );
  }

  protected createPodcastSig(path: string, type: string): string {
    return this.createHmac512(
      path +
        this.createHash256(
          `count=20ctime=${this.ctime}page=1type=${type}version=${this.version}`
        ),
      this.secretKey
    );
  }

  protected createSearchSig(path: string, type: string, page: number): string {
    return this.createHmac512(
      path +
        this.createHash256(
          `count=20ctime=${this.ctime}page=${page}type=${type}version=${this.version}`
        ),
      this.secretKey
    );
  }

  protected createCommentSig(path: string, id: string): string {
    return this.createHmac512(
      path +
        this.createHash256(
          `count=50ctime=${this.ctime}id=${id}version=${this.version}`
        ),
      this.secretKey
    );
  }

  protected createIdSig(path: string, id: string): string {
    return this.createHmac512(
      path +
        this.createHash256(
          `ctime=${this.ctime}id=${id}version=${this.version}`
        ),
      this.secretKey
    );
  }

  protected createNoIdSig(path: string): string {
    return this.createHmac512(
      path + this.createHash256(`ctime=${this.ctime}version=${this.version}`),
      this.secretKey
    );
  }

  protected createSuggestSig(path: string): string {
    return this.createHmac512(
      path +
        this.createHash256(
          `ctime=${this.ctime}language=vinum=10version=${this.version}`
        ),
      this.secretKey
    );
  }
}
