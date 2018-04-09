<template>
  <div class="headerStyle">
    <div class="mainContent">
      <div class="navs f-left">
        <span style="font-weight:bold;" class="font-20">LOGO</span>
        <span @click="chooseList(index)" v-for="list,index in navList" class="font-16" :class="{chooseList:chooseIndex == index}">{{list.title}}</span>
      </div>
      <div class="userList f-right">
          <span>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'header-list',
    data () {
      return {
        navList:[
          {id:1,title:"首页"},
          {id:2,title:'我的订单'},
          {id:3,title:"加盟合作"},
          {id:4,title:"我的客服"}
        ],
        chooseIndex:-1,
      }
    },
    mounted(){

    },
    methods:{
      chooseList(index){
        this.chooseIndex = index;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .headerStyle{
    width: 100%;
    background-color: #1e89e0;
    .mainContent{
      .navs{
        width: 50%;
        height: 60px;
        display: flex;
        flex-direction: row;
        span{
          display: inline-block;
          width: 20%;
          line-height: 60px;
          text-align: center;
          color: #fff;
          cursor: pointer;
          &:not(:first-child){
            &:hover{
              background-color: #536adc;
            }
          }
        }
        .chooseList{
          background-color: #006bc7;
        }
      }
    }
  }

</style>
