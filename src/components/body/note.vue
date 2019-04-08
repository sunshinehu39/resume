<template>
  <transition
    name="move"
    @after-leave="afterLeave"
  >
    <div class="content fixedFlexWidth" v-show="visible">
      <!--顶部回退、标题-->
      <div class="topBar x sq" style="align-items: center;padding: 10px 0px;">

        <div @click="hide" style="width: 60px;text-align: center">
          <i class="icon-arrow_lift"></i>
        </div>
        <div @click="top" class="grow title">{{note.title}}</div>
      </div>

      <cube-scroll ref="scroll">
        <div class="noteContent" v-html="note.content"></div>
      </cube-scroll>

    </div>
  </transition>
</template>

<script>
  import popupMixin from 'common/mixins/popup'

  const EVENT_SHOW = 'show'
  const EVENT_LEAVE = 'leave'

  export default {
    name: 'note',
    mixins: [popupMixin],
    props: {
      note: {
        type: Object
      }
    },
    created () {
      this.$on(EVENT_SHOW, () => {
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      })
    },
    methods: {
      afterLeave () {
        this.$emit(EVENT_LEAVE)
      },
      top() {
        this.$refs.scroll.scrollTo(0, 0)
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

  .topBar
    font-size 20px
    font-family "Microsoft YaHei"
    font-weight bold
    line-height 40px
    height 40px
    background: #2c3e50
    color white

  >>> pre
    code
      white-space:pre-wrap
      overflow-x scroll

  .content
    position: fixed
    left: 0
    top: 0
    bottom: 0
    z-index: 30
    width: 100%
    background: white
    font-family "Microsoft YaHei"
    padding-bottom 10px

    &.move-enter-active, &.move-leave-active
      transition: all 0.3s linear

    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)

  .noteContent
    line-height 30px
    padding 10px
    >>> blockquote
      font-family "Microsoft YaHei"
      font-size 20px
      line-height 40px
      font-weight bold
      color #1E88E5
      border-left 8px solid  #1E88E5
      padding-left 8px
      margin 15px 0px 15px -10px

</style>
