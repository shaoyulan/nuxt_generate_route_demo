<template>
  <label 
    class="u-radio"
    :class="{
      'u-radio_inline': inline,
      'u-radio_checked': checked,
    }"
    :style="{
      '--u-radio-inline-mr': inlineMr,
      '--u-radio-inline-mb': inlineMb,
    }"
  >
    <div class="u-radio__hidden">
      <slot />
    </div>
    <div class="u-radio__icon">
    </div>
    <div class="u-radio__text">
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
  computed:{

  },
  mounted() {
    
  },
};
</script>

<style lang="scss">
@import '~assets/css/design';

.u-radio{
  --u-radio-size: 22px;
  --u-radio-inline-mr: 17px;
  --u-radio-inline-mb: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &__hidden{
    display: none;
  }

  &__icon{
    width: var(--u-radio-size);
    height: var(--u-radio-size);
    border: 1px solid #D3D3D3;
    border-radius: 50%;
    position: relative;
    &:before{
      content:'';
      display: block;
      @include absolute(3px, 3px, 3px, 3px);
      background: #E7142D;
      border-radius: 50%;
      opacity: 0;
      transition: .3s;
    }
  }

  &__text{
    padding-left: 9px;
    font-family: $ff-msjh;
  }

  &_inline{
    display: inline-flex;
    margin-right: var(--u-radio-inline-mr);
    margin-bottom: var(--u-radio-inline-mb);
  }

  &_checked{
    .u-radio__icon{
      border-color:#E7142D;
      background: #fff;
      &:before{
        opacity: 1;
      }
    }
  }
}

</style>
