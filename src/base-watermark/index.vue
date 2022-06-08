<template>
  <div :id="domId">
    <img :src="targetSrc" v-if="targetSrc" />
  </div>
</template>

<script>
// TODO 图片/文字水印 动态水印 图片元素合成水印
// https://github.com/brianium/watermarkjs/blob/master/lib/image/index.js
import { domId } from '../__support/util';
// 调试开关
const DEBUG = process.env.NODE_ENV === 'development';

function createWaterMark(ele, textConfig, imageConfig) {
  const rect = ele.getBoundingClientRect();
  const canvas = document.createElement('canvas');
  canvas.width = rect.width;
  canvas.height = rect.height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = textConfig.color;
  ctx.globalAlpha = textConfig.opacity;
  ctx.font = `${textConfig.fontSize}px serif`;
  ctx.rotate((Math.PI / 180) * textConfig.angle);
  ctx.fillText(textConfig.text, 0, 50);

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
    targetSrc: {
      // 加水印的图片src
      type: String,
    },
    dynamicShow: {
      // 动态显示设置
      type: Object,
      default() {
        return {
          enable: false,
          duration: 10000,
          delay: 10000,
        };
      },
    },
    textConfig: {
      // 文字水印配置
      type: Object,
      default() {
        return {
          text: '水印文字',
          position: 5, // 位置：1~9
          angle: 0, // 旋转角度
          fontSize: 16, // 字号
          color: '#000', // 颜色
          opacity: 0.3, // 透明度
          repeat: false, // 平铺模式，开启后position设置无效
        };
      },
    },
    imageConfig: {
      // 图片水印配置
      type: Object,
      default() {
        return {
          src: '', // 图片url
          position: 9, // 位置：1~9
          angle: 0, // 旋转角度
          width: 0, // 图片绘制宽度
          height: 0, // 图片绘制高度
          opacity: 0.3, // 透明度
          repeat: false, // 平铺模式，开启后position设置无效
        };
      },
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
    const addMaker = () => {
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
      watermakr.style.backgroundImage = `url(${createWaterMark(
        watermakr,
        this.textConfig,
        this.imageConfig
      )})`;
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
