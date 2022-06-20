<template>
  <img v-if="config.output === 'image'" :id="domId" />
  <div v-else :id="domId"></div>
</template>

<script>
import { domId } from '../__support/util';
import { loadUrl, createWaterMark } from './lib/util';
// 调试开关
const DEBUG = process.env.NODE_ENV === 'development';

export default {
  name: 'watermark',
  props: {
    target: null, // 挂载水印的DOM，默认组件父元素
    targetImage: {
      // TODO 图片元素src
      type: String,
    },
    dynamic: {
      type: Boolean,
      default: false,
    },
    dynamicDuration: {
      type: Number,
      default: 2000,
    },
    dynamicDelay: {
      type: Number,
      default: 2000,
    },
    dynamicPosition: {
      type: Boolean,
      default: false,
    },
    wmText: {
      type: String,
      default: '水印文字',
    },
    wmImage: {
      // 图片水印
      type: String,
    },
    position: {
      // 位置：1~9
      type: Number,
      default: 9,
    },
    paddingX: {
      type: Number,
      default: 10,
    },
    paddingY: {
      type: Number,
      default: 10,
    },
    angle: {
      // 旋转角度
      type: Number,
      default: 0,
    },
    fontSize: {
      // 文字大小
      type: Number,
      default: 16,
    },
    fontFamily: {
      type: String,
      default: 'sans-serif',
    },
    color: {
      // 文字颜色
      type: String,
      default: '#000',
    },
    strokeColor: {
      // 文字描边颜色
      type: String,
    },
    opacity: {
      // 透明度
      type: Number,
      default: 0.3,
    },
    repeat: {
      // 平铺模式，开启后position设置无效
      type: Boolean,
      default: false,
    },
    repeatWidth: {
      // 平铺单元格宽度
      type: Number,
      default: 180,
    },
    repeatHeight: {
      // 平铺单元格高度
      type: Number,
      default: 180,
    },
    wmImageWidth: {
      // 图片绘制宽度
      type: Number,
      default: 180,
    },
    wmImageHeight: {
      // 图片绘制高度
      type: Number,
      default: 180,
    },
  },
  data() {
    return {
      domId: domId(),
      canvas: document.createElement('canvas'),
    };
  },
  computed: {
    // 内部配置对象
    config() {
      return {
        dom: null,
        timer: null,
        canvas: this.canvas,
        output:
          this.targetImage && this.targetImage.split
            ? 'image'
            : !this.target ||
              (this.target.tagName &&
                this.target.tagName.toLocaleLowerCase() !== 'img')
            ? 'dom'
            : '',
        // 文字
        text: this.wmText,
        position: this.position,
        paddingX: this.paddingX,
        paddingY: this.paddingY,
        angle: this.angle,
        fontSize: this.fontSize,
        fontFamily: this.fontFamily,
        color: this.color,
        strokeColor: this.strokeColor,
        opacity: this.opacity,
        // 平铺
        repeat: this.repeat,
        repeatWidth: this.repeatWidth,
        repeatHeight: this.repeatHeight,
        // 动态
        dynamic: this.dynamic,
        dynamicDuration: this.dynamicDuration,
        dynamicDelay: this.dynamicDelay,
        dynamicPosition: this.dynamicPosition,
        // 图片
        image: this.wmImage,
        imageWidth: this.wmImageWidth,
        imageHeight: this.wmImageWidth,
        targetImageWidth: null,
        targetImageHeight: null,
      };
    },
  },
  mounted() {
    const thisDom = document.getElementById(this.domId);
    // 输出DOM元素
    if (this.config.output === 'dom') {
      // 创建水印元素
      const watermakr = document.createElement('div');
      // 父元素
      const targetNode =
        this.target && this.target.nodeName ? this.target : thisDom.parentNode;
      if (
        ['relative', 'absolute', 'fixed'].indexOf(targetNode.style.position) ===
        -1
      ) {
        DEBUG && console.warn(`重设targetNode.style.position`);
        targetNode.style.position = 'relative';
      }
      // 元素变动回调函数
      const callback = (mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (
            mutation.target === targetNode &&
            mutation.type === 'attributes'
          ) {
            DEBUG && console.warn(`父元素被篡改`);
            // 删除重新添加
            try {
              targetNode.removeChild(watermakr);
            } catch (err) {
              return null;
            }
          } else if (mutation.target === watermakr) {
            DEBUG && console.warn(`水印被篡改`);
            // 删除重新添加
            targetNode.removeChild(watermakr);
          } else {
            mutation.removedNodes.forEach((item) => {
              if (item === watermakr) {
                DEBUG && console.warn(`水印被删除`);
                observer.disconnect();
                // 清理定时器
                if (this.config.timer) {
                  this.config.timer = clearTimeout(this.config.timer);
                }

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
          targetNode.tagName.toLocaleLowerCase() === 'body'
            ? 'fixed'
            : 'absolute'
        };
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            pointer-events: none;
            background-repeat: repeat;
            z-index:9999`;
        targetNode.appendChild(watermakr);
        this.config.dom = watermakr;
        createWaterMark(this.config, (canvas) => {
          observer.disconnect();
          watermakr.style.backgroundImage = `url(${canvas.toDataURL()})`;
          // 监听元素
          observer.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true,
          });
        });
      };
      addMaker();
    } else if (this.config.output === 'image') {
      // 输出图片元素
      loadUrl(this.targetImage).then((img) => {
        // 设置输出尺寸
        this.config.targetImageWidth = img.width;
        this.config.targetImageHeight = img.height;
        // 创建水印图片
        createWaterMark(this.config, (canvas, ctx) => {
          canvas.toBlob((blob) => {
            const newImg = document.createElement('img');
            const url = URL.createObjectURL(blob);
            newImg.onload = () => {
              URL.revokeObjectURL(url);
              // 绘制原始image底图
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              // 叠加水印
              if (this.config.repeat) {
                const pattern = ctx.createPattern(newImg, 'repeat');
                ctx.fillStyle = pattern;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
              } else {
                ctx.drawImage(newImg, 0, 0);
              }

              thisDom.src = canvas.toDataURL();
            };
            newImg.src = url;
          });
        });
      });
    } else {
      console.warn(`watermark: 未匹配的output`);
    }
  },
};
</script>

<style lang="less"></style>
