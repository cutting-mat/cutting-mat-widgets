<template>
  <div ref="CircleProgress"></div>
</template>

<script>
// TODO
import * as echarts from 'echarts';
// 调试开关
const DEBUG = process.env.NODE_ENV === 'development';

export default {
  name: 'CircleProgress',
  props: {
    percentage: {
      type: Number,
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
    text: {
      // 中心文字
      type: String,
      required: false,
    },
    textColor: {
      type: String,
      required: false,
    },
    strokeWidth: {
      type: Number,
      default: 25,
    },
  },
  data() {
    return {
      Chart: null,
    };
  },
  watch: {
    percentage: {
      handler() {
        this.$nextTick(() => {
          this.draw();
        });
      },
      immediate: true,
    },
  },
  mounted() {
    // 图表实例化
    this.Chart = echarts.init(this.$refs.CircleProgress);
  },
  methods: {
    draw() {
      const option = {
        title: {
          text: this.text || undefined, // 主标题文本
          left: 'center',
          top: 'center',
          textStyle: {
            fontWeight: 'normal',
            fontSize: Math.max(16, 45 - this.strokeWidth),
            color: this.textColor || this.color,
          },
        },
        series: [
          {
            type: 'pie',
            radius: [`${95 - this.strokeWidth}%`, '95%'],
            hoverAnimation: false,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            tooltip: {
              show: false,
            },
            legend: {
              show: false,
            },
            data: [
              {
                value: this.percentage,
                name: 'Progress',
                itemStyle: {
                  color: this.color,
                },
              },
              {
                value: 100 - this.percentage,
                name: '',
                itemStyle: {
                  color: this.reverseColor, // 反色
                },
              },
            ],
          },
        ],
      };

      this.Chart && this.Chart.setOption(option);
    },
  },
};
</script>

<style scoped></style>
