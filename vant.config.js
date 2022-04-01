
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
    hideSimulator: true,
    simulator: {
      url: "/demo.html"
    },
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
    ],
  },
};
