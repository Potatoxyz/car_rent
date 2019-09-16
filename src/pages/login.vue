<template>
    <div class="page-wrap login-wrap">
      <div class="car-img">
        <img src="@/assets/images/car.png" alt="">
      </div>
      <div class="register">
        <router-link :to="'/register'">注册</router-link>
      </div>
      <div class="bg1"></div>
      <div class="bg2"><router-link :to="'/register'">注册</router-link></div>
      <div class="login-box">
        <p class="title">登录</p>
        <div class="input-item">
          <img src="@/assets/images/phone_black.png" alt="" class="prepend">
          <input type="number" placeholder="手机号">
        </div>
        <div class="input-item">
          <img src="@/assets/images/pwd_lock_black.png" alt="" class="prepend">
          <input type="password" placeholder="密码">
        </div>
        <p class="forget"><router-link :to="'/'">忘记密码</router-link></p>
        <p class="action"><button class="m-btn" :class="{'active':loginCheck,'inactive':!loginCheck}">登录</button></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data: function () {
            return {
              loginCheck:false,
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
.login-wrap{
  height: 100vh;
  background: #010115;
  .bg1{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    left: 0;
    top: 0;
    background: url("../assets/images/login_bg1.png") no-repeat;
    background-size: 100%;
    background-position: 100% 100%;
  }
  .bg2{
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 100px;
    z-index: 500;
    background: url("../assets/images/login_bg2.png") no-repeat;
    background-size: 100%;
    background-position: 100% 100%;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    line-height: 100px;
    a{
      position: relative;
      right: 48px;
    }
  }
  .login-box{
    z-index: 1000;
    position: absolute;
    bottom: 100px;
    width: 295px;
  }
  .car-img{
    position: absolute;
    right: 0;
    width: 250px;
    top: 140px;
    z-index: 1000;
    img{
      max-width: 100%;
    }
  }
  .register{
    position: absolute;
    top: 54px;
    right: 57px;
    font-size:18px;
    font-weight:600;
    color:#000;
  }
}
.input-item{
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #CDCDD7;
  color: #22242A;
  margin-bottom: 30px;
  &:last-of-type{
    margin-bottom: 0;
  }
  img {
    width: 17px;
    margin-right: 15px;
  }
  input{
    background: transparent;
    border: none;
    outline: none;
  }
}
.title{
  font-size:28px;
  font-weight:500;
  color:rgba(34,36,42,1);
  margin-bottom: 30px;
  font-weight: bold;
}
  .forget{
    margin-top: 15px;
    a{
      font-size:12px;
      font-weight:600;
      color:#A6A6B3;
      &:active, &:visited, &:link{
        color:#A6A6B3!important;
      }
    }
  }
  .action{
    margin-top: 30px;
    button{
      width: 164px;
    }
  }
</style>
