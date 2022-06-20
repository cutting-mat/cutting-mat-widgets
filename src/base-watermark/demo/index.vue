<template>
  <demo-section>
    <demo-block title="基础用法">
      <div style="height: 200px; border: 1px solid">
        <watermark />
      </div>
    </demo-block>
    <demo-block title="平铺模式">
      <div style="height: 400px; border: 1px solid">
        <watermark repeat :position="7" :angle="-30" />
      </div>
    </demo-block>
    <demo-block title="水印文字描边">
      <div style="height: 400px; border: 1px solid">
        <watermark repeat stroke-color="#000" color="#fff" :font-size="24" />
      </div>
    </demo-block>

    <demo-block title="动态水印">
      <div style="height: 200px; border: 1px solid">
        <watermark dynamic />
      </div>
    </demo-block>
    <demo-block title="动态随机位置">
      <div style="height: 200px; border: 1px solid">
        <watermark dynamic dynamic-position :dynamic-delay="0" />
      </div>
    </demo-block>
    <demo-block title="图片水印">
      <div style="height: 400px; border: 1px solid">
        <watermark
          wm-image="https://static.refined-x.com/static/avatar.jpg"
          :wm-image-width="100"
        />
      </div>
    </demo-block>
    <demo-block title="支持图片叠加水印">
      <div style="min-height: 400px; border: 1px solid">
        <watermark
          style="display: block; max-width: 100%"
          target-image="https://static.refined-x.com/static/avatar.jpg"
          color="#fff"
          :opacity="0.5"
        />
      </div>
    </demo-block>
  </demo-section>
</template>
