
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
            path: 'demo-button',
            title: 'DemoButton 按钮',
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
            title: 'BusinessVideo 视频',
          },
        ],
      },
      {
        title: '布局组件',
        items: [
          {
            path: 'layout-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
      {
        title: '区块组件',
        items: [
          {
            path: 'block-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
      {
        title: '页面组件',
        items: [
          {
            path: 'page-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
      {
        title: '模板组件',
        items: [
          {
            path: 'template-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
    ],
  },
};
