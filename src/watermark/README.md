# 水印组件

### 介绍

Watermark 组件可以方便的生成前端水印

### 引入

```js
import Vue from 'vue';
import { Watermark } from '@cutting-mat/widgets';

Vue.component('watermark', Watermark);
```

## 代码演示

### 基础用法

```html
<watermark />
```

## API

### Props

| 参数            | 说明                                                                  | 类型      | 默认值          |
| --------------- | --------------------------------------------------------------------- | --------- | --------------- |
| target          | 要加水印的 DOM 元素，默认当前组件父元素                               | _DOM_     | `el.parentNode` |
| targetImage     | 要加水印的 图片 src，与`target`同时设置优先级高于`target`             | _string_  | -               |
| wmText          | 文字水印的内容                                                        | _string_  | `"水印文字"`    |
| position        | 水印位置，将`target`元素平分成九宫格，并用数字 1~9 指代               | _number_  | `9`             |
| paddingX        | 水平方向上水印与元素边界的距离，`position`为`5`时无效                 | _number_  | `10`            |
| paddingY        | 垂直方向上水印与元素边界的距离，`position`为`5`时无效                 | _number_  | `10`            |
| angle           | 水印旋转角度                                                          | _number_  | `0`             |
| fontSize        | 文字水印字号                                                          | _number_  | `16`            |
| fontFamily      | 文字水印的字体                                                        | _string_  | `serif`         |
| color           | 文字水印颜色                                                          | _string_  | `#000`          |
| strokeColor     | 文字描边颜色，默认无描边                                              | _string_  | -               |
| opacity         | 水印透明度，取值 0~1 之间                                             | _number_  | `0.3`           |
| repeat          | 水印是否重复平铺                                                      | _Boolean_ | `false`         |
| repeatWidth     | 重复平铺的单元宽度，与`repeat`配合使用调整水印密度                    | _number_  | `180`           |
| repeatHeight    | 重复平铺的单元高度，与`repeat`配合使用调整水印密度                    | _number_  | `180`           |
| wmImage         | 图片水印的 src，与`wmText`同时设置时优先级高于`wmText`                | _string_  | -               |
| wmImageWidth    | 图片水印的绘制宽度，超出尺寸将自动等比缩放                            | _number_  | `180`           |
| wmImageHeight   | 图片水印的绘制高度，超出尺寸将自动等比缩放                            | _number_  | `180`           |
| dynamic         | 设置动态水印展示                                                      | _Boolean_ | `false`         |
| dynamicDuration | 动态水印显示时长，与`dynamic`配合使用                                 | _number_  | `2000`          |
| dynamicDelay    | 动态水印延迟显示时长，与`dynamic`配合使用                             | _number_  | `2000`          |
| dynamicPosition | 随机位置，开启后`position`设置将失效；可配合`dynamic`实现动态随机位置 | _Boolean_ | `false`         |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |

### Slots

| 名称 | 说明 |
| ---- | ---- |
