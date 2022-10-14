<template>
  <button 
    class="base-button"
    :class="{
      'base-button_pill': pill,
      'base-button_inline': inline,
      'base-button_disabled': disabled,

      'base-button_theme': theme,
      'base-button_outline-white-theme': outlineWhiteTheme,
    }"
    :style="{
      '--base-button-w': w || '',
      '--base-button-h': h || '',
    }"
  >
    <slot />
  </button>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      h: String,
      w: String,

      pill: Boolean,
      inline: Boolean,
      disabled: Boolean,
      theme: Boolean,
      outlineWhiteTheme: Boolean
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

.base-button{
  --base-button-h: 40px;
  --base-button-w: auto;
  width: var(--base-button-w);
  height: var(--base-button-h);
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .icon-icon_navigation_arrow_right{
    font-size: 12px;
    transform: scale(calc(8.33 / 12));
  }

  &__i-on-after{
    margin-left: 8px;
  }

  &.page-action-btn:not(.page-action-btn_outline){
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 240px;
    height: 60px;
    border-radius: 30px;
    background:#E7142D;
    color: #fff;
    line-height: calc(24 / 16);
    letter-spacing: 0.8px;
    text-indent: 0.8px;
    i {
      margin-left: 10px;
    }
  }
  &.page-action-btn_outline{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 240px;
    height: 60px;
    border-radius: 30px;
    background:#fff;
    color: #E7142D;
    border: 1px solid #E7142D;
    line-height: calc(24 / 16);
    letter-spacing: 0.8px;
    text-indent: 0.8px;
    i {
      margin-left: 10px;
    }
  }

  &_inline{
    display: inline-flex;
  }

  &_disabled{
    opacity: 0.5;
    pointer-events: none;
  }

  &_theme{
    background: #E7142D;
    color: #fff;
    transition: .3s;
    &:hover{
      background: darken(#E7142D, 5%);
    }
  }

  &_pill{
    border-radius: calc(var(--base-button-h) / 2);
  }

  &_outline-white-theme{
    background: #fff;
    color: #E7142D;
    border: 1px solid #E7142D;
    transition: .3s;
    &:hover{
      background: #E7142D;
      color: #fff;
    }
  }
}

</style>



