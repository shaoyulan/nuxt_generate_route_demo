<template>
  <div class="section-title-bar">
    <div class="section-title-bar__left-col">
      <div class="section-title-bar__title">
        <div class="section-title-bar__title-left">
          {{left}}
        </div>
        <div class="section-title-bar__title-divider">
        </div>
        <h3 class="section-title-bar__title-right">
          {{right}}
        </h3>
      </div>
    </div>
    <div class="section-title-bar__right-col">
      <div class="section-title-bar__more-link">
        {{moreText}}
        <i class="icon-icon_navigation_arrow_right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      left: String,
      right: String,
      moreText: String,
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

.section-title-bar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__left-col{
    padding-right: 12px;
  }
  &__right-col{
    padding-left: 12px;
  }
  &__title{
    display: flex;
    align-items: center;
  }
  &__title-left{
    font-size: 72px;
    color: #E7142D;
    font-style: italic;
    font-family: $ff-montserrat;
    line-height: calc(87 / 72);
    letter-spacing: 1px;
    font-weight: 500;
  }
  &__title-right{
    font-size: 24px;
    line-height: calc(32 / 24);
    letter-spacing: calc(2.5 / 24 * 1em);
    font-family: $ff-noto;
    font-weight: normal;
  }
  &__title-divider{
    width:1px;
    background: #A7A7A7;
    margin: 0 32px;
    align-self: stretch;
    margin-top: 0.6em;
    margin-bottom: 0.6em;
  }
  &__more-link{
    @keyframes section-title-bar__more-link{
      0%{transform-origin:100% 0;transform:scaleX(1)}
      50%{transform-origin:100% 0;transform:scaleX(0)}
      50.1%{transform-origin:0% 0;transform:scaleX(0)}
      100%{transform-origin:0% 0;transform:scaleX(1)}
    }
    display: flex;
    align-items: center;
    line-height: calc(28 / 16);
    letter-spacing: 1.2px;
    position: relative;
    font-family: $ff-noto;
    padding-bottom: 0.5em;
    cursor: pointer;
    &:hover{
      &:before{
        animation: viemore_anim 0.6s 1;
        animation-fill-mode: forwards;
      }
      i{
        transform: translateX(7px);
      }
    }
    i{
      margin-left: 12px;
      font-size: 12px;
      display: inline-block;
      transform: scale(calc(10 / 12));
      transition: .3s ease;
    }
    &:before{
      content:'';
      display: block;
      position: absolute;
      height: 1px;
      background: #E7142D;  
      top: 100%;
      left: 0;
      right: 0; 
    }
  }
}

</style>



