<template>
  <div class="app" id="app">
    <router-view></router-view>
    <main-nav-bar></main-nav-bar>
  </div>
</template>

<script>
  import MainNavBar from 'components/content/MainNavbar/mainNavBar'
  export default {
    name: 'App',
    components: {
      MainNavBar
    }
  }
</script>

<style>
  @import "./assets/css/base.css";

  .app {
    padding-top: 60px;
    width: 100%;
    min-height: 100vh;
    background: url('assets/img/home_bg.jpg') no-repeat;
    overflow: hidden;
  }
</style>