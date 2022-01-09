<template>
  <!-- 创建封装容器 -->
  <div class="container" v-bind:class="{penalrightactive: isActive}" id="container">

    <!-- 注册页面 -->
    <div class="form-container sign-up-container">
      <form action="#">
        <h1>注 册</h1>
        <!-- 公共组件 -->
        <div class="social-container">
          <a href="#"><i class="fab fa-qq"></i></a>
          <a href="#"><i class="fab fa-weixin"></i></a>
          <a href="#"><i class="fab fa-weibo"></i></a>
        </div>
        <input type="text" name="userName" id="userName" placeholder="请输入用户名">
        <input type="email" name="email" id="email" placeholder="请输入邮箱">
        <input type="password" name="password" id="password" placeholder="请输入密码">
        <button>注 册</button>
      </form>
    </div>

    <!-- 登录页面 -->
    <div class="form-container sign-in-container">
      <form action="#">
        <h1>登 录</h1>
        <!-- 公共组件 -->
        <div class="social-container">
          <a href="#"><i class="fab fa-qq"></i></a>
          <a href="#"><i class="fab fa-weixin"></i></a>
          <a href="#"><i class="fab fa-weibo"></i></a>
        </div>
        <input type="email" name="email" id="email" placeholder="请输入用户名">
        <input type="password" name="password" id="password" placeholder="请输入密码">
        <a href="#" class="forget">忘记密码?</a>
        <button>登 录</button>
      </form>
    </div>

    <!-- 覆盖容器 -->
    <div class="overlay-container">
      <div class="overlay">

        <!-- 覆盖左边 -->
        <div class="overlay-penal overlay-left-container">
          <h1>welcome back!</h1>
          <p>
            To keep connected with us please login with your personal info
          </p>
          <button class="ghost" id="signIn" @click=signInClick>登 录</button>
        </div>

        <!-- 覆盖右边 -->
        <div class="overlay-penal overlay-right-container">
          <h1>Hello Friend!</h1>
          <p>
            Enter your personal details and start journey with us
          </p>
          <button class="ghost" id="signUp" @click=signUpClick>注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        isActive: {
          type: Boolean,
          default: false
        }
      };
    },
    computed: {

    },
    components: {
    },
    methods: {
      signInClick() {
        this.isActive = false;
        console.log(this.isActive);
      },
      signUpClick() {
        this.isActive = true;
        console.log(this.isActive);
      }
    }

  };
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  /* body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #F6F5F7;
  } */

  button {
    outline: none;
    border: 1px solid rgba(8, 36, 73);
    border-radius: 20px;
    background-color: rgba(8, 36, 73);
    padding: 10px 40px;
    font-size: 12px;
    text-transform: uppercase;
    color: white;
    transition: transform 85ms ease-in;
  }

  h1 {
    text-transform: capitalize;
    font-size: 30px;
  }

  p {
    margin: 10px 0 30px;
  }

  button:active {
    transform: scale(.95);
  }

  .ghost {
    background-color: transparent;
    border-color: white;
  }


  .container {
    position: relative;
    margin-top: 95px;
    left: 47%;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    background-color: white;
    box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
    border-radius: 10px;
    overflow: hidden;
  }

  .form-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 100%;
    width: 50%;
    padding: 0 40px;
    transition: all .65s ease-in-out;
  }

  .form-container form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-container input {
    width: 100%;
    height: 40px;
    margin: 8px 0;
    background-color: #EEEEEE;
    border: none;
    font-size: 14px;
    padding: 0 20px;
  }

  .sign-in-container {
    z-index: 10;
  }

  .sign-up-container {
    z-index: 5;
  }

  .social-container {
    display: flex;
  }

  .social-container a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ddd;
    line-height: 40px;
    text-align: center;
    color: #333;
    margin: 20px 8px;
  }

  .social-container a:hover {
    background-color: #222F3E;
    color: white;
    border-color: #CBCBCC;
  }

  .overlay-container {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(8, 36, 73);
    overflow: hidden;
    transition: transform .65s ease-in-out;
    z-index: 100;
  }

  .overlay {
    position: absolute;
    display: flex;
    left: -100%;
    width: 200%;
    height: 100%;
    /* background: linear-gradient(to right, (49, 105, 125), (9, 15, 37)); */
  }

  .overlay-penal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 0 40px;
    text-align: center;
    color: white;
    font-size: 12px;
  }

  .forget {
    height: 20px;
    color: #9AA9B7;
    text-decoration: none;
    margin: 5px 0 15px;
    font-size: 12px;
    text-transform: capitalize;
  }

  .forget:hover {
    border-bottom: 2px rgba(0, 31, 60) solid;
  }

  .overlay-left-container {
    transform: translateX(10%);
    transition: transform .65s ease-in-out;
  }

  .overlay-right-container {
    transform: translateX(0);
    transition: transform .65s ease-in-out;
  }

  .container.penalrightactive .sign-in-container {
    z-index: 5;
    transform: translateX(100%);
  }

  .container.penalrightactive .sign-up-container {
    z-index: 10;
    transform: translateX(100%);
  }

  .container.penalrightactive .overlay-container {
    transform: translateX(-100%);
  }

  .container.penalrightactive .overlay {
    transform: translateX(50%);
  }

  .container.penalrightactive .overlay-left-container {
    transform: translateX(0);
  }

  .container.penalrightactive .overlay-right-container {
    transform: translateX(-10%);
  }
</style>