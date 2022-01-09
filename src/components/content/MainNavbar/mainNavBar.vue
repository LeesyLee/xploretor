<template>
  <div class="nav-bar">
    <div class="nav-bar-content">
      <div class="left">
        <slot name="left">
          <a href="">
            <img src="../../../assets/img/navbar_left_logo01.png" alt="" class="navbar_logo">
          </a>
          <span style="vertical-align: middle;">|</span>
          <a href="">
            <img src="../../../assets/img/navbar_left_logo02.jpg" alt="" class="navbar_logo">
          </a>
        </slot>
      </div>
      <div class="center">
        <tab-bar>
          <tab-bar-item path="/home">
            <div>首页</div>
          </tab-bar-item>
          <tab-bar-item path="/visualization">
            <div>可视化</div>
          </tab-bar-item>
          <tab-bar-item path="/relay">
            <div>节点信息查询</div>
          </tab-bar-item>
          <!-- <tab-bar-item path="/deploy">
            <div>节点部署</div>
          </tab-bar-item> -->
          <tab-bar-item path="/docker">
            <div>容器管理</div>
          </tab-bar-item>
          <tab-bar-item path="/database">
            <div>数据库管理</div>
          </tab-bar-item>
          <tab-bar-item path="/etc">
            <div>其他</div>
          </tab-bar-item>
        </tab-bar>
        <!-- <slot name="center">
          <div @click="itemClick">首页</div>
          <div @click="itemClick">可视化</div>
          <div @click="itemClick">节点信息查询</div>
          <div @click="itemClick">节点部署</div>
          <div @click="itemClick">容器状态</div>
          <div @click="itemClick">其他操作</div>
        </slot> -->
      </div>
      <div class="right">
        <slot name="right">
          <div class="login-btn">
            <div v-on:click="btnClick">登录</div>
            <div v-on:click="btnClick">注册</div>
          </div>
        </slot>
      </div>
    </div>

  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "NavBar",
    components: {
      TabBar,
      TabBarItem
    },
    props: {
      path: String
    },
    data() {
      return {

      }
    },
    methods: {
      btnClick() {
        console.log('btnClick');
        // console.log(btn);
        this.$router.replace('/login');
      }
    }
  };
</script>

<style scoped>
  .nav-bar {
    background: transparent;
    color: #a6a9ad;
    line-height: 56px;
    font-size: 14px;
    position: absolute;
    width: 100%;
    min-width: 1280px;
    z-index: 100;
    top: 0;
  }

  .nav-bar-content {
    /* display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0px 1px 2px rgba(100, 100, 100, .3); */
    padding: 0 32px;
    height: 56px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    white-space: nowrap;
  }

  .left,
  .right {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    /* background-color: pink; */
  }

  .right {
    text-align: right;
  }

  .left .navbar_logo {
    height: 30px;
    vertical-align: middle;
    padding: 0 10px;
  }



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

  /* .center .center-alink {
    padding: 0 25px;
  } */


  .right .login-btn div {
    display: inline-block;
    margin-left: 12px;
    color: #fff;
    text-align: center;
    line-height: normal;
    cursor: pointer;
  }

  .right .login-btn div:first-child {
    width: 48px;
    margin-left: 0;
  }

  .right .login-btn div:nth-child(2) {
    padding: 2px 16px;
    border: 1px solid #fff;
  }
</style>