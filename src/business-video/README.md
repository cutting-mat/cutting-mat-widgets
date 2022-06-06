# BusinessVideo 视频播放器

### 介绍

BusinessVideo 是一个 HTML5 视频播放器

### 引入

```js
import Vue from 'vue';
import { BusinessVideo } from '@cutting-mat/widgets';

Vue.component('video-player', BusinessVideo);
```

## 代码演示

### 基础用法

```html
<video-player
  @ready="player => player.src({
        src: 'https://static.refined-x.com/static/1080p-watermark.mp4',
        type: 'video/mp4',
    })"
/>
```

## API

### Props

| 参数           | 说明                                                           | 类型      | 默认值 |
| -------------- | -------------------------------------------------------------- | --------- | ------ |
| options        | videojs 配置，官方文档：https://videojs.com/getting-started    | _Object_  | `-`    |
| seekAble       | 是否可以拖拽快进                                               | _Boolean_ | `true` |
| subscribeTimes | 监听一组播放进度，通过 `timeUp` 事件回调，示例：`[{time: 10}]` | _Array_   | `[]`   |

### Events

| 事件名 | 说明                                         | 回调参数                        |
| ------ | -------------------------------------------- | ------------------------------- |
| ready  | 播放器就绪                                   | player: videojs 实例            |
| play   | 开始播放                                     | 无                              |
| pause  | 暂停播放                                     | 无                              |
| ended  | 结束播放                                     | 无                              |
| timeUp | 到达监听的播放进度，配合`subscribeTimes`使用 | Object: subscribeTimes 数据对象 |

### Slots

| 名称 | 说明 |
| ---- | ---- |
| 无   | ``   |
