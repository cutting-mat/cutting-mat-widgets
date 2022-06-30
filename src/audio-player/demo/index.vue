<template>
  <demo-section>
    <demo-block title="基础用法">
      <audio-player @ready="handleReady" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleReady(player) {
      player.load('https://static.refined-x.com/static/sample.mp3');
    },
    handleHeartbeat(time) {
      console.log('time==', time);
    },
  },
};
</script>
