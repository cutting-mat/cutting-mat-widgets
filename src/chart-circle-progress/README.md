# ChartCircleProgress 按钮

### 介绍

ChartCircleProgress 是一个环形进度条

### 引入

```js
import Vue from 'vue';
import { ChartCircleProgress } from '@cutting-mat/widgets';

Vue.component('circle-progress', ChartCircleProgress);
```

## 代码演示

### 基础用法

```html
<circle-progress :percentage="50" />
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| type          | 按钮类型 | _string_ | `primary` |
| color `1.0.0` | 按钮颜色 | _string_ | -         |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
