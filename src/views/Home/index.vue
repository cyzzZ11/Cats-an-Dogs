<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <!-- Floor这个组件：自己在组件内部是没有发请求的，数据是父组件给的 -->
    <!-- <Floor /> -->
    v-for="(floor,index) in floorList" :key="floor.id" :list="floor"
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./listContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Brand from "./Brand";
// import Floor from "./Floor";
// import {mapState} from 'vuex'
export default {
  name: "home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Brand,
    // Floor,
  },
  computed:{},
  methods: {}
  
};
</script>

<style>
</style>