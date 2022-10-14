<template>
  <label 
    class="u-checkbox"
    :class="{
      'u-checkbox_inline': inline,
      'u-checkbox_checked': checked,
    }"
    :style="{
      '--u-checkbox-inline-mr': inlineMr,
      '--u-checkbox-inline-mb': inlineMb,
    }"
  >
    <div class="u-checkbox__hidden">
      <slot />
    </div>
    <div class="u-checkbox__icon">
      <i class="icon-check"></i>
    </div>
    <div class="u-checkbox__text">
      <slot name="label">
        {{ text }}
      </slot>
    </div>
  </label>
</template>

<script>
/**
 * 純UI Radio
 */

import { ref, reactive, computed, watch, watchEffect } from 'vue';

export default {
  props:{
    inline: Boolean,
    checked: Boolean,
    text: String,

    inlineMr: {
      type: String,
      default: '17px'
    },
    inlineMb: {
      type: String,
      default: '10px'
    }
  },
  setup(props, context) {
    
    const data = {
    }

    return {
      data
    };
  },
};
</script>

<style lang="scss">
@import '~assets/css/design';

.u-checkbox{
  --u-checkbox-size: 20px;
  --u-checkbox-inline-mr: 17px;
  --u-checkbox-inline-mb: 10px;
  display: flex;
  align-items: center;

  &__hidden{
    display: none;
  }

  &__icon{
    width: var(--u-checkbox-size);
    height: var(--u-checkbox-size);
    border: 1px solid #D3D3D3;
    border-radius: 2px;
    @include flex(center, center);
    i {
      font-size: 12px;
      display: inline-block;
      transform: scale(calc(10 / 12));
      color:#fff;
      transition: .3s;
      opacity: 0;
    }
  }

  &__text{
    padding-left: 9px;
    font-family: $ff-msjh;
  }

  &_inline{
    display: inline-flex;
    margin-right: var(--u-checkbox-inline-mr);
    margin-bottom: var(--u-checkbox-inline-mb);
  }

  &_checked{
    .u-checkbox__icon{
      border-color: #E7142D;
      background: #E7142D;
      i {
        opacity: 1;
      }
    }
  }
}

</style>
