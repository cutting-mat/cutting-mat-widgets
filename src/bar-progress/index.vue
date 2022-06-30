<template>
  <div class="BarProgress">
    <div class="_bar" :style="wrapStyle">
      <div class="_p" :style="progressStyle">
        <div v-if="withLabel" class="_label" :style="labelStyle">
          <span class="_t"> {{ percentage }}% </span>
        </div>
        <div v-else-if="withText" class="_text">
          <span class="_t"> {{ percentage }}% </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 调试开关
const DEBUG = process.env.NODE_ENV === 'development';

export default {
  name: 'BarProgress',
  props: {
    percentage: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    color: {
      type: String,
      default: '#4fc08d',
    },
    reverseColor: {
      type: String,
      default: 'rgba(0,0,0,0.1)',
    },
    strokeWidth: {
      type: Number,
      default: 14,
    },
    borderRadius: {
      type: Number,
    },
    withLabel: {
      type: Boolean,
      default: false,
    },
    withText: {
      type: Boolean,
      default: false,
    },
    duration: {
      // 动画时长
      type: Number,
      default: 1500,
    },
  },
  data() {
    return {};
  },
  computed: {
    wrapStyle() {
      return {
        height: `${this.strokeWidth}px`,
        lineHeight: `${this.strokeWidth}px`,
        borderRadius: `${
          this.borderRadius === undefined
            ? this.strokeWidth / 2
            : this.borderRadius
        }px`,
        background: `${this.reverseColor}`,
      };
    },
    progressStyle() {
      return {
        background: `${this.color}`,
        borderRadius: `${
          this.borderRadius === undefined
            ? this.strokeWidth / 2
            : this.borderRadius
        }px`,
        transition: `all ease ${this.duration}ms`,
        width: `${this.percentage}%`,
      };
    },
    labelStyle() {
      return {
        background: `${this.color}`,
        color: `${this.color}`,
      };
    },
  },
};
</script>

<style scoped>
.BarProgress {
  position: relative;
  overflow: visible;
  display: flex;
  align-items: center;
}
.BarProgress ._bar {
  flex: 1;
}
.BarProgress ._p {
  position: relative;
  float: left;
  height: 100%;
  width: 0;
}
/* label */
.BarProgress ._label {
  position: absolute;
  bottom: 100%;
  margin-bottom: 8px;
  left: 100%;
  padding: 0 0.5em;
  border-radius: 4px;
  transform: translateX(-50%);
  font-size: 12px;
  height: 1.8em;
  line-height: 1.8em;
}
.BarProgress ._label::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -6px;
  margin-top: -1px;
  width: 0;
  height: 0;
  border: 6px solid;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.BarProgress ._t {
  color: #fff;
}
/* text */
.BarProgress ._text {
  position: absolute;
  right: 0;
  padding: 0 0.5em;
  font-size: 12px;
}
</style>
