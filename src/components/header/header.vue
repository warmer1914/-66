<template>
  <div class="container">
      header
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'header-list',
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
    .row{
      div{
        border: 1px solid #666;
        text-align: center;
        &:last-child{
          margin: 0;
        }
      }
    }
  }

</style>
