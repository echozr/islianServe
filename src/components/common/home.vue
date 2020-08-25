<template>
  <div class="wrapper">
    <zr-head @collapse="clooapseControl" />
    <zr-leftMenu :collapse="collapse" />
    <div class="content-box" :class="{'content-collapse':collapse}">
      <zr-tag @tag="tapTag" />
      <div class="content">
          <transition name="move" mode="out-in">
              <keep-alive :include="tagsList">
                  <router-view></router-view>
              </keep-alive>
          </transition>
          <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>
<script>
import zrHead from './header'
import zrLeftMenu from './leftMenu'
import zrTag from './tag'
export default {
  data () {
    return {
      collapse: false,
      tagsList: []
    }
  },
  methods: {
    clooapseControl (val) {
      this.collapse = val
    },
    tapTag (val) {
      const arr = []
      for (let i = 0, len = val.length; i < len; i++) {
        val[i].name && arr.push(val[i].name)
      }
      this.tagsList = arr
    }
  },
  components: {
    zrHead,
    zrLeftMenu,
    zrTag
  }
}
</script>
<style lang="less" scoped>

</style>
