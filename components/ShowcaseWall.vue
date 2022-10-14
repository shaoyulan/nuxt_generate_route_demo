<template>
  <div class="swiper showcase-wall">
    <div class="swiper-wrapper">
      <template v-for="idx in 3" >
        <div class="swiper-slide" data-w="722px">
          <div class="showcase-row">
            <div class="showcase-col" style="width: 100%;">
              <ShowcaseBox 
                class="showcase-box_lg" 
                :picSrc="require('~/assets/img/preview/works/works1.png')"
                title="板橋凱撒大飯店"
                tag="#網頁設計"
                @click.native="$router.push('/work-detail')"
              />
            </div>
            <div class="showcase-col" style="width: 50%;">
              <ShowcaseBox 
                class="showcase-box_lg" 
                :picSrc="require('~/assets/img/preview/works/works1.png')"
                title="板橋凱撒大飯店"
                tag="#網頁設計"
                @click.native="$router.push('/work-detail')"
              />
            </div>
            <div class="showcase-col" style="width: 50%;">
              <ShowcaseBox 
                class="showcase-box_lg" 
                :picSrc="require('~/assets/img/preview/works/works1.png')"
                title="板橋凱撒大飯店"
                tag="#網頁設計"
                @click.native="$router.push('/work-detail')"
              />
            </div>
          </div>
        </div>
        <div class="swiper-slide" data-w="333px" >
          <div class="showcase-row">
            <div class="showcase-col" style="width: 100%;">
              <ShowcaseBox 
                class="showcase-box_lg" 
                :picSrc="require('~/assets/img/preview/works/works1.png')"
                title="板橋凱撒大飯店"
                tag="#網頁設計"
                @click.native="$router.push('/work-detail')"
              />
            </div>
            <div class="showcase-col" style="width: 100%;">
              <ShowcaseBox 
                :picSrc="require('~/assets/img/preview/works/works1.png')"
                title="板橋凱撒大飯店"
                tag="#網頁設計"
                @click.native="$router.push('/work-detail')"
              />
            </div>
            <div class="showcase-col" style="width: 100%;">
              <ShowcaseBox 
                :picSrc="require('~/assets/img/preview/works/works1.png')"
                title="板橋凱撒大飯店"
                tag="#網頁設計"
                @click.native="$router.push('/work-detail')"
              />
            </div>
          </div>
        </div>
        <div class="swiper-slide" data-w="722px" >
          <div class="showcase-row">
            <div class="showcase-col" style="width: 50%;">
              <ShowcaseBox 
                :picSrc="require('~/assets/img/preview/works/works1.png')"
                title="板橋凱撒大飯店"
                tag="#網頁設計"
                @click.native="$router.push('/work-detail')"
              />
            </div>
            <div class="showcase-col" style="width: 50%;">
              <ShowcaseBox 
                :picSrc="require('~/assets/img/preview/works/works1.png')"
                title="板橋凱撒大飯店"
                tag="#網頁設計"
                @click.native="$router.push('/work-detail')"
              />
            </div>
            <div class="showcase-col" style="width: 100%;">
              <ShowcaseBox 
                class="showcase-box_lg" 
                :picSrc="require('~/assets/img/preview/works/works1.png')"
                title="板橋凱撒大飯店"
                tag="#網頁設計"
                @click.native="$router.push('/work-detail')"
              />
            </div>
          </div>
        </div>
      </template>
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
    var that = this;
    
    const swiper = new Swiper('.showcase-wall', {
        slidesPerView: "auto",
        spaceBetween: 40,
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
    });

  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.showcase-wall{
    // overflow: hidden;

  .swiper-slide{
    width: auto;
    &[data-w="722px"]{
      width: 722px;
    }
    &[data-w="333px"]{
      width: 333px;
    }
  }

}

.showcase-col{
    padding: 20px;
    box-sizing: border-box;
}

.showcase-row{
    margin: -20px;
    display: flex;
    flex-wrap: wrap;
}


</style>



