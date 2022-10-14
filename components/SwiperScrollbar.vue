<template>
  <div class="swiper-scrollbar">
    <!-- <div class="swiper-scrollbar__dot"></div>
    <div class="swiper-scrollbar__line"></div> -->
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

.swiper-scrollbar{
  width: 189px;
  max-width: 189px;
  height: 3px!important;
  display: inline-flex;
  align-items: center;
  position: relative!important;
  cursor: pointer;

  .swiper-scrollbar-drag{
    width: 7px!important;
    height: 7px!important;
    max-width: 7px;
    &:before{
      content:'';
      display: block;
      @include absolute(-10px, -10px, -10px, -10px);
    }
  }

  &__dot{
    width: 7px;
    height: 7px;
    background: #252525;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &__line{
    height: 1px;
    background: #000000;
    width: 100%;
  }
}

</style>



