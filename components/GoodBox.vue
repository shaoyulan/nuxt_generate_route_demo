<template>
  <div class="good-box">
    <div class="good-box__inner">
      <h5 class="good-box__title-up">{{up}}</h5>
      <h5 class="good-box__title-sub">{{sub}}</h5>
      <div class="good-box__icon">
        <img :src="icon" alt="" srcset="">
      </div>
      <div class="good-box__des">
        <div class="good-box__des-text">
          {{des}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      up: String,
      sub: String,
      icon: String,
      des: String
    },
    data: () => ({ 
      store: useGlobalStore(),
    }),
    mounted(){
      var that = this;
    },
    methods:{
      onScroll(){

      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.good-box{
  text-align: center;
  background: #fff;
  &__inner{
    padding: 50px 15px;
    width: 380px;
    max-width: 100%;
    margin: auto;
  }
  &__title-up{
    font-size: 28px;
    line-height: calc(40 / 28);
    letter-spacing: calc(2.5 / 28 * 1em);
    text-indent: calc(2.5 / 28 * 1em);
    margin-bottom: calc(9 / 28 * 1em);
    font-weight: normal;
  }
  &__title-sub{
    color: #7C7C7C;
    line-height: calc(19 / 16);
    letter-spacing: 1px;
    text-indent: 1px;
    margin-bottom: 25px;
    text-transform: uppercase;
    font-weight: normal;
  }
  &__icon{
    width: 140px;
    max-width: 100%;
    position: relative;
    margin: 0 auto;
    margin-bottom: 24px;
    &:before{
      content:'';
      display: block;
      padding-top: 100%;
    }
    img{
      @include absolute(0,0,0,0);
      margin: auto;
    }
  }
  &__des{
    color: #7C7C7C;
    line-height: calc(28 / 16);
    letter-spacing: 1.2px;
    text-align: center;
  }
  &__des-text{
    display: inline-block;
    text-align: left;
  }
}

</style>



