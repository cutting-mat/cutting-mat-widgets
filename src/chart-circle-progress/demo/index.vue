<template>
  <demo-section>
    <demo-block title="基础用法">
      <circle-progress :percentage="value1" style="height: 200px" />
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data() {
    return {
      value1: Math.round(Math.random() * 100),
      value2: Math.round(Math.random() * 100),
      value3: Math.round(Math.random() * 100),
      refreshTimer: null,
    };
  },
  created() {
    this.refreshTimer = setInterval(() => {
      this.value1 = Math.round(Math.random() * 100);
      this.value2 = Math.round(Math.random() * 100);
      this.value3 = Math.round(Math.random() * 100);
    }, 5000);
  },
  beforeDestroy() {
    this.refreshTimer = clearInterval(this.refreshTimer);
  },
};
</script>
