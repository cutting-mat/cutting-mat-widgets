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
