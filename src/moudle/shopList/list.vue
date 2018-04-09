<template>
  <div>
    <header-list></header-list>
      fdsff
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        isChange:false,
        address:'',
      }
    },
    mounted(){
      console.log(this.$http)
    },
    methods:{


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
