<template>
    <div class="guide-bar">
      <span class="back" @click="goBack">
         <img src="@/assets/images/back_arrow_white.png" alt="">
      </span>
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
  .back{
    position: absolute;
    height: 16px;
    width: 10px;
    left: 0;
    top: 10px;
    img{
      width: 100%;
    }
  }
}
</style>
