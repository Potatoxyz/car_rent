<template>
  <div class="page-wrap setPwd-wrap">
    <div class="mask-outside" v-show="showKeyBoard" @click="closeKeyboard"></div>
    <guide-bar :title="'设置密码'"></guide-bar>
    <p class="pwd-text">您的密码必须包含至少1个符号（如!、#、<br>%等），长度至少为8个字符。</p>

    <div class="input-box" @click="openKeyboard('pwd')">
      <p class="set-label">密码</p>
      <div class="input-item">
        <input type="number" readonly placeholder="手机号" v-model="pwd">
        <span class="fake-wrap">
        <span class="fake-number" v-for="(value,index) in _pwd" :key="'f+'+value">{{value}}</span>
        <span class="fake-cursor" v-show="showPwdCursor"></span>
      </span>
        <input type="number" class="fake-input" v-model="pwd">
      </div>
    </div>
    <div class="input-box" @click="openKeyboard('confirmPwd')">
      <p class="set-label">密码</p>
      <div class="input-item">
        <input type="number" readonly placeholder="手机号" v-model="confirmPwd">
        <span class="fake-wrap">
        <span class="fake-number" v-for="(value,index) in _confirmPwd" :key="'f+'+value">{{value}}</span>
        <span class="fake-cursor" v-show="showConfirmCursor"></span>
      </span>
        <input type="number" class="fake-input" v-model="confirmPwd">
      </div>
    </div>
    <div class="btn-box" :class="{'enter':showKeyBoard,'leave':!showKeyBoard}">
      <button class="m-btn  done" :class="{'active':pwdCheck,'inactive':!pwdCheck}">完成</button>
    </div>
    <FadeAnimation>
      <KeyBoard v-show="showKeyBoard" @inputValue="getInputValue"></KeyBoard>
    </FadeAnimation>
  </div>
</template>

<script>
  import guideBar from '../components/guide-bar'
  import KeyBoard from '../components/keybord'
  import FadeAnimation from '../components/trasition'

  export default {
    name: "set-pwd",
    components: {guideBar, KeyBoard, FadeAnimation},
    data: function () {
      return {
        pwdCheck: false,
        pwd: '',
        confirmPwd: '',
        showKeyBoard: false,
        activeInput: '',
        showPwdCursor: false,
        showConfirmCursor: false,
      }
    },
    computed: {
      _pwd() {
        return Array.from(this.pwd)
      },
      _confirmPwd() {
        return Array.from(this.confirmPwd)
      }
    },
    watch: {
      confirmPwd(val) {
        this.pwdCheck = val === this.pwd
      }
    },
    mounted() {
    },
    methods: {
      openKeyboard(key) {
        this.showKeyBoard=true
        this.activeInput = key;
        this.showPwdCursor=key == 'pwd';
        this.showConfirmCursor=key == 'confirmPwd';
      },
      closeKeyboard(){
        this.showKeyBoard=false;
        this.showPwdCursor=false;
        this.showConfirmCursor=false;
      },
      getInputValue(val) {
        if (val != '' && val != 'clear') {
          this[this.activeInput] = this[this.activeInput] + val;
        }
        else {
          if (this[this.activeInput].length > 0) {
            this[this.activeInput] = this[this.activeInput].substring(0, this[this.activeInput].length - 1);
          }
          else
            this[this.activeInput] = ''
        }
        console.log(this[this.activeInput])
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mask-outside{
    position: absolute;
    width: 100%;
    height: calc(100vh - 300px);
    top: 0;
    left: 0;
    background: transparent;
  }
  .pwd-text {
    margin-top: 100px;
    margin-bottom: 25px;
  }

  .pwd-wrap {
    margin-top: 25px;
    .input-item {
      margin-bottom: 18px;
      .set-label {
        margin-bottom: 10px;
        font-size: 12px;
      }
      .input {
        border-bottom: 1px solid #232323;
        padding-bottom: 10px;
        input {
          background: transparent;
          width: 100%;
          outline: none;
          border: none;
          font-size: 16px;
        }
      }
    }
  }

  .input-box {
    border-bottom: 1px solid #232323;
    position: relative;
    margin-bottom: 18px;
    &:last-of-type{
      margin-bottom: 0;
    }
    .set-label{
      margin-bottom: 10px;
      font-size: 12px;
    }
    .input-item{
      position: relative;
      padding-bottom: 8px;
    }
    .fake-wrap {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 24px;
      line-height: 24px;
      .fake-cursor {
        display: inline-block;
        width: 1px;
        background: #fff;
        height: 12px;
        animation: blink .8s linear 0s infinite;
        margin-left: -2px;
      }
      .fake-number {
        display: inline-block;
        color: #fff;
        font-size: 12px;
      }
    }

    .fake-input {
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
      opacity: 0;
    }
  }

  .btn-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
    bottom: 66px;
    transition: all ease .5s;
    &.enter{
      bottom: 243px;
    }
    &.leave{
      bottom: 66px;
    }
    .done {
      width: 70%;
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
