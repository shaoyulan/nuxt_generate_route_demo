<template>
  <div 
    class="service-tab-outer"
  >
    <v-container class="container-service-tab" style="padding-top: 0; padding-bottom: 0;">
        <div ref="service-tab" class="service-tab" :class="[
          isAllSlideVisible ? 'sty-no-nav' : '',
          show ? 'is-show' : '',
        ]">
            <!-- <div class="swiper-prev ">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div> -->
            <div class="swiper">
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                  <NuxtLink to="/service/web-design-and-develop" class="item-box" :class="$nuxt.$route.path === '/service/web-design-and-develop' ? 'is-active' :'' ">
                    <div class="item-media" >
                      <img :src="require('~/assets/img/service/service1.svg')" class="img-default" alt="">
                      <img :src="require('~/assets/img/service/service1-active.svg')" class="img-active" alt="">
                    </div>
                    <div class="item-title">
                      網頁設計與開發
                    </div>
                  </NuxtLink>
                </div>
                <!-- Slides -->
                <div class="swiper-slide" >
                  <NuxtLink to="/service/wordpress" class="item-box" :class="$nuxt.$route.path === '/service/wordpress' ? 'is-active' :'' " >
                    <div class="item-media">
                      <img :src="require('~/assets/img/service/service2.svg')" class="img-default" alt="">
                      <img :src="require('~/assets/img/service/service2-active.svg')" class="img-active" alt="">
                    </div>
                    <div class="item-title">
                      Wordpress架站
                    </div>
                  </NuxtLink>
                </div>
                <!-- Slides -->
                <div class="swiper-slide">
                  <NuxtLink to="/service/app-develop" class="item-box" :class="$nuxt.$route.path === '/service/app-develop' ? 'is-active' :'' " >
                    <div class="item-media">
                      <img :src="require('~/assets/img/service/service3.svg')" class="img-default" alt="">
                      <img :src="require('~/assets/img/service/service3-active.svg')" class="img-active" alt="">
                    </div>
                    <div class="item-title">
                      APP 開發
                    </div>
                  </NuxtLink>
                </div>
                <!-- Slides -->
                <div class="swiper-slide" >
                  <NuxtLink to="/service/software-design" class="item-box" :class="$nuxt.$route.path === '/service/software-design' ? 'is-active' :'' " >
                    <div class="item-media">
                      <img :src="require('~/assets/img/service/service4.svg')" class="img-default" alt="">
                      <img :src="require('~/assets/img/service/service4-active.svg')" class="img-active" alt="">
                    </div>
                    <div class="item-title">
                      程式設計
                    </div>
                  </NuxtLink>
                </div>
                <!-- Slides -->
                <div class="swiper-slide" >
                  <NuxtLink to="/service/uiux" class="item-box" :class="$nuxt.$route.path === '/service/uiux' ? 'is-active' :'' " >
                    <div class="item-media">
                      <img :src="require('~/assets/img/service/service5.svg')" class="img-default" alt="">
                      <img :src="require('~/assets/img/service/service5-active.svg')" class="img-active" alt="">
                    </div>
                    <div class="item-title">
                      UI/UX 設計
                    </div>
                  </NuxtLink>
                </div>
                <!-- Slides -->
                <div class="swiper-slide" >
                  <NuxtLink to="/service/erp" class="item-box" :class="$nuxt.$route.path === '/service/erp' ? 'is-active' :'' " >
                    <div class="item-media">
                      <img :src="require('~/assets/img/service/service6.svg')" class="img-default" alt="">
                      <img :src="require('~/assets/img/service/service6-active.svg')" class="img-active" alt="">
                    </div>
                    <div class="item-title">
                      全方位 ERP
                    </div>
                  </NuxtLink>
                </div>
                <!-- Slides -->
                <div class="swiper-slide" >
                  <NuxtLink to="/service/linebot" class="item-box" :class="$nuxt.$route.path === '/service/linebot' ? 'is-active' :'' " >
                    <div class="item-media">
                      <img :src="require('~/assets/img/service/service7.svg')" class="img-default" alt="">
                      <img :src="require('~/assets/img/service/service7-active.svg')" class="img-active" alt="">
                    </div>
                    <div class="item-title">
                      LINE 機器人
                    </div>
                  </NuxtLink>
                </div>
                <!-- Slides -->
                <div class="swiper-slide" >
                  <NuxtLink to="/service/maintenance" class="item-box" :class="$nuxt.$route.path === '/service/maintenance' ? 'is-active' :'' " >
                    <div class="item-media">
                      <img :src="require('~/assets/img/service/service8.svg')" class="img-default" alt="">
                      <img :src="require('~/assets/img/service/service8-active.svg')" class="img-active" alt="">
                    </div>
                    <div class="item-title">
                      網站維護與保固
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <!-- <div class="swiper-next ">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div> -->
        </div>
    </v-container>
  </div>
