<template>
  <img v-if="config.output === 'image'" :id="domId" />
  <div v-else :id="domId"></div>
</template>

<script>
import { domId } from '../__support/util';
import { loadUrl } from './lib/util';
// 调试开关
const DEBUG = process.env.NODE_ENV === 'development';

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

// 获取 1-9 随机不重复整数
let randomPosiTemp;
const randomPosi = function () {
  const result = Math.floor(Math.random() * 10);
  if (result === 0 || result === randomPosiTemp) {
    return randomPosi();
  }
  randomPosiTemp = result;
  return result;
};

// 获取绘制文字信息
const getDrawTextInfo = function (width, height, config) {
  let posi = config.position;
  // 随机位置
  if (config.dynamicPosition) {
    posi = randomPosi();
  }
  let x = 0;
  let y = 0;
  const textAlign = textAlignHash[posi];
  const textBaseline = textBaselineHash[posi];

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
  return {
    position: [x, y],
    textAlign,
    textBaseline,
  };
};

// 获取绘制图片绘制信息
const getDrawImageInfo = function (width, height, config, img) {
  let posi = config.position;
  // 随机位置
  if (config.dynamicPosition) {
    posi = randomPosi();
  }
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

  return {
    position: [x, y],
    size: [w, h],
  };
};

function createWaterMark(config, callback) {
  const rect =
    config.output === 'dom' && config.dom
      ? config.dom.getBoundingClientRect()
      : {
          width: config.targetImageWidth,
          height: config.targetImageHeight,
        };
  const { canvas } = config;
  const ctx = canvas.getContext('2d');
  canvas.width = config.repeat ? config.repeatWidth : rect.width;
  canvas.height = config.repeat ? config.repeatHeight : rect.height;

  // 清屏
  const clear = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    typeof callback === 'function' && callback(canvas, ctx);

    if (config.dynamic) {
      config.timer = setTimeout(drawFunction, config.dynamicDelay);
    } else {
      drawFunction();
    }
  };
  const drawFunction = function () {
    // 统一设置
    ctx.globalAlpha = config.opacity;
    ctx.rotate((Math.PI / 180) * config.angle);

    if (config.image) {
      // 绘制图像
      loadUrl(config.image).then((img) => {
        const drawImageInfo = getDrawImageInfo(
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
        typeof callback === 'function' && callback(canvas, ctx);
        if (config.dynamic) {
          config.timer = setTimeout(clear, config.dynamicDuration);
        }
      });
    } else if (config.text) {
      // 绘制文字
      const drawTextInfo = getDrawTextInfo(canvas.width, canvas.height, config);
      ctx.fillStyle = config.color;
      ctx.font = `${config.fontSize}px ${config.fontFamily}`;
      ctx.textAlign = drawTextInfo.textAlign;
      ctx.textBaseline = drawTextInfo.textBaseline;
      ctx.fillText(
        config.text,
        drawTextInfo.position[0],
        drawTextInfo.position[1]
      );
      typeof callback === 'function' && callback(canvas, ctx);
      if (config.dynamic) {
        config.timer = setTimeout(clear, config.dynamicDuration);
      }
    }
  };

  drawFunction();
}

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
    };
  },
  computed: {
    config() {
      return {
        dom: null,
        timer: null,
        canvas: this.canvas,
        output: !this.target && this.targetImage ? 'image' : 'dom',
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
    if (this.config.output === 'dom') {
      // 水印元素
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
    } else {
      // 图片元素
      loadUrl(this.targetImage).then((img) => {
        this.config.targetImageWidth = img.width;
        this.config.targetImageHeight = img.height;
        // TODO 图片元素水印
        createWaterMark(this.config, (canvas, ctx) => {
          canvas.toBlob((blob) => {
            const newImg = document.createElement('img');
            const url = URL.createObjectURL(blob);
            newImg.onload = function () {
              // no longer need to read the blob so it's revoked
              // URL.revokeObjectURL(url);
              console.log(newImg, newImg.width, newImg.height);
              canvas.width = img.width;
              canvas.height = img.height;

              ctx.drawImage(img, 0, 0);
              ctx.drawImage(newImg, 0, 0);
              thisDom.src = canvas.toDataURL();
            };
            newImg.src = url;

            // const pattern = ctx.createPattern(newImg, 'no-repeat');
            // ctx.fillStyle = pattern;
            // ctx.fillRect(0, 0, canvas.width, canvas.height);
          });
        });
      });
    }
  },
};
</script>

<style lang="less"></style>
