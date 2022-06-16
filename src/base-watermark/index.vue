<template>
  <img v-if="config.output === 'image'" :id="domId" />
  <div v-else :id="domId"></div>
</template>

<script>
import { domId } from '../__support/util';
import { loadUrl } from './lib/util';
// 调试开关
const DEBUG = process.env.NODE_ENV === 'development';
// 获取绘制文字位置
const getDrawPosition = function (width, height, config) {
  const posi = config.position;
  let x = 0;
  let y = 0;
  if ([2, 5, 8].indexOf(posi) !== -1) {
    x = Math.round(width / 2);
  } else if ([3, 6, 9].indexOf(posi) !== -1) {
    x = width - config.paddingX;
  } else {
    x = config.paddingX;
  }
  if ([4, 5, 6].indexOf(posi) !== -1) {
    y = Math.round(height / 2);
  } else if ([7, 8, 9].indexOf(posi) !== -1) {
    y = height - config.paddingY;
  } else {
    y = config.paddingY;
  }
  return [x, y];
};

// 获取绘制图片位置
const getDrawImagePositon = function (width, height, config, img) {
  const posi = config.position;
  let x = 0;
  let y = 0;
  let w = img.width;
  let h = img.height;
  if (w > config.imageWidth || h > config.imageHeight) {
    DEBUG && console.log('水印图片较大，需要重新矫正尺寸');
    const imgProp = w / h;
    if (imgProp > config.imageWidth / config.imageHeight) {
      DEBUG && console.log('图片较宽，高为基准');
      h = config.imageHeight;
      w = h * imgProp;
    } else {
      DEBUG && console.log('图片较高，宽为基准');
      w = config.imageWidth;
      h = w / imgProp;
    }
  }
  // 计算绘制位置
  if ([2, 5, 8].indexOf(posi) !== -1) {
    x = width / 2 - w / 2;
  } else if ([3, 6, 9].indexOf(posi) !== -1) {
    x = width - config.paddingX - w;
  } else {
    x = config.paddingX;
  }
  if ([4, 5, 6].indexOf(posi) !== -1) {
    y = height / 2 - h / 2;
  } else if ([7, 8, 9].indexOf(posi) !== -1) {
    y = height - config.paddingY - h;
  } else {
    y = config.paddingY;
  }
  console.log(posi, x, y, w, h);
  return {
    position: [x, y],
    size: [w, h],
  };
};

// 文字水平对齐
const textAlignHash = {
  1: 'left',
  2: 'center',
  3: 'right',
  4: 'left',
  5: 'center',
  6: 'right',
  7: 'left',
  8: 'center',
  9: 'right',
};
// 文字垂直对齐
const textBaselineHash = {
  1: 'top',
  2: 'top',
  3: 'top',
  4: 'middle',
  5: 'middle',
  6: 'middle',
  7: 'bottom',
  8: 'bottom',
  9: 'bottom',
};

function createWaterMark(ele, config) {
  const rect = ele.getBoundingClientRect();
  const { canvas } = config;
  canvas.width = config.repeat ? config.repeatWidth : rect.width;
  canvas.height = config.repeat ? config.repeatHeight : rect.height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 统一设置
  ctx.globalAlpha = config.opacity;
  ctx.rotate((Math.PI / 180) * config.angle);
  return new Promise((resolve) => {
    if (config.input === 'text') {
      // 绘制文字
      const drawTextPosition = getDrawPosition(
        canvas.width,
        canvas.height,
        config
      );
      ctx.fillStyle = config.color;
      ctx.font = `${config.fontSize}px ${config.fontFamily}`;
      ctx.textAlign = textAlignHash[config.position];
      ctx.textBaseline = textBaselineHash[config.position];

      ctx.fillText(config.text, drawTextPosition[0], drawTextPosition[1]);
      resolve(canvas.toDataURL());
    } else if (config.input === 'image') {
      // 绘制图像
      loadUrl(config.image).then((img) => {
        const drawImageInfo = getDrawImagePositon(
          canvas.width,
          canvas.height,
          config,
          img
        );

        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          drawImageInfo.position[0],
          drawImageInfo.position[1],
          drawImageInfo.size[0],
          drawImageInfo.size[1]
        );
        resolve(canvas.toDataURL());
      });
    }
  });
}

export default {
  name: 'watermark',
  props: {
    target: {
      // 挂载水印的DOM，默认组件父元素
      type: Object,
    },
    targetImage: {
      // TODO 图片元素src
      type: String,
    },
    dynamic: {
      // TODO: 动态显示
      type: Boolean,
      default: false,
    },
    dynamicDuration: {
      type: Number,
      default: 1000,
    },
    dynamicDelay: {
      type: Number,
      default: 1000,
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
      default: 'serif',
    },
    color: {
      // 文字颜色
      type: String,
      default: '#000',
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
      timer: null,
    };
  },
  computed: {
    config() {
      return {
        canvas: this.canvas,
        output: this.targetImage ? 'image' : 'dom',
        input: this.wmImage ? 'image' : 'text',
        // 文字
        text: this.wmText,
        position: this.position,
        paddingX: this.paddingX,
        paddingY: this.paddingY,
        angle: this.angle,
        fontSize: this.fontSize,
        fontFamily: this.fontFamily,
        color: this.color,
        opacity: this.opacity,
        // 平铺
        repeat: this.repeat,
        repeatWidth: this.repeatWidth,
        repeatHeight: this.repeatHeight,
        // 动态
        dynamic: this.dynamic,
        dynamicDuration: this.dynamicDuration,
        dynamicDelay: this.dynamicDelay,
        timer: this.timer,
        // 图片
        image: this.wmImage,
        imageWidth: this.wmImageWidth,
        imageHeight: this.wmImageWidth,
      };
    },
  },
  mounted() {
    if (this.config.output === 'dom') {
      // 水印元素
      const watermakr = document.createElement('div');
      // 父元素
      const targetNode =
        this.target && this.target.nodeName
          ? this.target
          : document.getElementById(this.domId).parentNode;
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
          if (mutation.target === watermakr) {
            DEBUG && console.warn(`水印被篡改`);
            // 删除重新添加
            targetNode.removeChild(watermakr);
          } else {
            mutation.removedNodes.forEach((item) => {
              if (item === watermakr) {
                DEBUG && console.warn(`水印被删除`);
                observer.disconnect();
                // 清理定时器
                this.timer = clearInterval(this.timer);
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
            background-repeat: repeat;`;
        targetNode.appendChild(watermakr);

        createWaterMark(watermakr, this.config).then((img) => {
          watermakr.style.backgroundImage = `url(${img})`;
          // 监听元素
          observer.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true,
          });
        });
      };
      addMaker();
    } else {
      console.log(this.config);
      loadUrl(this.targetImage).then((img) => {});
    }
  },
};
</script>

<style lang="less"></style>
