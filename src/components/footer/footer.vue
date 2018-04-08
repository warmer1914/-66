<template>
  <div class="container">
      <p>
        <a href="javascript:void;">我要开店</a>
        <a href="javascript:void;">联系我们</a>
        <a href="javascript:void;">服务条款和协议</a>
        <a href="javascript:void;">加入我们</a>
        <a href="javascript:void;">失信人员查询</a>
      </p>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'footer-list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .container{
    min-height: 100px;
    p{
      text-align: center;
      font-size: 12px;
      line-height: 1;
      margin-bottom: 10px;
      a{
        color: #666;
        display: inline-block;
        padding: 0 7px;
        border-left: 1px solid #ccc;
        &:hover{
          color:#319bff;
        }
        &:first-child{
          border: none;
        }
      }
    }
  }

</style>
