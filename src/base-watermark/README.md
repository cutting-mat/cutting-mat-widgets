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
