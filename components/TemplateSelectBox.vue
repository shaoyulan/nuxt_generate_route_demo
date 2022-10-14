<template>
  <div class="template-select-box">
    <v-img :src="src"></v-img>
    <slot />
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      src: String
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

.template-select-box-row{
  .template-select-box{
    margin-bottom: 36px;
  }
  @include media($breakpoints-design-tablet){
    .template-select-box{
      margin-bottom: rwd-val(375px, 0, 768px, 36px);
    }
  }
  @include media($breakpoints-design-mobile){
    .template-select-box{
      margin-bottom: 0;
    }
  }
}

.template-select-box{
    cursor: pointer;
    &:hover{
      .v-image{
        transform: translateY(-10px);
      }
    }
    .v-image{
      margin-bottom: 8px;
      transition: .3s;
    }
    .v-radio{
      justify-content: center;
    }
  }

</style>



