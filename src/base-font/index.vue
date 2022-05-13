<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'base-font',
};
</script>

<style lang="less">
@font-face {
  font-family: 'impact-2';
  src: url('font/impact-2.woff') format('woff'),
    url('font/impact-2.ttf?t=1542333212698') format('truetype');
}

@font-face {
  font-family: 'Digital';
  src: url('font/Digital.woff') format('woff'),
    url('font/Digital.ttf?t=1542333212698') format('truetype');
}
</style>
