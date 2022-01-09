<template>
  <div class="tabbaritem" @click="itemClick">
    <slot></slot>
    <!-- <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle()">
      <slot name="item-text"></slot>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    computed: {
      // itemActive() {
      //   return { color: this.activeColor };
      // },
      // itemActive(){
      //   color: 'red';
      // },
      // isActive() {
      //   return this.$route.path.indexOf(this.path) !== -1;
      // },
    },
    props: {
      path: {
        type: String,
        default: "",
      },
      // activeColor: {
      //   type: String,
      //   default: "red",
      // },
    },
    methods: {
      itemClick() {
        // console.log(this.path);
        this.$router.replace(this.path);
        // this.$router.push(this.path);
      },
      // activeStyle() {
      //   return this.$route.path.indexOf(this.path) !== -1
      //     ? { color: this.activeColor }
      //     : {};
      // },
    },
  };
</script>

<style>
  /* .tabbaritem {
  flex: 1;
  height: 49px;
  font-size: 15px;
  text-align: center;
}
.tabbaritem img {
  width: 24px;
  height: 24px;
} */
</style>