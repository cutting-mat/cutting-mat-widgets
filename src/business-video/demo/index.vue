<template>
  <demo-section>
    <demo-block title="基础用法">
      <business-video
        style="width: 100%; max-width: 600px"
        class="vjs-16-9"
        :options="videoOptions"
        @ready="
          (player) =>
            player.src({
              src: 'https://static.refined-x.com/static/1080p-watermark.mp4',
              type: 'video/mp4',
            })
        "
      />
    </demo-block>
    <demo-block title="视频打点">
      <business-video
        style="width: 100%; max-width: 600px"
        class="vjs-16-9"
        :options="videoOptions"
        @ready="handleReadyMark"
      />
    </demo-block>
    <demo-block title="清晰度选择">
      <business-video
        style="width: 100%; max-width: 600px"
        class="vjs-16-9"
        :options="videoOptions"
        @ready="handleReadySwitch"
      />
    </demo-block>
  </demo-section>
</template>

<script>
// import * as util from "@/main/assets/util";

export default {
  data() {
    return {
      videoOptions: {
        // autoplay: true,
        controls: true,
      },
    };
  },
  methods: {
    handleReadyMark(player) {
      player.src({
        src: 'https://static.refined-x.com/static/1080p-watermark.mp4',
        type: 'video/mp4',
      });

      player.markerPlugin({
        //  打点信息
        markers: [
          {
            offset: 10,
          },
          {
            offset: 20,
            data: {
              content: '可点击',
            },
            onClick(e) {
              e.stopPropagation(); // marker点击事件，可以屏蔽原进度条动作
              alert('marker click!');
            },
          },
        ],
      });
    },
    handleReadySwitch(player) {
      // 配置插件
      player.SwitcherPlugin();

      // 动态配置视频源
      player.updateSrc([
        {
          src: 'https://static.refined-x.com/static/1080p-watermark.mp4',
          type: 'video/mp4',
          label: '1080P',
          res: '1080',
        },
        {
          src: 'https://static.refined-x.com/stream/1080p-720.m3u8',
          type: 'application/x-mpegURL',
          label: '720P',
          res: '720',
        },
      ]);
    },
  },
};
</script>
