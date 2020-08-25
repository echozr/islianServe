<template>
  <div  class="sidebar">
    <el-menu class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router>
      <template v-for="item in menus">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index"  >
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
                </el-submenu>
                <el-menu-item  v-else  :index="subItem.index"  :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menus: [
        {
          icon: 'el-icon-s-home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-s-shop',
          index: 'popular',
          title: '期刊管理'
        },
        {
          icon: 'el-icon-s-management',
          index: 'books',
          title: '书籍管理'
        },
        {
          icon: 'el-icon-s-tools',
          index: 'authority',
          title: '权限管理',
          subs: [
            {
              index: 'user',
              title: '用户管理'
            },
            {
              index: 'role',
              title: '角色管理'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>
<style lang="less" scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
    }
    ul{
      height: 100%;
    }
}
</style>
