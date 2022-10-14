<template>
  <div class="template-card">
    <div class="template-card__media">
      <img :src="src" alt="" srcset="">
    </div>
    <div class="template-card__bar">
      <div class="template-card__badge" v-for="badge in badges">
        {{badge}}
      </div>
    </div>
    <div class="template-card__title">
      {{title}}
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      src: String,
      badges: Array,
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

.template-card-row{
  .template-card{
    margin-bottom: 36px;
  }

  @include media($breakpoints-design-tablet){
    .template-card{
      margin-bottom: rwd-val(375px, 0, 768px, 36px);
    }
  }
  @include media($breakpoints-design-mobile){
    .template-card{
      margin-bottom: 0;
    }
  }
}

.template-card{
  cursor: pointer;
  &__media{
    position: relative;
    margin-bottom: 16px;
    img {
      @include absolute(0,0,0,0);
      margin: auto;
      max-width: 100%;
      max-height: 100%;
    }
    &:before{
      content:'';
      display: block;
      padding-top: calc(225 / 360 * 100%);
    }
  }
  &__bar{
    margin-bottom: 16px;
  }
  &__badge{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #D3D3D3;
    border-radius: 50px;
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 500;
    line-height: calc(17 / 12);
    letter-spacing: 1.2px;
    text-indent: 1.2px;
  }
  &__title{
    font-weight: 500;
    line-height: calc(23 / 16);
    letter-spacing: 1.2px;
    font-family: $ff-noto;
  }
}

</style>



