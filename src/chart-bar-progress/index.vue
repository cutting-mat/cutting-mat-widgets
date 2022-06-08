<template>
  <div class="BarProgress">
    <slot name="default" />
    <div class="_bar" :style="wrapStyle">
      <div class="_p" :style="progressStyle">
        <div
          v-if="labelType == 3"
          :class="['_label', '_label_' + labelType]"
          :style="labelStyle"
        >
          <span class="_text"> {{ percentage }}% </span>
        </div>
      </div>
    </div>
    <slot name="value">
      <div
        v-if="labelType != 3"
        :class="['_label', '_label_' + labelType]"
        :style="labelStyle"
      >
        <span class="_text"> {{ percentage }}% </span>
      </div>
    </slot>
  </div>
</template>

<script>
// TODO
export default {
  name: 'bar-progress',
  props: {
    percentage: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    color: {
      type: String,
      default: '#3ed7f5',
    },
    reverseColor: {
      type: String,
      default: 'rgba(255,255,255,0.2)',
    },
    strokeWidth: {
      type: Number,
      default: 14,
    },
    borderRadius: {
      type: Number,
    },
    labelType: {
      // label类型 1: 右上,2：右,3：跟随
      type: [Number, String],
      default: '1',
    },
    labelColor: {
      type: String,
      required: false,
      default: '#3ed7f5',
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
        background: `${Number(this.labelType) === 3 ? this.labelColor : ''}`,
        color: `${this.labelColor}`,
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
.BarProgress ._label {
  width: 3em;
  padding: 0 0.4em;
  text-align: center;
}

/* 右上 */
.BarProgress ._label_1 {
  position: absolute;
  bottom: 100%;
  right: 0;
  line-height: 1.7;
  background: none !important;
}
/* 跟随 */
.BarProgress ._label_3 {
  position: absolute;
  bottom: 100%;
  margin-bottom: 8px;
  left: 100%;
  line-height: 1.7;
  border-radius: 4px;
  transform: translateX(-50%);
  width: auto;
}
.BarProgress ._label_3::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -8px;
  margin-top: -2px;
  width: 0;
  height: 0;
  border: 8px solid;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.BarProgress ._label_3 ._text {
  color: #fff;
}
</style>
