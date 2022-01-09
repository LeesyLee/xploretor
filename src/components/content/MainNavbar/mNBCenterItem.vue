<template>
  <div class="navbaritem" @click="centeritemClick">
    <div @click="itemClick" path="/home">首页</div>
    <div @click="itemClick" path="/visualization">可视化</div>
    <div @click="itemClick" path="/relay">节点信息查询</div>
    <div @click="itemClick" path="/deploy">节点部署</div>
    <div @click="itemClick" path="/docker">容器状态</div>
    <div @click="itemClick" path="/etc">其他操作</div>
  </div>
</template>

<script>
  export default {
    name: "MainNavBarItemCenter",
    methods: {
      itemClick() {
        console.log(this.path);
        // this.$router.push(this.path);
      }
    },
    props: {
      path: {
        type: String,
        default: ""
      }
    }
  };
</script>

<style scoped>

</style>