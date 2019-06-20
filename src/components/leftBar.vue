<template>
  <div class="leftBar">
    <el-menu
      mode="vertical"
      :default-active="defaultActive"
      style="min-height: 100%;"
      theme="dark"
      router
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="user">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">用户</span>
        </template>


        <el-menu-item index="userlist">
          <span slot="title">用户列表</span>
        </el-menu-item>
          <el-menu-item index="userdetail">
          <span slot="title">用户详情</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/p">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">财务管理</span>
        </template>

        <el-submenu index="fin">
          <span slot="title">财务统计</span>
          <el-menu-item index="userlist1">财务明细</el-menu-item>
          <el-menu-item index="userdetail">用户详情</el-menu-item>
        </el-submenu>

        <el-menu-item index="/">
          <span slot="title">发票管理</span>
        </el-menu-item>

        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      
    </el-menu>
  </div>
</template>

<script>
import bus from "./bus";
export default {
  name: "leftbar",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {},

  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // this.isCollapse = true;
  },
  mounted() {
    bus.$on("collapse", collapse => {
      this.isCollapse = collapse;
    });
  }
};
</script>

<style scoped>
.leftBar {
  overflow: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
