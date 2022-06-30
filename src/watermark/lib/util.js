/**
 * Load an image by its url
 *
 * @param {String} url
 * @param {Function} init - an optional image initializer
 * @return {Promise}
 */
export function loadUrl(url, init) {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  return new Promise((resolve) => {
    img.onload = () => {
      resolve(img);
    };
    img.src = url;
  });
}

/**
 * Return a collection of images from an
 * array of File objects
 *
 * @param {File} file
 * @return {Promise}
 */
export function loadFile(file) {
  const reader = new FileReader();
  return new Promise((resolve) => {
    const img = new Image();
    reader.onloadend = () => setAndResolve(img, reader.result, resolve);
    reader.readAsDataURL(file);
  });
}

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
export const randomPosi = function () {
  const result = Math.floor(Math.random() * 10);
  if (result === 0 || result === randomPosiTemp) {
    return randomPosi();
  }
  randomPosiTemp = result;
  return result;
};

// 获取绘制文字信息
export const getDrawTextInfo = function (width, height, config) {
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
export const getDrawImageInfo = function (width, height, config, img) {
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
    // 水印图片较大，需要重新矫正尺寸
    const imgProp = w / h;
    if (imgProp > config.imageWidth / config.imageHeight) {
      // 图片较宽，高为基准
      h = config.imageHeight;
      w = h * imgProp;
    } else {
      // 图片较高，宽为基准
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

/**
 * 绘制水印
 * @params[config]: config
 * @params[callback]: function(img => {})
 * */
export const createWaterMark = function (config, callback) {
  // 输出尺寸
  const rect =
    config.output === 'dom' && config.dom
      ? config.dom.getBoundingClientRect()
      : {
          width: config.targetImageWidth,
          height: config.targetImageHeight,
        };
  // 获取唯一 canvas 实例
  const { canvas } = config;
  const ctx = canvas.getContext('2d');
  canvas.width = config.repeat ? config.repeatWidth : rect.width;
  canvas.height = config.repeat ? config.repeatHeight : rect.height;

  // 清屏方法，用于实现动态水印
  const clear = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    typeof callback === 'function' && callback(canvas, ctx);

    if (config.dynamic) {
      config.timer = setTimeout(drawFunction, config.dynamicDelay);
    } else {
      drawFunction();
    }
  };
  // 绘制方法
  const drawFunction = function () {
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
      ctx.font = `${config.fontSize}px ${config.fontFamily}`;
      ctx.textAlign = drawTextInfo.textAlign;
      ctx.textBaseline = drawTextInfo.textBaseline;

      // 描边
      if (config.strokeColor) {
        console.warn('strokeColor', config.strokeColor);
        ctx.strokeStyle = config.strokeColor;
        ctx.strokeText(
          config.text,
          drawTextInfo.position[0],
          drawTextInfo.position[1]
        );
      }
      ctx.fillStyle = config.color;
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
};
