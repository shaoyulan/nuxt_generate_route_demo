<template>
  <div class="swiper-round-nav-group">
    <slot />
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

.swiper-round-nav-group{
  --swiper-round-nav-group-item-gap: 40px;
  display: inline-flex;
  .swiper-round-nav {
    + .swiper-round-nav{
      margin-left: var(--swiper-round-nav-group-item-gap);
    }
  }

  @include media($breakpoints-design-tablet){
    --swiper-round-nav-group-item-gap: #{rwd-val(375px, 16px, 768px, 40px)};
  }
  @include media($breakpoints-design-mobile){
    --swiper-round-nav-group-item-gap: 16px;
  }
}

</style>



