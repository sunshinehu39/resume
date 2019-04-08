<template>
  <div style="color: white;padding: 10px 10px 20px 20px;text-align: left">
    <div class="work-exp-list">
      <div class="work-exp">
        <div class="work-exp-list__point">
          <i class="work-exp-list__point__ico"></i>
          2015年8月 – 至今
        </div>
        <div>
          <div class="x" style="align-items: center;">
            <div>
              <img class="logo" src="../../../static/images/DOS大学logo.png">
            </div>
            <div class="name">DOS大学</div>
            <div class="job">&ensp;—— 前端开发工程师</div>
          </div>
          <div class="des">负责PC端和移动端的官网（6个）和微信小程序（2个）的UI设计、前端开发，以及动态效果和后端业务的实现。创立并运营两大学习社群（付费会员826人，累计学员2497人）、审核优化课程64门、组织策划活动1257场。</div>
        </div>
      </div>
      <div class="work-exp">
        <div class="work-exp-list__point">
          <i class="work-exp-list__point__ico"></i>
          2011年7月 - 2015年8月
        </div>
        <div>
          <div class="x" style="align-items: center;">
            <div>
              <img class="logo" src="../../../static/images/成都建材院logo.png">
            </div>
            <div class="name">成都建材院</div>
            <div class="job">&ensp;—— 国际物流工程师</div>
          </div>
          <div class="des">驻国外项目现场，负责项目设备和物资的采购品控、出口报关、验货装船、进口清关、精细库存，制作相关物流单据，协调安排海运、铁路运输和空运等。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'worklife'
  }
</script>

<style scoped>
  .work-exp-list__point {
    height: 26px;
    line-height: 26px;
    margin: 15px 0;
    padding-left: 15px;
    position: relative;
  }

  .work-exp-list__point__ico {
    background: rgba(175,51,28,1);
    border-radius: 50%;
    font-size: 0;
    height: 18px;
    left: -11px;
    margin: 4px 0;
    position: absolute;
    top: 0;
    width: 18px;
  }

  .work-exp-list {
    border-left: 4px solid #ccc;
    margin-left: 8px;
    padding: 1px 0;
  }

  .name {
    font: bold 20px "Microsoft YaHei";
  }

  .logo {
    height: 30px;
    margin-left: 15px;
    margin-right: 10px;
  }

  .des {
    padding: 10px 0px;
    white-space: pre-wrap;
    margin-left: 15px;
    line-height: 20px;
    font-size: 12px;
    text-align: justify;
  }
</style>
