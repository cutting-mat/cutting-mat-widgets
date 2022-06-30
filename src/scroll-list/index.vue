<template>
  <div
    class="ScrollList"
    ref="ScrollList"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <div class="_wrap">
      <ul class="_page _page_before">
        <li
          v-for="(item, index) in page1Data"
          :key="'_page_item' + index"
          class="_item"
        >
          <slot :row="item" :isCur="index === (canMoveOn ? 0 : currentIndex)">{{
            item
          }}</slot>
        </li>
      </ul>
      <ul class="_page _page_after">
        <li
          v-for="(item, index) in page2Data"
          :key="'_page2_item' + index"
          class="_item"
          :class="[index % 2 === 0 ? 'odd' : 'even']"
        >
          <slot name="default" :row="item">{{ item }}</slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 调试开关
const DEBUG = process.env.NODE_ENV === 'development';

// 数据填充
const getPageData = function (currentIndex, totalCount, list) {
  let result = [];

  const DataFiller = (start, count, dataList) => {
    result = result.concat(dataList.slice(start, start + count));
    // 差距
    const disparityNum = totalCount - result.length;
    if (disparityNum > 0) {
      DataFiller(0, disparityNum, dataList);
    }
  };

  DataFiller(currentIndex, totalCount, list);

  return result;
};

export default {
  name: 'ScrollList',
  props: {
    list: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    pageSize: {
      // 展示条数
      type: Number,
      default: 10,
    },
    defaultIndex: {
      // 默认展示第几条
      type: Number,
      default: 0,
    },
    interval: {
      type: Number,
      default: 4000,
    },
    duration: {
      type: Number,
      default: 500,
    },
    loop: {
      // 列表是否循环
      type: Boolean,
      default: true,
    },
    pauseOnMousein: {
      // 鼠标进入时暂停
      type: Boolean,
      default: false,
    },
  },
  emits: ['animateEnd'],
  data() {
    return {
      itemHeight: 0,
      currentIndex: 0,
      timehandler: null,
      page1Data: [],
      page2Data: [],
      canMoveOn: true,
      mouseenterTime: 0,
    };
  },
  watch: {
    defaultIndex: {
      handler() {
        this.currentIndex = this.defaultIndex;
      },
      immediate: true,
    },
    list: {
      handler() {
        if (this.list.length && !this.itemHeight) {
          this.init();
        }
      },
      immediate: true,
    },
    currentIndex() {
      if (this.canMoveOn) {
        this.moveAnimate();
      }
    },
  },
  methods: {
    setPageData() {
      // 第一页
      this.page1Data = getPageData(this.currentIndex, this.pageSize, this.list);
      // 下一页
      const nextPageIndex =
        (this.currentIndex + this.pageSize) % this.list.length;
      this.page2Data = getPageData(nextPageIndex, this.pageSize, this.list);
    },
    moveAnimate() {
      const wrapDom = this.$refs.ScrollList.querySelector('._wrap');
      if (wrapDom) {
        // transition: all ease 0.5s
        wrapDom.style.transition = `all ease ${this.duration}ms`;
        wrapDom.style.transform = `translateY(-${this.itemHeight}px)`;
      } else {
        DEBUG && console.warn('找不到 wrapDom');
      }
      setTimeout(() => {
        this.setPageData();

        wrapDom.style.transition = `none`;
        wrapDom.style.transform = ``;
        // 回调事件
        this.$emit('animateEnd', this.page1Data);
      }, this.duration);
    },
    init() {
      // 初始数据
      if (this.pageSize > this.list.length && !this.loop) {
        this.canMoveOn = false;
        DEBUG && console.log('scrooList: 数据不足，无法滚动');
        this.page1Data = this.list;
      } else {
        this.setPageData();
      }

      // 获取元素高度
      this.$nextTick(() => {
        const itemDom =
          this.$refs.ScrollList.querySelector(`._page_before ._item`);
        if (itemDom) {
          DEBUG && console.log(`itemDom高度`, itemDom.offsetHeight);
          this.itemHeight = itemDom.offsetHeight;
        } else {
          DEBUG && console.warn(`找不到 ._item 元素`);
        }
      });
      // 开始
      this.moveOn();
    },
    moveOn() {
      if (this.canMoveOn && this.interval) {
        if (this.currentIndex < this.list.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
        this.timehandler = setTimeout(this.moveOn, this.interval);
      }
    },
    moveOnStop() {
      if (this.timehandler) {
        this.timehandler = clearTimeout(this.timehandler);
      }
    },
    handleMouseenter() {
      if (this.pauseOnMousein) {
        this.mouseenterTime = new Date().getTime();
        this.moveOnStop();
      }
    },
    handleMouseleave() {
      if (this.pauseOnMousein) {
        const timesGone = new Date().getTime() - this.mouseenterTime;
        const timesLeft = this.interval - timesGone;
        setTimeout(this.moveOn, Math.max(timesLeft, 0));
      }
    },
  },
};
</script>

<style scoped>
.ScrollList {
  overflow: hidden;
}
.ScrollList ._wrap {
  height: 200%;
}
.ScrollList ._page {
  height: 50%;
  display: flex;
  flex-direction: column;
}
.ScrollList ._item {
  flex: 1;
}
</style>
