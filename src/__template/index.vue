<template>
  <button class="my-component">
    <slot />
  </button>
</template>

<script>
// 调试开关
const DEBUG = process.env.NODE_ENV === 'development';

export default {
  name: 'MyComponent',
  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="less">
.my-component {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  border-radius: 30px;
}
</style>
