<template>
  <video
    ref="videoPlayer"
    class="video-js vjs-theme-fantasy"
    style="width: 100%; height: 100%"
  ></video>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import '@videojs/themes/dist/fantasy/index.css';
import '@tower1229/videojs-plugin-marker';
import '@tower1229/videojs-plugin-marker/dist/style.css';
import '@tower1229/videojs-plugin-source-switcher';
import '@tower1229/videojs-plugin-source-switcher/dist/style.css';

window.videojs = videojs;
require('video.js/dist/lang/zh-CN.js');

export default {
  name: `business-video`,
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
      player: null,
      currentTime: 0,
      intervalNum: 0,
    };
  },
  mounted() {
    const options = {
      playbackRates: [0.5, 1, 1.5, 2],
      language: 'zh-CN',
      ...this.options,
    };

    const player = videojs(this.$refs.videoPlayer, options, () => {
      this.$emit('ready', player);
    });
    this.player = player;

    //
    // Create a track object.
    const track = new videojs.VideoTrack({
      id: 'my-alternate-video-track',
      kind: 'commentary',
      label: "Director's Commentary",
      language: 'en',
    });

    // Add the track to the player's video track list.
    player.videoTracks().addTrack(track);

    // 拖拽进度控制
    this.player.on('seeked', () => {
      if (this.player.currentTime() - this.currentTime > 1) {
        if (!this.seekAble) {
          this.player.currentTime(this.currentTime);
          console.warn('本视频禁止快进！');
        }
      }
    });

    // 用户活动事件
    // this.player.on('useractive', e => {
    //   console.log('useractive', e)
    // })

    // this.player.on('userinactive', e => {
    //   console.log('userinactive', e)
    // })

    // 备份倒计时秒数
    this.intervalNum = this.heartbeatSecond;

    this.player.setInterval(() => {
      // 当前时间备份
      this.currentTime = this.player.currentTime();

      while (this.intervalNum > 1) {
        return this.intervalNum--;
      }
      this.intervalNum = this.heartbeatSecond;
      this.$emit('heartbeat', this.player.currentTime());
    }, 1000);
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style scoped>
/* 主题样式bug */
.vjs-theme-fantasy >>> .vjs-playback-rate-value {
  line-height: 54px;
}
.vjs-theme-fantasy >>> .vjs-menu-content {
  bottom: 54px;
}

.vjs-theme-fantasy >>> .vjs-resolution-button-label {
  line-height: 54px;
}
.vjs-theme-fantasy >>> .vjs-menu-button-popup .vjs-menu {
  margin-bottom: 0;
}
</style>
