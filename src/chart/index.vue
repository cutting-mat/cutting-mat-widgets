<template>
  <div :id="domid" class="widget-chart"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

// 全局色表
import { colors } from '../__support/variate.js';
import { datasetTrans, domId } from '../__support/util.js';

echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
]);

export default {
  name: 'Chart',
  props: {
    data: {
      type: Array,
      required: true,
      default() {
        /**
         * 统一图表格式
         * [{
         *   label: [],
         *   value: []
         * }]
         *
         * * */
        return [];
      },
    },
    colors: {
      type: Array,
      require: false,
      default() {
        /**
         * 色表
         * [[c1,c2],...]
         * [c1,...]
         * * */
        return colors;
      },
    },
    legend: {
      type: Array,
      required: false,
      default() {
        /**
         * 图例名称
         * [name1,name2,...]
         * * */
        return [];
      },
    },
    stack: {
      type: Boolean,
      require: false,
      default() {
        /**
         * 是否堆叠
         *
         * * */
        return false;
      },
    },
    radius: {
      type: Number,
      require: false,
      default() {
        /**
         * 柱状图圆角
         *
         * * */
        return 2;
      },
    },
    axisColor: {
      /**
       * 坐标轴相关颜色
       * * */
      type: String,
      require: false,
      default: () => '#000',
    },
    chartType: {
      type: String,
      require: false,
      default: () => 'bar',
    },
  },
  data() {
    return {
      domid: domId(),
      chartObj: null,
      sourceData: null,
    };
  },
  computed: {
    computedStack() {
      return this.stack ? domId('computedStack') : null;
    },
  },
  watch: {
    data: {
      handler() {
        if (Array.isArray(this.data) && this.data.length > 0) {
          this.render(this.data);
        }
      },
      deep: true,
    },
  },
  created() {
    // 预先转换数据格式
    this.sourceData = datasetTrans(this.data, this.legend);
  },
  mounted() {
    if (this.chartObj) {
      this.chartObj.dispose();
    }
    this.chartObj = echarts.init(document.getElementById(this.domid));
    if (Array.isArray(this.data) && this.data.length > 0) {
      this.render(this.data);
    }
  },
  methods: {
    getSeries() {
      /**
       * 生成series
       * name：匹配对应序号的legend值
       * stack：自动生成堆叠名
       * barWidth：固定16
       * itemStyle.color：长度为2的数组自动转成渐变色
       * * */
      const propChartType = this.chartType.split(',');
      const chartTypeArr = this.data.map((e, i) => {
        return propChartType[i] || 'bar';
      });

      return chartTypeArr.map((item, index) => {
        let result;
        if (item === 'line') {
          // 折线图
          const lineColor = Array.isArray(this.colors[index])
            ? this.colors[index][0]
            : this.colors[index] || this.colors[0];

          result = {
            name: this.sourceData[0].slice(1)[index],
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 2,
              type: 'solid',
              color: lineColor,
            },
            itemStyle: {
              color: lineColor,
            },
          };
          if (
            Array.isArray(this.colors[index]) &&
            this.colors[index].length === 3
          ) {
            result.areaStyle = {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: this.colors[index][0], // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: this.colors[index][1], // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            };
          }
        } else if (item === 'bar') {
          // 柱状图
          const theColor =
            Array.isArray(this.colors[index]) && this.colors[index].length === 2
              ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: this.colors[index][0] },
                  { offset: 1, color: this.colors[index][1] },
                ])
              : this.colors[index] || '#5CA4F8';
          result = {
            name: this.sourceData[0].slice(1)[index],
            type: item,
            stack: item === 'bar' ? this.computedStack : null,
            barWidth: 16,
            itemStyle: {
              borderRadius: this.radius,
              color: theColor,
            },
          };
        }
        // console.log(result)
        return result;
      });
    },
    render() {
      const option = {
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          top: '50',
          left: '50',
          bottom: '50',
          right: '30',
        },
        legend: {
          show: !!this.legend.length,
          data: this.sourceData[0].slice(1),
          right: '5%',
          top: 10,
          selectedMode: false,
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              show: true,
              lineStyle: {
                color: this.axisColor,
                opacity: 0.45,
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: this.axisColor,
              opacity: 0.45,
              fontSize: 12,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: this.axisColor,
              opacity: 0.45,
              fontSize: 12,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                color: this.axisColor,
                opacity: 0.15,
              },
            },
          },
        ],
        dataset: {
          source: this.sourceData,
        },
        series: this.getSeries(),
      };
      // console.log(option);
      this.chartObj.setOption(option);
    },
  },
};
</script>

<style scoped>
.widget-chart {
  width: 100%;
  height: 100%;
}
</style>
