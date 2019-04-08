<template>
  <div style="height: 100%;">
    <div  style="height: 70%;text-align: center;margin:20px auto;" id="main"></div>
    <div class="x sq">
      <button @click="showCertificate" style="background: rgba(175,51,28,0.93)">学习证书</button>

      <button @click="showNotes"  style="background: rgba(175,51,28,0.93)">编程笔记</button>

    </div>
  </div>
</template>

<script>

  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts')
  // 引入雷达图
  require('echarts/lib/chart/radar')

  export default {
    name: 'skills',
    data() {
      return {
        imgs: [
          require('../../../static/images/Certificates/学习证书-前端基础.png'),
          require('../../../static/images/Certificates/学习证书html.png'),
          require('../../../static/images/Certificates/学习证书css.png'),
          require('../../../static/images/Certificates/学习证书js.png'),
          require('../../../static/images/Certificates/学习证书jquery.png'),
          require('../../../static/images/Certificates/学习证书《Git微课》.png')
        ]
      }
    },
    methods: {
      showCertificate() {
        this.$createImagePreview({
          imgs: this.imgs
        }).show()
      },
      showNotes() {
        this.$createDialog({
          type: 'alert',
          title: '友情提示',
          content: '完整版请用电脑访问 \n http://dosjh.club/it'
        }).show()

        this.notesComp = this.notesComp || this.$createNotes({
          $props: {
          }
        })
        this.notesComp.show()
      }
    },
    mounted () {
      var myChart = echarts.init(document.getElementById('main'))
      myChart.setOption({
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          data: []
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: 'white',
              backgroundColor: null,
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: 'Vue2  vue-router  vuex  vue-resource', max: 100 },
            { name: 'HTML5', max: 100 },
            { name: 'CSS3 ', max: 100 },
            { name: 'Javascript ', max: 100 },
            { name: 'Python3   Django2   Mysql', max: 100 },
            { name: 'jQuery', max: 100 },
            { name: 'Stylus', max: 100 },
            { name: 'Cube-UI', max: 100 }
          ]
        },
        series: [{
          name: '',
          type: 'radar',
          data: [
            {
              value: [80, 90, 90, 80, 80, 80, 80, 80],
              name: ''
            }
          ]
        }]
      })
    }
  }
</script>

<style lang="stylus" scoped>
  >>> .cube-dialog-content-def > p{
    text-align: center ;
    font-family: "Microsoft YaHei";
  }

</style>
