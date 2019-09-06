<template>
  <div class="key-container">
    <button v-for="(value,index) in keys" :key="'index'+value"
            @click="emitVal(value)"
            :class="{noBg:value==''||value=='clear'}">
      <em v-if="value!='close'">{{value}}</em>
      <em v-else>X</em>
    </button>
  </div>
</template>

<script>
  export default {
    name: "keybord",
    data: function () {
      return {
        keys:[]
      }
    },
    created() {
      for(let i=1;i<10;i++){
        this.keys.push(i+'');
      }
      this.keys.push('');
      this.keys.push('0');
      this.keys.push('clear');
    },
    mounted() {
    },
    methods: {
      emitVal(val){
        if(val!='clear'&&val!=''){
          console.log(val)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.key-container{
  position: absolute;
  bottom:0;
  width: 100%;
  height: 227px;
  button{
    float: left;
    margin: 5px;
    width: 30%;
    background: #4D4D51;
    text-align: center;
    height: 46px;
    line-height: 46px;
    border-radius: 5px;
    border:none;
    outline: none;
    color:#fff;
    &:active{
      background: #343437;
    }
    &.noBg{
      background: transparent;
      &:active{
        background: transparent;
      }
    }

  }

}
</style>
