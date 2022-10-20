<template>
  <div class="resume">
    <div class="main">
      <div class="grid-item" id="grid1">
        <div class="avatar"></div>
        <div class="name">于风洁</div>
      </div>
      <div class="grid-item" id="grid2">
        <div class="title">基本信息</div>
        <div class="item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <span>工作经验 1年</span>
        </div>
        <div class="item">
          <i class="fa fa-birthday-cake" aria-hidden="true"></i>
          <span>23岁</span>
        </div>
        <div class="item">
          <i class="fa fa-mars" aria-hidden="true"></i>
          <span>男</span>
        </div>
        <div class="item">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <span>齐鲁工业大学</span>
        </div>
        <div class="item">
          <i class="fa fa-bookmark" aria-hidden="true"></i>
          <span>本科</span>
        </div>
        <div class="item">
          <i class="fa fa-pie-chart" aria-hidden="true"></i>
          <span>计算机科学与技术</span>
        </div>
      </div>
      <div class="grid-item" id="grid3">
        <div class="title">
          练习方式
        </div>
        <div class="item">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <span>17854118501</span>
        </div>
        <div class="item">
          <i class="fa fa-weixin" aria-hidden="true"></i>
          <span>17854118501</span>
        </div>
      </div>
      <div class="grid-item" id="grid4">
        <div class="item">
          <i class="fa fa-git" aria-hidden="true"></i>
          <a target="_blank" href="https://gitee.com/yfj44">我的码云</a>
        </div>
      </div>

      <div class="grid-item" id="grid5">
        <div class="title">
          <i class="fa fa-wrench" aria-hidden="true"></i>
          技术栈
        </div>
        <div class="item">JS + Html + Css</div>
        <div class="item">Vue2 + Vue3 + 全家桶</div>
        <div class="item">TS</div>
      </div>
      <div class="grid-item" id="grid6">
        <div class="title">
          <i class="fa fa-bell" aria-hidden="true"></i>
          做的东西
        </div>
        <div class="item">
          用css+vue写了一些组件
          <a target="_blank" href="http://39.106.40.77:8080/componentCss">
            点我查看
          </a>
        </div>
        <div class="item">
          用vue+ts+oplayer写了一个地图的demo
          <a target="_blank" href="http://39.106.40.77:8081/">点我查看</a>
        </div>
        <div class="item">
          模仿写了一些页面
          <a target="_blank" href="http://39.106.40.77:8080/pageDeepwork">
            DeepWork
          </a>
          <a target="_blank" href="http://39.106.40.77:8080/pageHtml5_1">
            响应式页面1
          </a>
          <a target="_blank" href="http://39.106.40.77:8080/pageHtml5_2">
            响应式页面2
          </a>
        </div>
        <div class="item">
          用 css / svg / echarts 写了一些图表组件
          <a target="_blank" href="http://39.106.40.77:8080/componentChart">
            点我查看
          </a>
        </div>
      </div>
      <div class="grid-item" id="grid7">
        <div class="title">
          <i
            class="fa fa-american-sign-language-interpreting"
            aria-hidden="true"
          ></i>
          项目经历
        </div>
        <div class="item">
          2020.7-2021.5 济南山海图经
        </div>
        <div class="item">
          使用promise封装Axios,跟后端协同对接接口
        </div>
        <div class="itme">
          在3D-Map中使用cesium / oplayer 图层切换,地图标记
        </div>
        <!-- <div class="item">
          使用D3写了一个类似CAD的东西
          <a href="https://gitee.com/yfj44/vue3-draw-js">点我查看</a>
        </div> -->
        <div class="item">
          在 一个大屏的数据展示系统 里写了一些图表组件
        </div>
        <div class="item">
          使用python爬取全球的Dem文件,使用gdal库解析高程值,并部署到linux服务器中
          <a target="_blank" href="https://gitee.com/yfj44/get-px-by-lon-lat">
            点我查看
          </a>
        </div>
        <div class="item">
          封装Cesium常用功能,使用Webpack/rollup导出压缩库
          <a target="_blank" href="https://gitee.com/yfj44/cesium-bundle">
            点我查看
          </a>
        </div>
        <div class="item">Three.js稍有涉猎</div>
        <div class="item">React正在学习...</div>
        <div class="item">
          <a
            target="_blank"
            style="font-weight: 900; font-size:1.2rem"
            href="http://39.106.40.77:8080/resume"
          >
            简历在线地址
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "./me.scss";
</style>
