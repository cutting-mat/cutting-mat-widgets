<template>
  <demo-section>
    <demo-block title="基础用法">
      <bar-progress :percentage="50" />
    </demo-block>
    <demo-block title="labelType=2">
      <bar-progress :percentage="50" label-type="2" />
    </demo-block>
    <demo-block title="labelType=3">
      <bar-progress :percentage="50" label-type="3" />
    </demo-block>
    <demo-block title="自定义标题">
      <bar-progress :percentage="50" label-type="2">
        <div style="width: 4em; color: #999; font-size: 12px">完成度</div>
      </bar-progress>
    </demo-block>
    <demo-block title="自定义文字">
      <bar-progress :percentage="50" label-type="2">
        <template slot="value">
          <div style="width: 4em; color: #999; text-align: right">(50)</div>
        </template>
      </bar-progress>
    </demo-block>
  </demo-section>
</template>
