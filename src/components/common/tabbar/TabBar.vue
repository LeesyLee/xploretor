<template>
  <div class="center" id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
  };
</script>

<style>
  /* #tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
} */
  .center {
    /* background-color: tomato; */
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 2;
    flex-grow: 2;
    text-align: left;
  }

  .center div {
    display: inline-block;
    vertical-align: middle;
    outline: none;
    color: #a6a9ad;
    padding: 0 25px;
    cursor: pointer;
  }
</style>