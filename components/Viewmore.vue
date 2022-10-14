<template>
  <span class="view-more">
    <div class="view-more__text">
      VIEW MORE
    </div>
    <div class="view-more__arrow">
      <i class="icon-icon_navigation_arrow_right"></i>
    </div>
  </span>
</template>

<script>
export default {
    props:{
    },
    data: () => ({ 
    }),
    mounted(){
      
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.view-more{
  @keyframes viemore_anim{
    0%{transform-origin:100% 0;transform:scaleX(1)}
    50%{transform-origin:100% 0;transform:scaleX(0)}
    50.1%{transform-origin:0% 0;transform:scaleX(0)}
    100%{transform-origin:0% 0;transform:scaleX(1)}
  }

  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding-bottom: 8px;
  font-family: $ff-raleway;
  line-height: calc(28 / 16 * 1em);
  color: #505050;
  font-weight: 700;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #E7142D;
    &:after{
      animation: viemore_anim 0.6s 1;
      animation-fill-mode: forwards;
    }

    .view-more__arrow{
      transform: translateX(7px);
    }
    .view-more__text{
      letter-spacing: calc(1.6 / 16 * 1em);
    }
  }

  &__text{
    margin-right: calc(12 / 16 * 1em);
    transition: .3s ease;
    letter-spacing: calc(1.2 / 16 * 1em);
  }

  &__arrow{
    transition: .3s ease;
  }

  i {
    font-size: 12px;
    transform: scale(calc(10 / 12));
    display: inline-block;
    font-weight: bold;
  }

  &:after{
    content:'';
    display: block;
    background: #E7142D;
    height: 1px;
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    right: 0;
  }
}


</style>



