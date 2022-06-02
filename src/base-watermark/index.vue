<template>
  <div :id="domId">
    <slot />
  </div>
</template>

<script>
import { domId } from '../__support/util';
// 调试开关
const DEBUG = process.env.NODE_ENV === 'development';

function createWaterMark(ele) {
  const rect = ele.getBoundingClientRect();
  const angle = -20;
  const txt = '秋风的笔记';
  const canvas = document.createElement('canvas');
  canvas.width = 180;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 180, 100);
  ctx.fillStyle = '#000';
  ctx.globalAlpha = 0.3;
  ctx.font = `16px serif`;
  ctx.rotate((Math.PI / 180) * angle);
  ctx.fillText(txt, 0, 50);

  console.log('rect', rect);
  return canvas.toDataURL();
}

export default {
  name: 'watermark',
  props: {
    targetId: {
      // 挂载水印的id，默认body
      type: String,
      default: '',
    },
    text: {
      // 水印文字
      type: String,
      default: '水印文字',
    },
  },
  data() {
    return {
      domId: domId(),
    };
  },
  mounted() {
    // 水印元素
    const watermakr = document.createElement('div');
    // 父元素
    const targetNode =
      this.targetId && document.getElementById(this.targetId)
        ? document.getElementById(this.targetId)
        : document.body;
    if (
      ['relative', 'absolute', 'fixed'].indexOf(targetNode.style.position) ===
      -1
    ) {
      DEBUG && console.warn(`重设targetNode.style.position`);
      targetNode.style.position = 'relative';
    }
    // 元素变动回调函数
    const callback = function (mutationsList) {
      mutationsList.forEach((mutation) => {
        if (mutation.target === watermakr) {
          DEBUG && console.warn(`水印被篡改`);
          // 删除重新添加
          targetNode.removeChild(watermakr);
        } else {
          mutation.removedNodes.forEach(function (item) {
            if (item === watermakr) {
              DEBUG && console.warn(`水印被删除`);
              observer.disconnect();
              DEBUG && console.warn(`重新添加水印`);
              addMaker();
            }
          });
        }
      });
    };

    const observer = new MutationObserver(callback);
    const addMaker = function () {
      watermakr.style = `position: ${
        targetNode.tagName.toLocaleLowerCase() === 'body' ? 'fixed' : 'absolute'
      };
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            pointer-events: none;
            background-repeat: repeat;`;
      targetNode.appendChild(watermakr);
      watermakr.style.backgroundImage = `url(${createWaterMark(watermakr)})`;
      // 监听元素
      observer.observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    };
    addMaker();
  },
};
</script>

<style lang="less"></style>