</template>

<script>
export default {
    props:{

    },
    data: () => ({ 
      show: false,
      isAllSlideVisible: true,
    }),
    methods: {
    },
    mounted(){
      var that = this;

      console.log('$nuxt.$route.path', $nuxt.$route.path)
      console.log('$nuxt.$route.path', $nuxt.$route)


      const swiperBtnPrev = document.querySelector('.service-tab .swiper-prev')
      const swiperBtnNext = document.querySelector('.service-tab .swiper-next')
      const serviceTabSwiper = new Swiper('.service-tab .swiper', {
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
          // 0: {
          //   slidesPerView: 1,
          //   spaceBetween: 0
          // },
          // 476: {
          //   slidesPerView: 2,
          //   spaceBetween: 0
          // },
          // 600: {
          //   slidesPerView: 3,
          //   spaceBetween: 0
          // },
          // 768: {
          //   slidesPerView: 4,
          //   spaceBetween: 0
          // },
          // 930: {
          //   slidesPerView: 5,
          //   spaceBetween: 0
          // },
          // 1100: {
          //   slidesPerView: 6,
          //   spaceBetween: 0
          // },
          // 1300: {
          //   slidesPerView: 7,
          //   spaceBetween: 0
          // },
          // 1500: {
          //   slidesPerView: 8,
          //   spaceBetween: 0
          // },
        },
        // slidesPerView: 7,
        slidesPerView: 'auto',
        spaceBetween: 0,
        on: {
          init(swiper){
            if ( !swiper.isBeginning || !swiper.isEnd ) {
              that.isAllSlideVisible = false;
            }
            
          },
          afterInit(swiper){
            window.rrr = swiper
            
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
          switch ($nuxt.$route.path) {
            case '/service/design':
              swiper.slideTo(0,0)
              break;
            case '/service/wordpress':
              swiper.slideTo(1,0)
              break;
            case '/service/app-develop':
              swiper.slideTo(2,0)
              break;
            case '/service/software-design':
              swiper.slideTo(3,0)
              break;
            case '/service/uiux':
                console.log('slude')
              swiper.slideTo(4,0)
              break;
            case '/service/erp':
              swiper.slideTo(5,0)
              break;
            case '/service/linebot':
              swiper.slideTo(6,0)
              break;
            case '/service/maintenance':
              swiper.slideTo(7,0)
              break;
            default:
              break;
          }
      }

      $(this.$refs['service-tab']).on('click', '.swiper-slide', ()=> {
        updateActive(serviceTabSwiper)
      })

    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.service-tab-outer{
  background: #FFFFFF;
  position: sticky;
  top: var(--app-bar-1-height-val);
  z-index: 100;
}

.container-service-tab{
  padding: 0;
  max-width: calc(1300px + 24px /* 24 : vutify col gap */);
}

.service-tab{
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

  .swiper-slide{
    width: 162px;
  }

  .swiper-slide + .swiper-slide .item-box{
    position: relative;
    &:before{
      content:'';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 1px;
      background: #F1F1F1;
      height: calc(100% - 26px);
    }
  }

  .item-box.is-active{
    color: #fff;
    background:#E7142D;
    .img-default{
      display: none;
    }
    .img-active{
      display: block;
    }
    &:before{
      display: none!important;
    }
    &:hover{
      background:#E7142D;
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
  .v-slide-group__next,
  .v-slide-group__prev{
    .v-icon{
      font-size: 44px;
    }
  }

  .v-tabs-slider-wrapper{
    display: none;
  }
  .v-tab{
    padding: 0 8px;
    padding-bottom: 15px;
    &:before{
      background-color: #D11329;
    }
    &:hover:before{
      opacity: 0.12;
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

  .service-item{
    min-width: 200px;
    width: calc(100% / 7);
    max-width: calc(100% / 7);
    &.v-tab--active{
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
  }
  .item-box{
    display: block;
    width:100%;
    color: $color-font;
    text-decoration: none;
    text-align: center;
    transition: .3s;
    padding-bottom: 16px;
    &:hover{
      background: #FFEBED;
    }
  }
  .item-media{
    position: relative;
    height: 60px;
    img{
      @include absolute(0,0,0,0);
      margin: auto;
      max-height: 100%;
    }
  }
  .item-title{
    font-size: 14px;
    line-height: calc(24 / 14);
    @include letter-spacing-center(1.2px);
    font-weight: 500;
  }

  @include media($breakpoints-design-tablet){
    .swiper-slide{
      width: rwd-val(375px, 146px, 768px, 162px);
    }
  }
  @include media($breakpoints-design-mobile){
    .swiper-slide{
      width: 146px;
    }
  }
}

</style>



