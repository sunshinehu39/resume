<template>
  <div class="works">
    <div class="scroll-nav-wrapper">
      <cube-scroll :options="scrollOptions">

        <div class="work x" @click="selectWork(work)" v-for="(work,index) in works" :key="index">
          <div class="type">{{work.type}}</div>
          <div class="name">{{work.name}}</div>
          <div class="skills grow">{{work.tips}}</div>
          <div class="days">{{work.days}}</div>
        </div>

      </cube-scroll>
    </div>
  </div>
</template>

<script>
  import { getWorks } from 'api'

  export default {
    name: 'works',
    data () {
      return {
        works: [],
        selectedWork: {},
        scrollOptions: {
          click: false,
          directionLockThreshold: 0
        }
      }
    },
    created () {
      getWorks().then((works) => {
        this.works = works
      })
    },
    methods: {
      selectWork(work) {
        this.selectedWork = work
        this.workComp = this.workComp || this.$createWork({
          $props: {
            work: 'selectedWork'
          }
        })
        this.workComp.show()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .works
    position: relative
    height: 100%
    color white

    .scroll-nav-wrapper
      position: absolute
      width: 100%
      top: 0
      left: 0
      bottom 0

      .work
        height 60px
        line-height 60px
        align-items center
        border-bottom white 1px solid
        padding 0px 10px

      .type
        background rgba(175,51,28,0.93)
        border-radius 5px
        font-size 12px
        height 20px
        line-height 20px
        width 40px
        vertical-align middle
        display: table-cell;

      .name

        font-size 18px
        margin 0px 10px

      .skills
        font-size 10px

      .days
        margin 0px 10px
        font-size 10px
</style>
