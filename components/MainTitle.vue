<template>
  <h2 
    class="main-title"
    :class="{
      'main-title_theme-line': themeLine
    }"
  >
    <div v-if="sup" class="main-title__sup" v-html="sup"></div>
    <div v-if="title" class="main-title__title" v-html="title">
    </div>
  </h2>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      sup: String,
      title: String,

      themeLine: Boolean
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

.main-title{
  text-align: center;
  display: inline-block;
  &:before{
    content:'';
    display: block;
    height: 4px;
    width: 70px;
    background: #fff;
    margin: 0 auto;
    margin-bottom: 32px;
  }
  &__sup{
    font-size: 20px;
    font-weight: 500;
    font-family: $ff-montserrat;
    line-height: calc(28 / 20);
    letter-spacing: calc(2.5 / 20 * 1em);
    text-indent: calc(2.5 / 20 * 1em);
    margin-bottom: 12px;
  }
  &__title{
    font-size: 36px;
    font-weight: 500;
    line-height: calc(54 / 36);
    letter-spacing: calc(4 / 36 * 1em);
    text-indent: calc(4 / 36 * 1em);
  } 

  &_theme-line{
    &:before{
      background: #E7142D;
    }
  }
}

</style>



