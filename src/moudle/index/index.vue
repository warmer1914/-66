<template>
  <div class="index-page">
    <div class="content box">
      <div class="container content-header">
        <h1 class="f-left">
          <a href="">
            <img src="//shadow.elemecdn.com/faas/desktop/media/img/map-logo.9a26ef.png" alt="eleme">
          </a>
        </h1>
        <span class="f-right">
             <span>
                <a  href="javascript:void;">注册</a>
                <label for=""> | </label>
                <a  href="javascript:void;">登录</a>
             </span>
             <a class="open-address" href="javascript:void;">我要开店</a>
          </span>
      </div>
      <div class="content-infor">
        <h2>
          <img src="//shadow.elemecdn.com/faas/desktop/media/svg/map-logo-center.425427.svg" alt="eleme">
        </h2>
        <div class="search-address">
          <div class="map-infor" @click="isChange = !isChange">
            <a class="box" href="javascript:void;">青岛</a>
            <i :class="{'changeI':isChange}"></i>
          </div>
          <div class="map-input">
            <input type="text" placeholder="请输入地址">
            <button type="button" class="font-20 btn btn-danger">搜 索</button>
          </div>

        </div>
      </div>
    </div>
    <h1 class="ads">公告广告！</h1>
    <div>{{address}}</div>
    <footer-list></footer-list>
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
  .index-page{
    .content{
      width: 100%;
      right: 0;
      top: 0;
      height: 500px;
      background: url(//shadow.elemecdn.com/faas/desktop/media/img/map.012b5c.png) center no-repeat #008de1;
      background-size: cover;
      .content-header{
        padding-top: 25px;
        color: #fff;
        line-height: 45px;
        overflow: hidden;
        h1{
          a{
            img{
              width: 220px;
            }
          }
        }
        span{
          .open-address{
            color: #fff;
            padding: 6px 15px;
            border-radius: 5px;
            background-color: #5db423;
            margin-right: 0;
          }
          span{
            a{
              margin-right: 15px;
              color: #fff;
            }
            label{
              margin-right: 15px;
            }
          }

        }
      }
      .content-infor{
        position: absolute;
        text-align: center;
        width: 100%;
        margin-top: 8%;
        transition: all .3s ease-in-out;
        h2{
          margin-bottom: 53px;
          color: #fff;
          font-size: 50px;
          opacity: 1;
          -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
          max-height: 100px;
          text-align: center;
          will-change: transform;
          transition: all 1s ease,opacity 1s ease;
          img{
            width: 280px;
          }
        }
        .search-address{
          line-height: 56px;
          margin: 0 auto;
          overflow: hidden;
          width: 50%;
          z-index: 900;
          transition: all .8s ease;
          position: relative;
          padding-left: 6%;
          .map-infor{
            float: left;
            min-width: 100px;
            position: relative;
            a{
              display: block;
              position: relative;
              background-color: #fff;
              text-align: center;
              height: 56px;
              font-size: 20px;
              color: #333;
              padding-right: 13%;
            }
            i{
              display: inline-block;
              vertical-align: middle;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-top: 5px solid #999;
              border-bottom: 0;
              position: absolute;
              top: 26px;
              right: 7%;
              transition: all .8s ease;
            }
            .changeI{
              border-top:0;
              border-bottom: 5px solid #999;
              transition: all .8s ease;
            }
          }
          .map-input{
            height: 56px;
            background-color: #fff;
            width: 415px;
            margin-left: 97px;
            position: relative;
            input{
              height: 100%;
              border: none;
              outline: 0;
              width: 92%;
              font-size: 16px;
            }
            button{
              position: absolute;
              top: 0;
              right: -34%;
              width: 128px;
              padding: 0;
              line-height: 56px;
              color: #fff;
            }
          }
        }
      }
    }
    .ads{
      text-align: center;
      padding: 60px;
    }
  }

</style>
