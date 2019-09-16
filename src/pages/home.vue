<template>
  <div class="home-wrap">
    <swipe :autoplay="3000" indicator-color="white">
      <swipe-item v-for="(value,index) in imgs" :key="index+'car'">
        <Vant-image
          :src="value"
          fit="fill"
        />
      </swipe-item>
    </swipe>
    <div class="wrap pdGap">
      <p class="attention-text">
        <Vant-image width="16px" height="16px" :src="icon"/>
        2019年6月1日正式上线，欢迎大家加入我们的大
      </p>
      <div class="h-card card">
        <div class="card-title">车辆状态占比</div>
        <div id="chart" style="width:160px;height:160px"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant';
  import { Image } from 'vant';
  import redTheme from '../config/echart-theme'
  export default {
    name: "home",
    components: {Swipe,SwipeItem,'Vant-image':Image},
    data: function () {
      return {
        imgs:[
          require('../assets/images/cars/car2.jpg'),
          require('../assets/images/cars/car2.jpg'),
          require('../assets/images/cars/car2.jpg'),
          require('../assets/images/cars/car2.jpg'),
        ],
        icon:require('../assets/images/attention_white.png'),
      }
    },
    created(){

    },
    mounted() {
      let option = {
        calculable : true,
        series : [
          {
            name:'访问来源',
            type:'pie',
            radius : ['50%', '80%'],
            itemStyle : {
              normal : {
                label : {
                  show : false
                },
                labelLine : {
                  show : false
                }
              },
            },
            data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
            ]
          }
        ]
      };
      this.$nextTick(()=>{
        const myChart = this.$echarts.init(document.getElementById('chart'),redTheme)
        myChart.setOption(option)
        window.addEventListener('resize', function () {
          myChart.resize()
        })
      })
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .pdGap{
    padding: 0 18px;
  }
  .van-swipe{
    height: 220px;
  }
  .van-swipe-item{
    img{
      max-height: 100%;
      max-width: 100%;
    }
  }
  .attention-text{
    margin: 10px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    .van-image{
      position: relative;
      top:2px;
      margin-right: 5px;
    }
  }
  .h-card{
    padding: 12px;
    .card-title{
      font-size: 14px;
      color:#fff;
    }
  }
</style>
