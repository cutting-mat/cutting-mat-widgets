module.exports = {
  name: 'cutting-mat-widgets',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/cutting-mat-widgets/',
    },
  },
  site: {
    title: 'cutting-mat-widgets',
    logo: 'http://cutting-mat.refined-x.com/logo.png',
    description: 'Vue 组件库',
    links: [
      {
        url: 'https://cutting-mat.github.io/',
        logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/weapp.svg',
      },
      {
        url: 'https://github.com/cutting-mat/cutting-mat-widgets',
        logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/github.svg',
      },
    ],
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'watermark',
            title: '水印',
          },
        ],
      },
      {
        title: '图表组件',
        items: [
          {
            path: 'chart',
            title: '柱形/线形图表(todo)',
          },
          {
            path: 'bar-progress',
            title: '柱状进度条',
          },
          {
            path: 'circle-progress',
            title: '环形进度条(todo)',
          },
        ],
      },
      {
        title: '业务组件',
        items: [
          {
            path: 'video-player',
            title: '视频播放',
          },
          {
            path: 'audio-player',
            title: '音频播放(todo)',
          },
          {
            path: 'scroll-list',
            title: '滚动列表',
          },
        ],
      },
      {
        title: '布局组件',
        items: [
          {
            path: '__template',
            title: 'layout template',
          },
        ],
      },
      {
        title: '区块组件',
        items: [
          {
            path: '__template',
            title: 'block template',
          },
        ],
      },
      {
        title: '页面组件',
        items: [
          {
            path: '__template',
            title: 'page template',
          },
        ],
      },
      {
        title: '模板组件',
        items: [
          {
            path: '__template',
            title: 'template template',
          },
        ],
      },
    ],
  },
};
