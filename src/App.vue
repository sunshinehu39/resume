<template>
  <div id="app" class="flexwidth">
   <v-head></v-head>
    <div class="tab-wrapper flexwidth">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
import vHead from 'components/v-head'
import Tab from 'components/tab/tab'
import Skills from 'components/body/skills'
import Works from 'components/body/works'
import WorkLife from 'components/body/worklife'

export default {
  name: 'app',
  computed: {
    tabs() {
      return [
        {
          label: '专业技能',
          component: Skills,
          data: {

          }
        },
        {
          label: '项目作品',
          component: Works,
          data: {

          }
        },
        {
          label: '工作经历',
          component: WorkLife,
          data: {

          }
        }
      ]
    }
  },
  components: {
    vHead,
    Tab
  }
}
</script>
<style lang="stylus">
  >>> .cube-dialog-content-def > p{
    text-align: center ;
    font-family: "Microsoft YaHei";
  }

#app
  font-family "Microsoft YaHei",'Avenir', Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  margin 0 auto
  .tab-wrapper
    position: fixed
    top: 110px
    left: 0
    right: 0
    bottom: 0
    margin 0 auto
</style>
