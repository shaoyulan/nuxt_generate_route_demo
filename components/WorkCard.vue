<template>
  <a class="work-card">
    <div class="work-card__media">
      <img :src="picSrc" alt="" srcset="">
    </div>
    <div class="work-card__tagbar">
      <div class="work-card__tag">
        {{tag}}
      </div>
    </div>
    <h5 class="work-card__title">
      {{title}}
    </h5>
  </a>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      picSrc: String,
      tag: String,
      title: String,
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

.work-card{
  display: block;
  &__media{
    margin-bottom: 24px;
    position: relative;
    &:before{
      content:'';
      display: block;
      padding-top: calc(225 / 360 * 100%);
      background:#fafafa;
    }
    img{
      @include absolute(0,0,0,0);
      margin: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__tagbar{

  }
  &__tag{
    font-size: 14px;
    line-height: 2em;
    letter-spacing: calc(1.2 / 14 * 1em);
    color: #E7142D;
  }
  &__title{
    font-size: 20px;
    line-height: calc(29 / 20);
    letter-spacing: calc(1 / 20 * 1em);
    color: #000000;
    font-weight: normal;
  }
}

</style>



