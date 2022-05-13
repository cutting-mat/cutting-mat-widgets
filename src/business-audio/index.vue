<template>
  <div :id="domID"></div>
</template>

<script>
/**
 * 波形图音频播放器
 * base on: https://wavesurfer-js.org/docs/options.html
 * */
import { domId } from '../__support/util.js';

require('wavesurfer.js');

const { WaveSurfer } = window;

export default {
  name: `audio-player`,
  emits: ['ready', 'ended', 'pause', 'play', 'timeUp'],
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
  mounted() {
    // 默认配置
    const options = {
      container: `#${this.domID}`,
      backend: 'MediaElement',
      progressColor: '#A8DBA8',
      mediaControls: true,
      height: 64,
      ...this.options,
    };

    const player = WaveSurfer.create(options);
    this.player = player;
    this.$emit('ready', this.player);
    // 基本事件支持
    player.on('finish', () => {
      this.$emit('ended');
    });
    player.on('pause', () => {
      this.$emit('pause');
    });
    player.on('play', () => {
      this.$emit('play');
    });

    // 拖拽进度控制
    const audioEl = document.querySelector(`#${this.domID} audio`);
    audioEl.addEventListener('seeked', () => {
      // console.log(audioEl.currentTime, this.currentTime);
      if (audioEl.currentTime - this.currentTime > 1) {
        if (!this.seekAble) {
          audioEl.currentTime = this.currentTime;
          console.warn('本视频禁止快进！');
        }
      }
    });

    // 进度更新事件
    this.player.on('audioprocess', (ct) => {
      // 监听指定时间
      if (this.timeTarget && this.timeTarget.time < ct) {
        this.$emit('timeUp', this.timeTarget);
      }
      // 同步当前时间
      this.currentTime = ct;
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.destroy();
    }
  },
};
</script>

<style lang="less"></style>
