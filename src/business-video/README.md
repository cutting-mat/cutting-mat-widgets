# 视频播放器

### 介绍

一个 HTML5 视频播放器

### 引入

```js
import Vue from 'vue';
import { VideoPlayer } from '@cutting-mat/widgets';

Vue.component('video-player', VideoPlayer);
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

| 参数                  | 说明                                                                                               | 类型      | 默认值 |
| --------------------- | -------------------------------------------------------------------------------------------------- | --------- | ------ |
| options               | videojs 配置，官方文档：https://videojs.com/getting-started                                        | _Object_  | `-`    |
| options.CryptoConfig  | 加密配置，详见下方**CryptoConfig**                                                                 | _Object_  | `{}`   |
| options.RequestOption | HLS 相关请求配置，可自定义请求头或参数等，实现自定义鉴权， 如: `{headers: {Authorization: '123'}}` | _Object_  | `{}`   |
| seekAble              | 是否可以拖拽快进                                                                                   | _Boolean_ | `true` |
| subscribeTimes        | 监听一组播放进度，通过 `timeUp` 事件回调，示例：`[{time: 10}]`                                     | _Array_   | `[]`   |
| watermarkConfig       | [水印组件]()配置，当`watermarkConfig.wmText`或`watermarkConfig.wmImage`有值时将添加水印            | _Object_  | `{}`   |

### CryptoConfig(加密配置)

视频加密逻辑是在 HLS 加密基础上，将 key 的内容进行私有强加密，前端播放器需要先将 key 的内容进行解密，然后才能正常播放加密后的 m3u8 视频。

| 参数         | 说明                                                       | 类型                          | 默认值             |
| ------------ | ---------------------------------------------------------- | ----------------------------- | ------------------ |
| Enable       | 开启加密                                                   | _Boolean_                     | `false`            |
| Debug        | 开启调试 log                                               | _Boolean_                     | `开发模式自动开启` |
| GetSecretKey | 获取加密密钥方法，需返回密钥字符串。支持异步(返回 Promise) | _Function()_                  | `--`               |
| DecryptData  | 解密方法，需返回解密后的内容                               | _Function(string, SecretKey)_ | `--`               |

### Events

| 事件名 | 说明                                         | 回调参数                        |
| ------ | -------------------------------------------- | ------------------------------- |
| ready  | 播放器就绪                                   | player: videojs 实例            |
| play   | 开始播放                                     | 无                              |
| pause  | 暂停播放                                     | 无                              |
| ended  | 结束播放                                     | 无                              |
| timeUp | 到达监听的播放进度，配合`subscribeTimes`使用 | Object: subscribeTimes 数据对象 |

### Methods

| 方法名         | 说明                                                                              | 参数                                            |
| -------------- | --------------------------------------------------------------------------------- | ----------------------------------------------- |
| markerPlugin   | 集成[视频打点插件](https://github.com/tower1229/videojs-plugin-marker)            | 打点配置，示例：`{markers: [{ offset: 2,}, ],}` |
| SwitcherPlugin | 集成[视频源切换插件](https://github.com/tower1229/videojs-plugin-source-switcher) | `--`                                            |
| updateSrc      | 动态配置视频源                                                                    | 详见[视频源切换插件文档]()                      |
