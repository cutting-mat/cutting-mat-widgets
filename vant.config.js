module.exports = {
  name: 'cutting-mat-widgets',
  build: {
    css: {
      preprocessor: 'less',
    },
    // site: {
    //   publicPath: '/cutting-mat-widgets/'
    // }
  },
  site: {
    title: 'cutting-mat-widgets',
    logo: 'http://cutting-mat.refined-x.com/logo.png',
    hideSimulator: false,
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
            path: 'base-button',
            title: 'base 按钮',
          },
        ],
      },
      {
        title: '图表组件',
        items: [
          {
            path: 'chart-main',
            title: '柱形/线形图表',
          },
        ],
      },
      {
        title: '业务组件',
        items: [
          {
            path: 'business-video',
            title: '视频播放',
          },
          {
            path: 'business-audio',
            title: '音频播放',
          },
        ],
      },
      {
        title: '布局组件',
        items: [
          {
            path: 'layout-button',
            title: 'layout 按钮',
          },
        ],
      },
      {
        title: '区块组件',
        items: [
          {
            path: 'block-button',
            title: 'block 按钮',
          },
        ],
      },
      {
        title: '页面组件',
        items: [
          {
            path: 'page-button',
            title: 'page 按钮',
          },
        ],
      },
      {
        title: '模板组件',
        items: [
          {
            path: 'template-button',
            title: 'template 按钮',
          },
        ],
      },
    ],
  },
};
