<template>
  <div style="width: 100%; height: 100%">
    <video
      :id="domID"
      class="video-js"
      style="width: 100%; height: 100%"
      controlslist="nodownload noremoteplayback"
      oncontextmenu="return false"
    ></video>
    <watermark v-if="wmTarget" v-bind="watermarkConfig" :target="wmTarget" />
  </div>
</template>

<script>
import { domId } from '../__support/util.js';

import videojs from './lib/video.js';

import './lib/video-js.min.css';
import '@tower1229/videojs-plugin-marker/dist/style.css';
import '@tower1229/videojs-plugin-source-switcher/dist/style.css';
import zhCn from './lib/zh-CN.js';

import watermark from '../watermark/index.vue';

window.videojs = videojs;

zhCn(videojs);

const loadPlugins = Promise.all([
  import('@tower1229/videojs-plugin-marker'),
  import('@tower1229/videojs-plugin-source-switcher'),
]);

export default {
  name: `VideoPlayer`,
  components: {
    watermark,
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          // CryptoConfig
          // RequestOption
        };
      },
    },
    seekAble: {
      type: Boolean,
      default: true,
    },
    subscribeTimes: {
      type: Array,
      default() {
        /**
         * 监听一组播放进度，通过 ‘timeUp’ 事件回调
         * item format:
         * {
         *   time: Number(s)
         * }
         * */
        return [];
      },
    },
    watermarkConfig: {
      // 水印组件设置
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['ready', 'ended', 'pause', 'play', 'timeUp'],
  data() {
    return {
      domID: domId(),
      player: null,
      currentTime: 0,
      wmTarget: null,
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
  watch: {
    seekAble: {
      handler() {
        this.setControlBar();
      },
      immediate: true,
    },
  },
  mounted() {
    // 默认配置
    const options = {
      playbackRates: [0.5, 1, 1.5, 2],
      language: 'zh-CN',
      fluid: true,
      ...this.options,
    };
    const player = videojs(this.domID, options, () => {
      loadPlugins.then(() => {
        this.$emit('ready', player);
      });
      // 水印
      let unwatch;
      unwatch = this.$watch(
        () => this.watermarkConfig,
        () => {
          if (this.watermarkConfig.wmText || this.watermarkConfig.wmImage) {
            this.wmTarget = document.getElementById(this.domID);
            unwatch && unwatch();
          }
        },
        {
          deep: true,
          immediate: true,
        }
      );
    });

    // 基本事件
    player.on('ended', () => {
      this.$emit('ended');
    });
    player.on('pause', () => {
      this.$emit('pause');
    });
    player.on('play', () => {
      this.$emit('play');
    });
    this.player = player;
    // 拖拽进度控制
    this.setControlBar();

    // 用户活动事件
    // this.player.on('useractive', e => {
    //   console.log('useractive', e)
    // })

    // this.player.on('userinactive', e => {
    //   console.log('userinactive', e)
    // })

    // 进度更新事件
    this.player.on('timeupdate', () => {
      const ct = this.player.currentTime();
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
      this.player.dispose();
    }
  },
  methods: {
    setControlBar() {
      if (this.player) {
        if (this.seekAble) {
          this.player.controlBar.progressControl.enable();
        } else {
          this.player.controlBar.progressControl.disable();
        }
      }
    },
  },
};
</script>

<style scoped></style>
