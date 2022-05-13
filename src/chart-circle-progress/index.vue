<template>
  <div ref="CircleProgress"></div>
</template>

<script>
// TODO
import * as echarts from 'echarts';

export default {
  name: 'chart-circle-progress',
  props: {
    percentage: {
      type: Number,
      required: false,
      default: 0,
    },
    color: {
      type: String,
      default: '#FF974C',
    },
    reverseColor: {
      type: String,
      default: 'rgba(255,255,255,0.2)',
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
  methods: {
    draw() {
      const data = this.percentage;

      let option = {
        title: {
          text: `${data}%`, //主标题文本
          left: 'center',
          top: 'center',
          textStyle: {
            fontWeight: 'normal',
            fontSize: Math.max(16, 45 - this.strokeWidth),
            fontFamily: 'impact-2',
            color: this.textColor || this.color,
          },
        },
        series: [
          {
            name: 'Access From',
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
                value: data,
                name: 'Progress',
                itemStyle: {
                  color: this.color,
                },
              },
              {
                value: 100 - data,
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
  mounted() {
    // 图表实例化
    this.Chart = echarts.init(this.$refs.CircleProgress);
  },
};
</script>

<style scoped></style>
