<template>
  <div :id="domID"></div>
</template>

<script>
/**
 * 波形图音频播放器
 * */
import { domId } from '../__support/util.js';

export default {
  name: `AudioPlayer`,
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    seekAble: {
      type: Boolean,
      default: true,
    },
    subscribeTimes: {
      type: Array,
      default() {
        /** item format:
         * {
         *   time: Number(s)
         * }
         * */
        return [];
      },
    },
  },
  emits: ['ready', 'ended', 'pause', 'play', 'timeUp'],
  data() {
    return {
      domID: domId(),
      player: null,
      currentTime: 0,
    };
  },
  computed: {
    timeListeners() {
      return this.subscribeTimes.map((item) => {
        return { ...item, pass: item.time < this.currentTime };
      });
    },
    timeTarget() {
      return this.timeListeners.filter((item) => !item.pass)[0];
    },
  },
  mounted() {},
  beforeDestroy() {
    if (this.player) {
      this.player.destroy();
    }
  },
};
</script>

<style lang="less"></style>
