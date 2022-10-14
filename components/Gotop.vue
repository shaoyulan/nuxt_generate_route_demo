<template>
    <a class="go-top" @click="goTop" :class="nowScroll > 100 ? 'is-show':''">
      <div class="go-top__circle">
        <img class="go-top__arrow" src="~assets/img/icon/gotop-arrow.svg" alt="">
      </div>
      <div class="go-top__text">
        PAGE TOP
      </div>
    </a>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{

    },
    data: () => ({ 
      store: useGlobalStore(),
      nowScroll: 0,
    }),
    computed:{
    },
    destroyed(){
      $(window).unbind('scroll', this.onScroll)
    },
    methods:{
      onScroll(){
        this.nowScroll = window.pageYOffset
      },
      goTop(){
        var that = this;
        that.store.isGoingTopDoing = true;
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo", ()=>{
          that.store.isGoingTopDoing = false;
        });
      }
    },
    mounted(){
      $(window).on('scroll', this.onScroll)

      $.extend($.easing,{
        easeInOutExpo: function (x, t, b, c, d) {
          if (t == 0) return b;
          if (t == d) return b + c;
          if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
      })
    }
}
</script>

<style lang="scss" scoped >
@import "~assets/css/design";

.go-top{
  display: inline-block;
  position: absolute;
  right: 40px;
  bottom: 90px;
  z-index: 5;
  .no-go-top &{
    visibility: hidden;
  }

  img, svg{
    max-width: 100%;
  }

  &.is-show{
    opacity: 1;
  }

  &:hover{
    .go-top__arrow{
      transform: translateX(-50%) translateY(-12px);
    }
  }

  &__circle{
    width: 45px;
    border-radius: 50%;
    border: 1px solid #E7142D;
    margin-bottom: 33px;
    position: relative;
    &:before{
      content:'';
      display: block;
      padding-top: 100%;
    }
  }

  &__arrow{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    transition: .3s;
  }

  &__text{
    color: #252525;
    writing-mode: vertical-lr;
    margin: 0 auto;
    line-height: calc(19.5 / 16 * 1em);
    letter-spacing: 0.12em;
    font-weight: 600;
    padding-top: 17px;
  }

}

</style>



