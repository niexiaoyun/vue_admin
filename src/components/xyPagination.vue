<template>
  <div class="paginationContainer">
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :total="totalElements"
      :background="background"
      :layout="layout"
      :prev-text="prevtext"
      :next-text="nexttext"
      :hide-on-single-page="hideOnSinglePage"
      @current-change="pageChangeEvent"
      @next-click="pageChangeEvent"
      @prev-click="pageChangeEvent"
    />
  </div>
</template>

<script>
export default {
  props: {
    /**
     * 总条目数
     * 默认 0
     */
    totalElements: {
      type: Number,
      default: 0
    },
    /**
     * 当前页数
     * 默认 第一页
     */
    currentPage: {
      type: Number,
      default: 1
    },
    /**
     * 每页显示个数
     * 默认 10
     */
    pageSize: {
      type: Number,
      default: 10
    },
    /**
     * 组件布局
     *
     */
    layout: {
      type: String,
      default: "total, prev, pager, next, jumper"
    },
    /**
     * 替代图标显示的上一页文字
     * 默认 "上一页"
     */
    prevtext: {
      type: String,
      default: "上一页"
    },
    /**
     * 替代图标显示的下一页文字
     * 默认 "下一页"
     */
    nexttext: {
      type: String,
      default: "下一页"
    },
    /**
     * 是否为分页按钮添加背景颜色
     * 默认 添加
     */
    background: {
      type: Boolean,
      default: true
    },
    /**
     * 只有一页时是否隐藏分页
     * 默认 隐藏
     */
    hideOnSinglePage: {
      type: Boolean,
      default: true
    },
    /**
     * 页码改变事件
     */
    pageChangeEvent: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
.paginationContainer {
  display: flex;
  justify-content: flex-end;
}
</style>
