<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%; width:100%;" type="flex">
      <div style=" backgroundColor:#545c64; height:100%; ">
        <leftbar></leftbar>
      </div>
      <div style="height:100%;width:100%;margin-left:2px;margin-right:10px;backgroundColor:#e1e2e3">
        <topmenu></topmenu>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </el-row>
  </div>
</template>

<script>
import leftbar from "./leftBar";
import topmenu from "./topmenu";
export default {
  components: {
    leftbar,
    topmenu
  }
};
</script>


<style>
</style>

