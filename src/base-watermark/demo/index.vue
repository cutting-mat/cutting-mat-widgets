<template>
  <demo-section>
    <demo-block title="基础用法">
      <div style="height: 200px; border: 1px solid">
        <watermark />
      </div>
    </demo-block>
    <demo-block title="平铺模式">
      <div style="height: 400px; border: 1px solid">
        <watermark repeat :position="5" />
      </div>
    </demo-block>
    <demo-block title="图片水印">
      <div style="height: 400px; border: 1px solid">
        <watermark wm-image="https://static.refined-x.com/static/avatar.jpg" />
      </div>
    </demo-block>
  </demo-section>
</template>
