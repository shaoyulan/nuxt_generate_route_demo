<template>
  <div class="work-swiper-clipped">
    <div class="swiper">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="idx in 6" :key="idx">
           <WorkCard 
            :picSrc="require('~/assets/img/preview/work_card.png')"
            tag="#網頁"
            title="Riechen 網頁設計"
            @click.native="$router.push('/work-detail')"
           />
         </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    scrollbarSelector: String,
    scrollbarDragSize: {
      type: Number,
      default: 7,
    }
  },
  data: () => ({ 
  }),
  mounted(){
    var that = this;
    
    var config = {
      spaceBetween: 40,
      slidesPerView: 3.5,
      resistance: true,
      resistanceRatio: 0,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.45,
          spaceBetween: 20
        },
        576: {
          slidesPerView: 2.3,
          spaceBetween: 24
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 40
        },
      },
      on:{
        afterInit: function () {
          that.$emit('init', {
            swiper: this
          })
        },
        progress: function(swiper){
          that.$emit('progress', swiper)
        }
      }
    }

    if ( this.scrollbarSelector ) {
      config.scrollbar = {
        el: this.scrollbarSelector,
        dragSize: this.scrollbarDragSize,
        draggable: true,
      }
    }

    const swiper = new Swiper('.work-swiper-clipped .swiper', config);
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.work-swiper-clipped{

}

</style>



