<template>
    <div class="guide-bar">
      <img class="back"  @click="goBack" src="@/assets/images/back_arrow_white.png" alt="">
      <span>{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "guide-bar",
        props:['title','backLink'],
        data: function () {
            return {}
        },
        mounted() {
        },
        methods: {
          goBack(){
            let path=this.backLink||'/'
            this.$router.push({path})
          }
        }
    }
</script>

<style lang="scss" scoped>
.guide-bar{
  display: flex;
  position: relative;
  justify-content: center;
  padding: 10px 0;
  font-size: 16px;
  height: 40px;
  box-sizing: border-box;
  .back{
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      width: 14px;
      left: 0;
    }
}
</style>
