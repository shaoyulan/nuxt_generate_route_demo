<template>
  <v-container  class="container-simple-tab" style="padding-top: 0; padding-bottom: 0;">
    <div 
      ref="simple-tab" 
      class="simple-tab" 
      :class="[
        isAllSlideVisible ? 'sty-no-nav' : '',
        show ? 'is-show' : '',
      ]"
    >
      <div class="swiper-prev ">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>
      <div class="swiper">
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" >
            <div class="simple-item" :class="$nuxt.$route.query.cate === 'all' ? 'is-active' :'' ">
              <NuxtLink class="item-box" to="/news?cate=all">
                <div class="item-title">
                  所有日誌
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- Slides -->
          <div class="swiper-slide" >
            <div class="simple-item" :class="$nuxt.$route.query.cate === 'seo'  ? 'is-active' :'' ">
              <NuxtLink class="item-box" to="/news?cate=seo">
                <div class="item-title">
                  SEO 優化
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- Slides -->
          <div class="swiper-slide" >
            <div class="simple-item" :class="$nuxt.$route.query.cate === 'commonquestion'  ? 'is-active' :'' ">
              <NuxtLink class="item-box" to="/news?cate=commonquestion">
                <div class="item-title">
                  網頁設計常見問題
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- Slides -->
          <div class="swiper-slide" >
            <div class="simple-item" :class="$nuxt.$route.query.cate === 'mustknow' ? 'is-active' :'' ">
              <NuxtLink class="item-box" to="/news?cate=mustknow">
                <div class="item-title">
                  網頁須知
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- Slides -->
          <div class="swiper-slide"  >
            <div class="simple-item" :class="$nuxt.$route.query.cate === 'sitetool' ? 'is-active' :'' ">
              <NuxtLink class="item-box" to="/news?cate=sitetool">
                <div class="item-title">
                  網站工具說明
                </div>
              </NuxtLink>
            </div>
          </div>
          <!-- Slides -->
          <div class="swiper-slide"  >
            <div class="simple-item" :class="$nuxt.$route.query.cate === 'digimarket' ? 'is-active' :'' ">
              <NuxtLink class="item-box" to="/news?cate=digimarket">
                <div class="item-title">
                  數位行銷
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-next ">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
    props:{
      activeId: [String, Number]
    },
    data: () => ({ 
      show: false,
      isAllSlideVisible: true,

    }),
    mounted(){
      var that = this;

      console.log('$nuxt.$route.path', $nuxt.$route.path)
      console.log('$nuxt.$route.path', $nuxt.$route)

      const swiperBtnPrev = document.querySelector('.simple-tab .swiper-prev')
      const swiperBtnNext = document.querySelector('.simple-tab .swiper-next')
      const simpleTabSwiper = new Swiper('.simple-tab .swiper', {
        // Optional parameters
        loop: false,
        // Navigation arrows
        navigation: {
          nextEl: swiperBtnNext,
          prevEl: swiperBtnPrev,
        },
        initialSlide: 2,
        breakpoints: {
          // when window width is >= 320px
          0: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          476: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          650: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          830: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 0
          },
          1300: {
            slidesPerView: 6,
            spaceBetween: 0
          },
        },
        slidesPerView: 7,
        spaceBetween: 0,
        on: {
          init(swiper){
            if ( !swiper.isBeginning || !swiper.isEnd ) {
              that.isAllSlideVisible = false;
            }
            
          },
          afterInit(swiper){
            that.$nextTick(() => {
              that.show = true;
              updateActive(swiper);
            });
          },
          resize(swiper){
            if ( !swiper.isBeginning || !swiper.isEnd ) {
              that.isAllSlideVisible = false;
            }
          }
        }
      });

      function updateActive(swiper){
        $(swiper.$el).find('.swiper-slide-active').removeClass('swiper-slide-active');
          var swiperSlide = $(swiper.$el).find('.swiper-slide');
          switch ($nuxt.$route.query.cate) {
            case 'all':
              swiper.slideTo(0,0)
              break;
            case 'seo':
              swiper.slideTo(1,0)
              break;
            case 'commonquestion':
              swiper.slideTo(2,0)
              break;
            case 'mustknow':
              swiper.slideTo(3,0)
              break;
            case 'sitetool':
              swiper.slideTo(4,0)
              break;
            case 'digimarket':
              swiper.slideTo(5,0)
              break;
            default:
              break;
          }
      }

      $(this.$refs['simple-tab']).on('click', '.swiper-slide', ()=> {
        updateActive(simpleTabSwiper)
      })
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.container-simple-tab{
  max-width: calc(1300px + 24px /* 24 : vutify col gap */);
}

.simple-tab{
  --simple-tab-item-count: 1;
    display: flex;
    align-items: stretch;
    opacity: 0;
    transition: opacity .3s;

    &.is-show{
    opacity: 1;
  }

  &.sty-no-nav{
    .swiper-prev, .swiper-next{
      display: none;
    }
  }

  .swiper-prev, .swiper-next{
    &.swiper-button-disabled{
      opacity: 0.2;
      cursor: default;
    }
  }

  .swiper-prev{
    font-size: 40px;
    padding: 0 15px;
    cursor: pointer;
    @include flex(center,center);
  }

  .swiper-next{
    font-size: 40px;
    padding: 0 15px;
    cursor: pointer;
    @include flex(center,center);
  }

  .swiper-prev, .swiper-next{
    transition: .3s;
    &:hover{
      color: $color-red;
    }
  }

  .swiper{
    min-width: 0;
    flex-grow: 1;
  }

  .v-tabs-bar{
    height: auto;
    background: none;
  }

  .v-tabs-slider-wrapper{
    display: none;
  }

  .simple-item{
    transition: .3s;
    &:hover{
      background-color: rgba(#D11329, 0.12);
    }
  }

  .img-active{
    display: none;
  }

  .v-tab--active{
    .img-active{
      display: block;
    }
    .img-default{
      display: none;
    }
  }

  .simple-item{
    a {
      display: block;
      padding-top: 48px;
      padding-bottom: 48px;
    }
  }

  .simple-item.is-active{
    .item-title{
      color: #D11329;
    }
    .img-default{
      display: none;
    }
    .img-active{
      display: block;
    }
  }

  .item-box{
    width:100%;
    color: $color-font;
    text-decoration: none;
  }
  .item-media{
    position: relative;
    height: 150px;
    img{
      @include absolute(0,0,0,0);
      margin: auto;
      max-height: 100%;
    }
  }
  .item-title{
    font-size: 20px;
    line-height: calc(24 / 20);
    @include letter-spacing-center(0.1em);
    text-align: center;
    font-weight: 600;
  }
}

</style>



