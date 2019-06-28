<template>
  <div class="inputComponentContainer">
    <el-input
        v-model="inpuString"
      placeholder="请输入内容"
      size="small"
      style="width:200px;margin-right:10px;"
    ></el-input>
    <el-button type="primary" size="small" @click="searchBtnClick">搜索</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inpuString: ""
    };
  },
//   model: {
//     prop: "inpuString",
//     event: 'change'
//   },

  methods: {
    searchBtnClick() {
      console.log("111");
      this.$emit("search-click", this.input);
    }
  }
};
</script>

<style scoped>
.inputComponentContainer {
  background-color: greenyellow;
}
</style>