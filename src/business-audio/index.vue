<template>
  <div :id="domID"></div>
</template>

<script>
/**
 * 波形图音频播放器
 * base on ；https://wavesurfer-js.org/docs/options.html
 * */
require('wavesurfer.js');

const { WaveSurfer } = window;

export default {
  name: `audio-player`,
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    heartbeatSecond: {
      type: Number,
      default: 5, // s
    },
    seekAble: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      domID: `waveform_${parseInt(Math.random() * 1e5)}`,
      player: null,
      currentTime: 0,
      intervalNum: 0,
    };
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

    // 备份倒计时秒数
    this.intervalNum = this.heartbeatSecond;

    setInterval(() => {
      // 当前时间备份
      this.currentTime = this.player.getCurrentTime();

      while (this.intervalNum > 1) {
        return this.intervalNum--;
      }
      this.intervalNum = this.heartbeatSecond;
      this.$emit('heartbeat', this.player.getCurrentTime());
    }, 1000);
  },
  beforeDestroy() {
    if (this.player) {
      this.player.destroy();
    }
  },
};
</script>

<style lang="less"></style>
