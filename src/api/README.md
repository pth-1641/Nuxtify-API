# Nuxtify API

Lightweight music API for client without third-party libraries.

## ⚠️ API from [ZingMP3](https://zingmp3.vn)

## Usage

## **Home**

```ts
path: '/home';
```

## **Top 100**

```ts
path: '/top100';
```

## **Genres**

```ts
path: '/genres';
```

## **Artist**

```ts
// alias: string
path: '/artist/:alias';
```

## **Playlist**

```ts
// id: string
path: '/playlist/:id';
```

## **Song**

### _Lyrics_

```ts
// id: string
path: '/song/lyrics/:id';
```

### _Song URL_

```ts
// id: string
path: '/song/url/:id';
```

### _Song Detail_

```ts
// id: string
path: '/song/detail/:id';
```

## **Chart**

### _Home Chart_

```ts
path: '/chảrt/home';
```

### _New Release Chart_

```ts
path: '/chảrt/new-release';
```

### _Week Chart_

```ts
// nation: 'vn' | 'kr' | 'us'
// week: number (option)
// year: number (option)
path: `/chảrt/weekly?nation=${nation}&week=${week}&year=${year}`;
```

## **Video**

### _Video Detail_

> videoId: string

```ts
// id: string
path: '/video/detail/:id';
```

### _Related Videos_

```ts
// id: string
path: '/video/related/:id';
```

## **Search**

### _All Result_

```ts
// q: string
path: `/search?q=${q}`;
```

### _Result by type_

```ts
// q: string
// type: song | playlist | artist | video
// page: number (option)
path: `/search/type?q=${q}&type=${type}`;
```

### _Suggestion_

```ts
// q: string
path: `/search/suggestion?q=${q}`;
```

### _Recommend Keyword_

```ts
path: `/search/recommend`;
```

## **Podcast**

### _Podcast_

```ts
path: `/podcast`;
```

### _Home Podcast_

```ts
path: `/podcast/home`;
```

### _Top Podcast_

```ts
path: `/podcast/top`;
```

### _Podcast URL_

```ts
// id: string
path: `/podcast/url/:id`;
```

### _Podcast Media_

```ts
// id: string
path: `/podcast/url/:id`;
```

### _Podcast Detail_

```ts
// id: string
path: `/podcast/detail/:id`;
```

### _Podcast Comments_

```ts
// id: string
path: `/podcast/comments/:id`;
```
