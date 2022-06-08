# ChartBarProgress 按钮

### 介绍

ChartBarProgress 是横向进度条组件

### 引入

```js
import Vue from 'vue';
import { ChartBarProgress } from '@cutting-mat/widgets';

Vue.component('bar-progress', ChartBarProgress);
```

## 代码演示

### 基础用法

```html
<bar-progress :percentage="50" />
```

## API

### Props

| 参数         | 说明                            | 类型            | 默认值                  |
| ------------ | ------------------------------- | --------------- | ----------------------- |
| percentage   | 进度百分比                      | _string,number_ | `0`                     |
| color        | 进度条颜色                      | _string_        | '#3ed7f5'               |
| reverseColor | 进度条底色                      | _string_        | 'rgba(255,255,255,0.2)' |
| strokeWidth  | 进度条宽度                      | _number_        | `14`                    |
| borderRadius | 进度条圆角尺寸                  | _number_        | `strokeWidth/2`         |
| labelType    | 文字样式，1: 右上,2：右,3：跟随 | _string,number_ | '1'                     |
| labelColor   | 文字颜色                        | _string_        | '#3ed7f5'               |
| duration     | 动画时长                        | _number_        | `1500`                  |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |

### Slots

| 名称    | 说明                                                               |
| ------- | ------------------------------------------------------------------ |
| default | 自定义左侧标题                                                     |
| value   | 自定义右侧文字，默认展示进度百分比，只当 labelType 不等于 3 时可用 |
