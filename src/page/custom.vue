<template>
  <div class="customContainer">
    <input-component v-model="value111" v-on:search-click = "searchclick"></input-component>
    <xy-pagination :totalElements=50 :pageChangeEvent="queryOrderList" ></xy-pagination>
  </div>
</template>

<script>
import inputComponent from '@/components/inputComponent';
import xyPagination from '@/components/xyPagination';
export default {
  data() {
    return {
      value111 : ''
    };
  },
  components:{
    inputComponent,
    xyPagination
  },
 
  methods:{
    searchclick(data){
      // console.log(data);
      console.log(this.value111);
    },

    queryOrderList(page){
      console.log(page);
    }
  }
};
</script>

<style scoped>
.customContainer {
  margin: 20px;
}
</style>
