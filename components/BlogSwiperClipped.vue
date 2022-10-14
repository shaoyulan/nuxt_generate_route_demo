<template>
  <div class="blog-swiper-clipped">
    <div class="swiper">
       <div class="swiper-wrapper">
         <div 
            class="swiper-slide" 
            v-for="idx in 6" :key="idx"
         >
           <BlogBox 
            :picSrc="require('~/assets/img/preview/blog/blog_box_media.png')"
            createTime="2022-08-28T06:01:33.394Z"
            title="【如何選擇網站設計素材？】應該使用圖庫【如何選擇網站設計素材？】應該使用圖庫"
            subTitle="無論哪種產業，都會遇到網站設計素材的無論哪種產業，都會遇到網站設計素材的"
            @click.native="$router.push('/blog-detail')"
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
    },

  },
  data: () => ({ 
    list: [],
  }),
  methods: {
    getLatest(){
      var that = this;

      const toSend = {
      }

      this.$baseService.article.list(toSend).then(res=>{
        that.$ajax200Res(
          res,
          ({res, data, msg, defaultAlert}) => {
            // success
            if ( data ){
              that.list = data.records;
            }
          },
          ({res, data, msg, defaultAlert}) =>{
            // fail
            if ( msg ) {
            }
          }
        )
      })
    },
  },
  async mounted(){

    // await this.getLatest();

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
      }
    }

    if ( this.scrollbarSelector ) {
      config.scrollbar = {
        el: this.scrollbarSelector,
        dragSize: this.scrollbarDragSize,
        draggable: true,
      }
    }

    const swiper = new Swiper('.blog-swiper-clipped .swiper', config);
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.blog-swiper-clipped{

}

</style>



