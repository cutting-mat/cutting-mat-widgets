# CircleProgress 按钮

### 介绍

CircleProgress 是一个环形进度条

### 引入

```js
import Vue from 'vue';
import { CircleProgress } from '@cutting-mat/widgets';

Vue.component('circle-progress', CircleProgress);
```

## 代码演示

### 基础用法

```html
<circle-progress :percentage="50" />
```

## API

### Props

| 参数         | 说明                            | 类型            | 默认值                  |
| ------------ | ------------------------------- | --------------- | ----------------------- |
| percentage   | 进度百分比                      | _string,number_ | `0`                     |
| color        | 进度条颜色                      | _string_        | '#3ed7f5'               |
| reverseColor | 进度条底色                      | _string_        | 'rgba(255,255,255,0.1)' |
| strokeWidth  | 进度条宽度                      | _number_        | `25`                    |
| text         | 中心文字                        | _string_        | -                       |
| textColor    | 中心文字颜色，默认与`color`一致 | _string_        | `this.color`            |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |

### Slots

| 名称 | 说明 |
| ---- | ---- |
