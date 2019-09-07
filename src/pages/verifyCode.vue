<template>
  <div class="page-wrap ver-wrap">
    <guide-bar :title="'验证码'" :backLink="'/register'"></guide-bar>
    <p class="ver-text">我们向135 5237 8367发送了一个验证码，<br> 请在下方输入。</p>
    <div class="ver-input-box">
      <span v-for="(value,index) in codes" :keys="'co'+index">{{value}}</span>
    </div>
    <FadeAnimation>
      <KeyBoard @inputValue="getInputValue"></KeyBoard>
    </FadeAnimation>
  </div>
</template>

<script>
  import guideBar from '../components/guide-bar'
  import KeyBoard from '../components/keybord'
  import FadeAnimation from '../components/trasition'
  import {Toast} from 'vant'
  export default {
    name: "verify-code",
    components: {guideBar,KeyBoard,FadeAnimation},
    data: function () {
      return {
        codes:new Array(4).fill(''),
      }
    },
    watch:{
      codes(val){
        let isFill=val.every(v=>v!='');
        if(isFill){
          this.showLoading()
        }
      }
    },
    mounted() {
    },
    methods: {
      getInputValue(val){
        if(val!=''&&val!='clear'&&this.codes.length<=4){
          let index=this.codes.findIndex(v=>v=='');
          this.$set(this.codes,index,val)
        }
        else{
          if(this.codes.length>0){
            for(let i=this.codes.length-1;i>=0;i--){
              console.log(this.codes[i]!='',i)
              if(this.codes[i]!=''){
                console.log(i)
                this.$set(this.codes,i,'')
                break;
              }
            }
          }
          else
            this.codes=new Array(4).fill('')
        }
      },
      showLoading(){
        Toast.loading({
          mask: true,
          message: '请稍后...',
          className:'m-loading',
          duration:1000,
          onClose:()=>{
            this.$router.push({path:'/registerSuccess'})
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.ver-text{
  margin-top: 123px;
}
.ver-input-box{
  display: flex;
  justify-content: center;
  margin-top: 100px;
    span{
      width: 45px;
      height: 32px;
      background: transparent;
      border: none;
      border-bottom: 3px solid #fff;
      margin-right: 10px;
      outline: none;
      font-size: 22px;
      text-align: center;
    }
}
</style>
