<template>
  <div 
    class="form-item-hole"
    :class="{
      'form-item-hole_horizontal': horizontal
    }"
  >
    <div class="form-item-hole__label">
      {{label}}
      <span v-if="required" class="form-item-hole__require">必填</span>
    </div>
    <div class="form-item-hole__content">
      <slot />
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      label: String,
      required: Boolean,
      horizontal: Boolean
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

.form-item-hole{
  &__label{
    color:#7C7C7C;
    line-height: calc(23 / 16);
    letter-spacing: 1.2px;
    margin-bottom: 12px;
    display: inline-block;
    transform: translateY(-2px);
  }
  &__require{
    color: #E7142D;
    font-size: 12px;
    line-height: calc(17 / 12);
    letter-spacing: 1.2px;
  }

  &_horizontal{
    display: flex;
    .form-item-hole__label{
      margin-right: auto;
    }
  }
}

</style>



