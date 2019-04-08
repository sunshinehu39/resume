<template>
  <transition
    name="move"
    @after-leave="afterLeave"
  >
    <div class="content fixedFlexWidth" v-show="visible">
      <cube-scroll ref="scroll">

        <div class="y" style="padding: 5px;">
          <!--logo标题-->
          <div class="x grow" style="line-height: 60px;height:60px;margin: 10px auto">
            <div>
              <img style="border-radius: 50%;margin:10px 15px"
                   :src="work.image" height="40px">
            </div>
            <div>
              <span class="name">{{work.name}}</span>
            </div>
          </div>
          <!--所用技术-->
          <div>
            <div class="x sq" style="flex-wrap: wrap;justify-content: flex-start">
              <div class="skill grow" v-for="(skill,index) in work.skills" :key="index">{{skill}}</div>
            </div>
          </div>
        </div>
        <!--作品截图-->
        <div ref="slideWrapper" class="slide-container">
          <cube-slide
            ref="slide"
            :data="items"
            :initial-index="initialIndex"
            :loop="loop"
            :auto-play="autoPlay"
            :interval="interval"
            :threshold="threshold"
            :speed="speed"
            :options="options"
          >
          </cube-slide>
          <template v-if="dotsSlot" slot="dots" slot-scope="props">
                <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots"
                      :key="index">{{index + 1}}</span>
          </template>
        </div>
        <!--作品描述-->
        <div class="des">{{work.des}}</div>

      </cube-scroll>
      <!--底部按钮-->
      <div class="bottomBar x sq" style="align-items: center">

        <div @click="hide">
          <i class="icon-arrow_lift"></i>
        </div>

        <a :href="work.url" v-if="work.url!='微信小程序'">
          <div class="enter">进入</div>
        </a>
        <a href="" v-else onclick="return false;">
          <div class="enter" >微信小程序</div>
        </a>

        <div>
          <a :href="work.github">
            <img src="../../../static/images/github.png" height="25px" style="vertical-align: middle">
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import popupMixin from 'common/mixins/popup'

  const EVENT_SHOW = 'show'
  const EVENT_LEAVE = 'leave'

  export default {
    name: 'work',
    mixins: [popupMixin],
    props: {
      work: {
        type: Object
      }
    },
    data () {
      return {
        items: [],
        loop: true,
        autoPlay: true,
        interval: 4000,
        threshold: 0.3,
        speed: 400,
        allowVertical: false,
        initialIndex: 1,
        dotsSlot: false
      }
    },
    computed: {
      options () {
        return {
          eventPassthrough: this.allowVertical ? 'vertical' : ''
        }
      }
    },
    created () {
      this.$on(EVENT_SHOW, () => {
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
          this.items = this.work.photos
        })
      })
    },
    methods: {
      afterLeave () {
        this.$emit(EVENT_LEAVE)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin.styl"

  @media (max-width: 1600px)
    .fixedFlexWidth {
      max-width: 50%;
      margin: 0 25%
    }

  @media (max-width: 800px)
    .fixedFlexWidth {
      max-width: 100%;
      margin: 0 auto
    }

  .content
    position: fixed
    left: 0
    top: 0
    bottom: 0
    padding-bottom 50px
    z-index: 30
    width: 100%
    background: #2c3e50
    color white

    &.move-enter-active, &.move-leave-active
      transition: all 0.3s linear

    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)

  .slide-container
    margin: 15px auto
    transform: translateZ(0px)
    border-radius: 2px
    overflow: hidden
    box-shadow: 0 2px 9px #ddd

    >>> .cube-slide-item
      a
        img
          width 100%

    >>> .cube-slide-dots
      bottom 10px

    .cube-slide-dots
      .my-dot
        height: auto
        font-size: 12px
        background: none

        &.active
          color: #fc9153

  a
    text-decoration none

  .name
    font bold 25px "Microsoft YaHei"
    height 60px
    vertical-align middle

  .skill
    background none
    border-radius 5px
    font-size 12px
    height 20px
    line-height 20px
    vertical-align middle
    display table-cell
    padding 0 5px
    margin 5px
    text-align center
    border 1px solid white

  .bottomBar
    bottom 0
    height 50px
    line-height 50px
    background: #2c3e50
    z-index 1000
    color white

    a
      color white
      width 40%
      text-align center

      .enter
        background #4CAF50
        border-radius 10px
        height 30px
        line-height 30px
        font-family "Microsoft YaHei"

  .des {
    padding: 10px;
    white-space: pre-wrap;
    line-height: 20px;
    font-size: 12px;
    text-align: justify;
  }
</style>
