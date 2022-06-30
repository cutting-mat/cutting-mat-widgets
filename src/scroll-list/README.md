# ScrollList 滚动列表

### 介绍

ScrollList 可以快捷展示一个纵向滚动的列表

### 引入

```js
import Vue from 'vue';
import { ScrollList } from '@cutting-mat/widgets';

Vue.component('scroll-list', ScrollList);
```

## 代码演示

### 基础用法

```html
<!-- 需要定义组件高度 -->
<scroll-list style="height: 300px" :list="[1, 2, 3, 4, 5]">
  <template slot="default" slot-scope="scope">
    data: {{ scope.row }} isCur: {{ scope.isCur }}
  </template>
</scroll-list>
```

## API

### Props

| 参数           | 说明                   | 类型      | 默认值  |
| -------------- | ---------------------- | --------- | ------- |
| list           | 显示的数据             | _Array_   | `[]`    |
| pageSize       | 列表展示的条数         | _Number_  | `10`    |
| defaultIndex   | 从哪一条开始展示       | _Number_  | `0`     |
| interval       | 动画间隔 ms            | _Number_  | `4000`  |
| duration       | 动画时长 ms            | _Number_  | `500`   |
| loop           | 数据不足时循环加载数据 | _Boolean_ | `true`  |
| pauseOnMousein | 鼠标进入时暂停         | _Boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数            |
| ------ | ---- | ------------------- |
| -      | -    | _event: MouseEvent_ |

### Slots

| 名称 | 说明 |
| ---- | ---- |
| -    | -    |
