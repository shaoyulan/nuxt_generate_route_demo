<template>
  <div class="scroll-down-hint">
    <div class="scroll-down-hint__bar"></div>
    <div class="scroll-down-hint__text">
      Scroll
    </div>
  </div>
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

.scroll-down-hint{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__bar{
    height: 67px;
    margin-bottom: 16px;
    width: 2px;
    position: relative;
    overflow: hidden;
    background: #fff;
    &:before{
      content:'';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background:#E7142D;
      animation: scroll-down-hint-ani 2s cubic-bezier(.16,.5,.43,1) 0s infinite;
    }
  }

  @keyframes scroll-down-hint-ani{
    0%{
      transform:translate3d(0,-110%,0)
    }
    to{
      transform:translate3d(0,110%,0)
    }
  }

  &__text{
    writing-mode: vertical-lr;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    font-family: $ff-raleway;
    line-height: calc(14 / 12 * 1em);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
}

</style>



