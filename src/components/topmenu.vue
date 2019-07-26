<template>
  <div class="headerContainer">
    <div class="leftContent">

      <!-- 折叠按钮 -->
      <i class="el-icon-menu" @click="collapseChange" style="margin-left:20px;"></i>
      <!-- 面包屑 -->
      <div class="breadcrumbContainer">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <!-- <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item> -->
          <el-breadcrumb-item
            v-for="(item) in breadArray"
            :key="item.path"
            :to="{path: item.path}"
          >{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

    </div>


    <div style="display:flex; justify-centent:center; margin-right:30px">
      <!-- 头像 -->
      <div class="userAvator">
        <img src="@/assets/headerImage.jpg">
      </div>
    </div>

  </div>
</template>

<script>
import bus from "./bus";
export default {
  data() {
    return {
      collapse: false,
      breadArray: []
    };
  },
  methods: {
    // 折叠按钮点击
    collapseChange() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
    //获取面包屑路径
    getBreadcrumb() {
      var matched = this.$route.matched;
      if (matched.length > 1) {
        const item = matched[1];
        if (item.meta.title === "首页") {
          matched = [item];
        } else {
          const item = matched[0];
          item.path = item.path === "" ? "/home" : item.path;
        }
      }
      this.breadArray = matched;
    }
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  }
};
</script>

<style>
.headerContainer {
  /*width: 100%;*/
  height: 70px;
  padding: 0px;
  margin: 0px;
  /* background-color: greenyellow; */
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.leftContent{
  display: flex;
  justify-content: center;
}
.breadcrumbContainer {
  margin-left: 20px;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.userAvator {
  display: flex;
  justify-content: center;
}
.userAvator img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
</style>


