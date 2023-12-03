# Nuxtify API

Lightweight music API for client without third-party libraries.

## ⚠️ API from [ZingMP3](https://zingmp3.vn)

## Installation

```bash
npm i nuxtify-api
#or
yarn add nuxtify-api
```

```bash
import { Nuxtify } from "nuxtify-api"
#or
const { Nuxtify } = require("nuxtify-api")
```

## Usage

## **Home**

```ts
Nuxtify.getHome();
```

## **Top 100**

```ts
Nuxtify.getTop100();
```

## **Genres**

```ts
Nuxtify.getGenres();
```

## **Artist**

```ts
// alias: string
Nuxtify.getArtist('Alan-Walker');
```

## **Playlist**

```ts
// id: string
Nuxtify.getPlaylist('6B8E67CU');
```

## **Song**

### _Lyrics_

```ts
// id: string
Nuxtify.song.getLyrics('Z6709W0Z');
```

### _Song URL_

```ts
// id: string
Nuxtify.song.getUrl('Z6709W0Z');
```

### _Song Detail_

```ts
// id: string
Nuxtify.song.getDetail('Z6709W0Z');
```

## **Chart**

### _Home Chart_

```ts
Nuxtify.chart.getHome();
```

### _New Release Chart_

```ts
Nuxtify.chart.getNewRelease();
```

### _Week Chart_

```ts
// nation: 'vn' | 'kr' | 'us'
// week: number (option)
// year: number (option)
Nuxtify.chart.getWeekly({
  nation: 'vn',
  week: 10,
  year: 2023,
});
```

## **Video**

### _Video Detail_

```ts
// id: string
Nuxtify.video.getDetail('ZWABOA0F');
```

### _Related Videos_

```ts
// id: string
Nuxtify.video.getRelatedVideos('ZWABOA0F');
```

## **Search**

### _All Result_

```ts
// q: string
Nuxtify.search.getResult('faded');
```

### _Result by type_

```ts
// q: string
// type: 'video' | 'song' | 'artist' | 'playlist'
// page: number (option)
Nuxtify.search.getResultByType({
  q: 'faded',
  type: 'song',
  page: 1,
});
```

### _Suggestion_

```ts
Nuxtify.search.getSuggestion('faded');
```

### _Recommend Keyword_

```ts
Nuxtify.search.getRecommendKeyword();
```

## **Podcast**

### _All Podcast_

```ts
Nuxtify.podcast.getAll();
```

### _Home Podcast_

```ts
Nuxtify.podcast.getHome();
```

### _Top Podcast_

```ts
Nuxtify.podcast.getTop();
```

### _Podcast URL_

```ts
// id: string
Nuxtify.podcast.getUrl('Z6AFI0IZ');
```

### _Current Playing_

```ts
// id: string
Nuxtify.podcast.getCurrentMedia('Z6AFI0IZ');
```

### _Podcast Detail_

```ts
// id: string
Nuxtify.podcast.getDetail('Z6AFI0IZ');
```

### _Podcast Comments_

```ts
// id: string
Nuxtify.podcast.getComments('Z6AFI0IZ');
```
