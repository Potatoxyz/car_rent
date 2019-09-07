<template>
  <div class="page-wrap re-su-wra">
    <guide-bar :title="''" :backLink="'/verifyCode'"></guide-bar>
    <p class="img-line">
      <img src="@/assets/images/success_blue_check.png" alt="">
    </p>
    <p class="main-text">
      提交成功
    </p>
    <p class="des-text">您的注册申请已提交，平台将在1-3个工作日进行审核，审核结果会以邮件或短信形式通知您。请耐心等待审核! </p>
  </div>
</template>

<script>
  import guideBar from '../components/guide-bar'

  export default {
    name: "register-success",
    components: {guideBar},
    data: function () {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .re-su-wra {
    .img-line {
      margin-bottom: 20px;
      text-align: center;
      margin-top: 100px;
      img {
        width: 48px;
      }
    }
    .main-text {
      font-size: 16px;
      font-weight: 500;
      color: rgba(30, 116, 254, 1);
      margin-bottom: 40px;
      text-align: center;
    }
    .des-text {
      font-size: 14px;
      font-weight: 500;
      color: rgba(241, 243, 248, 1);
      line-height: 1.7;
    }
  }
</style>
