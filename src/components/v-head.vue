<template>
  <div class="x" style="padding: 5px">
    <div class="grow" style="display: flex;align-items: center">
      <img @click="showImagePreview" style="border-radius: 50%;margin: 0 auto"
           src="../../static/images/朝阳.jpg" height="64px">
    </div>
    <div class="grow" style="line-height: 25px;margin-top: 10px">
      <div style="line-height: 35px;height: 35px ">
        <span class="name">胡晨辉 (Sunshine)</span>
        <a href="https://github.com/sunshinehu39">
          <img src="../../static/images/github.png" height="20px" style="margin: 0 0 -3px 10px">
        </a>
      </div>
      <p>
        <a href="tel:13908056224">13908056224</a> |
        <a href="mailto:603092378@qq.com">603092378@qq.com</a>
      </p>
      <p>
        <a href="https://baike.baidu.com/item/武汉理工大学" style="color: #2c3e50">
          武汉理工
        </a>
        本科 &ensp; 求职：前端开发</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-head',
    data () {
      return {
        imgs: [
          require('../../static/images/朝阳.jpg')
        ]
      }
    },
    methods: {
      showImagePreview () {
        this.$createImagePreview({
          imgs: this.imgs
        }).show()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  a
    text-decoration none

  .name
    font bold 20px "Microsoft YaHei"

</style>
