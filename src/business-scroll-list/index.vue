<template>
  <div class="ScrollList" ref="ScrollList">
    <div class="_wrap">
      <ul class="flex-col _page _page_before">
        <li
          v-for="(item, index) in page1Data"
          :key="'_page_item' + index"
          class="_item flex-1"
        >
          <slot :row="item" :isCur="index === (canMoveOn ? 0 : currentIndex)">{{
            item.dutyUnit
          }}</slot>
        </li>
      </ul>
      <ul class="flex-col _page _page_after">
        <li
          v-for="(item, index) in page2Data"
          :key="'_page2_item' + index"
          class="_item flex-1"
          :class="[index % 2 === 0 ? 'odd' : 'even']"
        >
          <slot :row="item">{{ item.dutyUnit }}</slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// TODO
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
  name: 'business-scroll-list',
  props: {
    list: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    rows: {
      type: Number,
      default: 10,
    },
    defaultIndex: {
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
    repeatFill: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      itemHeight: 0,
      currentIndex: 0,
      timehandler: null,
      page1Data: [],
      page2Data: [],
      canMoveOn: true,
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
        this.moveOn();
      }
    },
  },
  methods: {
    setPageData() {
      // 第一页
      this.page1Data = getPageData(this.currentIndex, this.rows, this.list);
      // 下一页
      const nextPageIndex = (this.currentIndex + this.rows) % this.list.length;
      this.page2Data = getPageData(nextPageIndex, this.rows, this.list);
      // 强制刷新
      this.$forceUpdate();
    },
    moveOn() {
      const wrapDom = this.$refs.ScrollList.querySelector('._wrap');
      if (wrapDom) {
        // transition: all ease 0.5s
        wrapDom.style.transition = `all ease ${this.duration}ms`;
        wrapDom.style.transform = `translateY(-${this.itemHeight}px)`;
      } else {
        console.warn('找不到 wrapDom');
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
      if (this.rows > this.list.length && !this.repeatFill) {
        this.canMoveOn = false;
        console.log('scrooList: 数据不足，无法滚动');
        this.page1Data = this.list;
      } else {
        this.setPageData();
      }

      // 获取元素高度
      this.$nextTick(() => {
        const itemDom =
          this.$refs.ScrollList.querySelector(`._page_before ._item`);
        if (itemDom) {
          console.log(itemDom, itemDom.offsetHeight);
          this.itemHeight = itemDom.offsetHeight;
        } else {
          console.warn(`找不到 ._item 元素`);
        }
      });
      // 设置定时器
      if (this.canMoveOn && this.interval) {
        this.timehandler = setInterval(() => {
          if (this.currentIndex < this.list.length - 1) {
            this.currentIndex++;
          } else {
            this.currentIndex = 0;
          }
        }, this.interval);
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
}

.ScrollList ._item {
  transition: all ease 0.3s;
}
</style>
