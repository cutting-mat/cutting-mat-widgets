<template>
  <demo-section>
    <demo-block title="基础用法">
      <div style="height: 200px; border: 1px solid">
        <watermark />
      </div>
    </demo-block>
    <demo-block title="平铺模式">
      <div style="height: 400px; border: 1px solid">
        <watermark
          repeat
          :position="5"
          wm-text="平铺水印文字"
          font-family="sans-serif"
        />
      </div>
    </demo-block>
    <demo-block title="动态显示">
      <div style="height: 200px; border: 1px solid">
        <watermark dynamic />
      </div>
    </demo-block>
    <demo-block title="动态随机位置">
      <div style="height: 200px; border: 1px solid">
        <watermark dynamic dynamic-position :dynamic-delay="500" />
      </div>
    </demo-block>
    <demo-block title="图片水印">
      <div style="height: 400px; border: 1px solid">
        <watermark
          wm-image="https://static.refined-x.com/static/avatar.jpg"
          :wmImageWidth="100"
        />
      </div>
    </demo-block>
    <demo-block title="支持图片叠加水印">
      <div style="height: 400px; border: 1px solid">
        <watermark
          target-image="https://static.refined-x.com/static/avatar.jpg"
        />
      </div>
    </demo-block>
  </demo-section>
</template>
