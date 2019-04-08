<template>
  <transition
    name="move"
    @after-leave="afterLeave"
  >
    <div class="notecontent fixedFlexWidth" v-show="visible">
      <!--顶部回退、搜索-->
      <div class="x sq" style="align-items: center;padding: 10px 0px;">

        <div @click="hide" style="width: 60px;text-align: center">
          <i class="icon-arrow_lift"></i>
        </div>
        <input type="search" class="grow" v-model="search" placeholder="你想找什么？"
               style="height:30px;padding: 0 10px;margin-right: 60px">
      </div>

      <cube-scroll ref="scroll">
        <div class="notelist">

          <div class="item" v-for="(note,index) in filternotes" :key="index" @click="selectNote(note)">
          {{note.title}}
          </div>

        </div>

        <router-view></router-view>
      </cube-scroll>

    </div>
  </transition>

</template>

<script>
  import popupMixin from 'common/mixins/popup'
  import ITnoteData from '../../../ITnote.json'

  const EVENT_SHOW = 'show'
  const EVENT_LEAVE = 'leave'

  export default {
    name: 'notes',
    mixins: [popupMixin],
    data () {
      return {
        notes: ITnoteData.RECORDS,
        selectedNote: {},
        search: ''
      }
    },
    created () {
      this.$on(EVENT_SHOW, () => {
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      })
    },
    computed: {
      filternotes: function () {
        return this.notes.filter((note) => {
          return note.title.match(this.search)
        })
      }
    },
    methods: {
      afterLeave () {
        this.$emit(EVENT_LEAVE)
      },
      selectNote(note) {
        this.selectedNote = note
        this.noteComp = this.noteComp || this.$createNote({
          $props: {
            note: 'selectedNote'
          }
        })
        this.noteComp.show()
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

  .notecontent
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

  .notelist
    margin 10px
    text-align left

    .item
      line-height 30px
      height 30px
      border-bottom 1px solid grey
      padding 5px
      margin 5px
</style>
