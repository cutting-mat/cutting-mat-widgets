# BaseWatermark 水印组件

### 介绍

BaseWatermark 是水印组件

### 引入

```js
import Vue from 'vue';
import { BaseWatermark } from '@cutting-mat/widgets';

Vue.component('watermark', BaseWatermark);
```

## 代码演示

### 基础用法

```html
<watermark />
```

## API

### Props

| 参数          | 说明                                                    | 类型      | 默认值          |
| ------------- | ------------------------------------------------------- | --------- | --------------- |
| target        | 添加水印的 DOM 元素，默认组件父元素                     | _DOM_     | `el.parentNode` |
| wmText        | 文字水印的内容                                          | _string_  | `"水印文字"`    |
| position      | 水印位置，将`target`元素平分成九宫格，并用数字 1~9 指代 | _number_  | `9`             |
| paddingX      | 水平方向上水印与元素边界的距离，`position`为`5`时无效   | _number_  | `10`            |
| paddingY      | 垂直方向上水印与元素边界的距离 ，`position`为`5`时无效  | _number_  | `10`            |
| angle         | 水印旋转角度                                            | _number_  | `0`             |
| fontSize      | 文字水印字号                                            | _number_  | `16`            |
| color         | 文字水印颜色                                            | _string_  | `#000`          |
| opacity       | 水印透明度，取值 0~1 之间                               | _number_  | `0.3`           |
| repeat        | 水印是否重复平铺                                        | _Boolean_ | `false`         |
| repeatWidth   | 重复平铺的单元宽度                                      | _number_  | `180`           |
| repeatHeight  | 重复平铺的单元高度                                      | _number_  | `180`           |
| wmImage       | 图片水印的 src，与`wmText`同时设置时优先级高于`wmText`  | _string_  | -               |
| wmImageWidth  | 图片水印的绘制宽度                                      | _number_  | `180`           |
| wmImageHeight | 图片水印的绘制高度                                      | _number_  | `180`           |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |

### Slots

| 名称 | 说明 |
| ---- | ---- |
