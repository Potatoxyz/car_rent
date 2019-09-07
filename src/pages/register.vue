<template>
  <div class="page-wrap r-wrap">
    <div class="mask-outside" v-show="showKeyBoard" @click="toggleKeyboard"></div>
    <div class="page-title">
      注册
    </div>
    <p class="re-text"> 请在下方输入您的<br>手机号码。</p>
    <p class="input-label">电话</p>
    <p class="input-box" @click="toggleKeyboard">
      <input type="number" readonly placeholder="手机号" v-model="phone">
      <span class="fake-wrap">
        <span class="fake-number" ref="fakeInputEl" v-for="(value,index) in _phone" :key="'f+'+value">{{value}}</span>
        <span class="fake-cursor" v-show="showKeyBoard" ></span>
      </span>
      <input type="number" class="fake-input" v-model="phone">
    </p>
    <div class="btn-box" :class="{'enter':showKeyBoard,'leave':!showKeyBoard}">
      <button class="m-btn default login"><router-link :to="'/login'">登录</router-link></button>
      <button class="m-btn active next"><router-link :to="'/verifyCode'">下一步</router-link></button>
    </div>
    <FadeAnimation>
      <KeyBoard v-show="showKeyBoard" @inputValue="getInputValue"></KeyBoard>
    </FadeAnimation>
  </div>
</template>

<script>
  import KeyBoard from '../components/keybord'
  import FadeAnimation from '../components/trasition'

  export default {
    name: "register",
    components: {KeyBoard, FadeAnimation},
    data: function () {
      return {
        showKeyBoard: false,
        phone:''
      }
    },
    computed:{
      _phone(){
        return Array.from(this.phone)
      }
    },
    mounted() {
    },
    methods: {
      toggleKeyboard() {
        this.showKeyBoard = !this.showKeyBoard
      },
      getInputValue(val){
        if(val!=''&&val!='clear'){
          this.phone=this.phone+val;
        }
        else{
          if(this.phone.length>0){
            this.phone=this.phone.substring(0,this.phone.length-1);
            console.log(this.phone)
          }
          else
            this.phone=''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .r-wrap{
    padding-top: 50px;
    .mask-outside{
      position: absolute;
      width: 100%;
      height: calc(100vh - 337px);
      top: 0;
      left: 0;
      background: transparent;
    }
  }
  .page-title {
    font-size: 28px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);

    margin-bottom: 86px;
  }

  .re-text {
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 1.7;

    margin-bottom: 25px;
  }

  .input-label {
    font-size: 12px;
    font-weight: 500;
    color: rgba(241, 243, 248, 1);

    margin-bottom: 9px;
  }

  .input-box {
    border-bottom: 1px solid #232323;
    position: relative;
    .fake-wrap{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 24px;
      line-height: 24px;
      .fake-cursor{
        display: inline-block;
        width: 1px;
        background: #fff;
        height: 12px;
        animation: blink .8s linear 0s infinite;
        margin-left: -2px;
      }
      .fake-number{
        display: inline-block;
        color: #fff;
        font-size: 12px;
      }
    }

    .fake-input{
      position: absolute;
      width: 100%;
      background: #fff;
      left: 0;
      top: 0;
      opacity: 0;
    }
    input {
      border: none;
      outline: none;
      background: transparent;
      width: 100%;
      height: 24px;
      margin-bottom: 12px;
      opacity: 0;
    }
  }

  .btn-box {
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 66px;
    transition: all ease .5s;
    &.enter{
      bottom: 293px;
    }
    &.leave{
      bottom: 66px;
    }
    .m-btn {
      border-radius: 10px 0px 0px 10px;
      &.next{
        width: 70%;
      }
      &.login{
        flex: 1;
        text-align: left;
      }
    }
  }
  @keyframes blink {
    0%{
      opacity: 0;
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
