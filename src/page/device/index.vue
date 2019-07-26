<template>
  <div class="indexContainer">
    <div class="searchContainer">
      <el-input
        placeholder="请输入终端号/名"
        style="width:150px"
        clearable
        type="text"
        v-model="listQuery.likeName"
      ></el-input>
      <el-select
        v-model="listQuery.province"
        clearable
        placeholder="请选择省"
        @change="getCityListWithCode($event)"
        @clear="clearProvinceEvent"
        style="width:150px"
      >
        <el-option
          v-for="item in provincesArray"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        ></el-option>
      </el-select>
      <el-select
        v-model="listQuery.city"
        clearable
        placeholder="请选择市"
        no-data-text="请先选择省"
        @change="getDistrictListWithCode($event)"
        @clear="clearCityEvent"
        style="width:150px"
      >
        <el-option
          v-for="item in citysArray"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        ></el-option>
      </el-select>

      <el-select
        v-model="listQuery.district"
        clearable
        placeholder="请选择区"
        no-data-text="请先选择省市"
        style="width:150px"
      >
        <el-option
          v-for="item in districtsArray"
          :key="item.code"
          :label="item.name"
          :value="item.code"
        ></el-option>
      </el-select>

      <el-button @click="searchClick">搜索</el-button>
    </div>
    <el-table v-loading="loading" border :data="listArray">
      <el-table-column prop="deviceNum" label="终端号" align="center"></el-table-column>
      <el-table-column prop="id" label="终端名称" align="center"></el-table-column>
      <el-table-column prop="screenType" label="屏幕类型" align="center"></el-table-column>
    </el-table>

    <xy-pagination
      :totalElements="totalElements"
      :currentPage="listQuery.currentPage"
      :pageChangeEvent="getDeviceList"
    ></xy-pagination>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import xyPagination from "@/components/xyPagination";
import { getDeviceListsRequest } from "@/api/device.js";
import {
  getProvincesListRequest,
  getChildrenListRequest
} from "@/api/address.js";
export default {
  created() {
    const fromPath = this.$store.getters.fromPath;
    const serchInfo = this.$store.getters.searchInfo;

    if (
      !(fromPath == undefined || from.length == 0) &&
      fromPath.search("/detail") != -1
    ) {
      //从设备详情来
      this.listQuery = this.$store.getters.searchInfo;
      
      if (serchInfo != undefined) {
        if (serchInfo.province != "") {
          this.getCityListWithCode(serchInfo.province);
        }
        if (serchInfo.city != "") {
          this.getDistrictListWithCode(serchInfo.city);
        }
      }
    }

    //获取设备列表
    this.getDeviceList(this.listQuery.currentPage);
    //获取省列表
    this.getProvinceList();
  },

  data() {
    return {
      loading: false,
      listArray: [],
      totalElements: 0,
      provincesArray: [],
      citysArray: [],
      districtsArray: [],
      listQuery: {
        likeName: "", //终端名
        province: "", //省id
        city: "", //市id
        district: "", //区id
        currentPage: 1 //当前页码
      }
    };
  },

  methods: {
    //获取设备列表
    getDeviceList(page) {
      getDeviceListsRequest({ page: page })
        .then(response => {
          this.listArray = response.data.content;
          this.totalElements = response.data.totalElements;
          this.listQuery.currentPage = response.data.page;
        })
        .catch(error => {});
    },
    //获取省列表
    getProvinceList() {
      getProvincesListRequest().then(response => {
        this.provincesArray = response.data.content;
      });
    },
    //根据省id获取市列表
    getCityListWithCode(id) {
      console.log(id);
      console.log("getCityListWithCode");
      this.citysArray = [];
      this.districtsArray = [];
      this.listQuery.city = "";
      this.listQuery.district = "";
      if (id == null || id == "") return;
      getChildrenListRequest({ size: 1000, desc: false, parent: id }).then(
        response => {
          this.citysArray = response.data.content;
        }
      );
    },
    //根据市id获取区列表
    getDistrictListWithCode(id) {
      this.districtsArray = [];
      this.listQuery.district = "";
      if (id == null || id == "") return;
      getChildrenListRequest({ size: 1000, desc: false, parent: id }).then(
        response => {
          this.districtsArray = response.data.content;
        }
      );
    },

    clearProvinceEvent() {
      this.listQuery.city = "";
      this.listQuery.district = "";
    },
    clearCityEvent() {
      this.listQuery.district = "";
    },

    searchClick() {
      this.$router.push({ path: "/detail" });
    }
  },
  //注册组件
  components: {
    xyPagination
  },

  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(to.path);
    ///device/detail
    if (to.path.search("/detail") != -1) {
      //保存搜索条件
      console.log(this.listQuery);
      this.$store.dispatch("saveSearchCondition", { ...this.listQuery });
      this.$store.dispatch("saveFromPath", to.path);
    }
    next();
  }
};
</script>


<style scoped>
.searchContainer {
}

.indexContainer {
  margin: 20px;
  background-color: lightgoldenrodyellow;
}
</style>
