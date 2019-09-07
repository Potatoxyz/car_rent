<template>
    <div class="page-wrap login-wrap">
      <div class="car-img">
        <img src="@/assets/images/car.png" alt="">
      </div>
      <div class="register">
        <router-link :to="'/register'">注册</router-link>
      </div>
      <div class="login-box">
        <p class="title">登录</p>
        <div class="input-item">
          <img src="@/assets/images/phone_black.png" alt="" class="prepend">
          <input type="number" placeholder="手机号">
        </div>
        <div class="input-item">
          <img src="@/assets/images/pwd_lock_black.png" alt="" class="prepend">
          <input type="number" placeholder="密码">
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
  background: #fff;
  .login-box{
    position: absolute;
    bottom: 100px;
    width: 295px;
  }
  .car-img{
    position: absolute;
    right: 0;
    width: 250px;
    top: 140px;
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
      color:rgba(166,166,179,1);
    }
  }
  .action{
    margin-top: 30px;
    button{
      width: 164px;
    }
  }
</style>
