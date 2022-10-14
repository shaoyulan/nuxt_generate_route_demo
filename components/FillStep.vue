<template>
  <div class="fill-step">
    <div class="swiper">
       <div class="swiper-wrapper">
         <div style="width: 113px;" class="swiper-slide" :class="getClass(1)">
          <div class="step-item">
            <div class="step-item__num-wrp">
              <div class="step-item__num">1</div>
            </div>
            <div class="step-item__title">填寫資料</div>
          </div>
         </div>
         <div style="width: 113px;" class="swiper-slide" :class="getClass(2)">
          <div class="step-item">
            <div class="step-item__num-wrp">
              <div class="step-item__num">2</div>
            </div>
            <div class="step-item__title">選擇版式</div>
          </div>
         </div>
         <div style="width: 113px;" class="swiper-slide" :class="getClass(3)">
          <div class="step-item">
            <div class="step-item__num-wrp">
              <div class="step-item__num">3</div>
            </div>
            <div class="step-item__title">確認資料</div>
          </div>
         </div>
         <div style="width: 113px;" class="swiper-slide" :class="getClass(4)">
          <div class="step-item">
            <div class="step-item__num-wrp">
              <div class="step-item__num">4</div>
            </div>
            <div class="step-item__title">手機驗證</div>
          </div>
         </div>
         <div style="width: 113px;" class="swiper-slide" :class="getClass(5)">
          <div class="step-item">
            <div class="step-item__num-wrp">
              <div class="step-item__num">5</div>
            </div>
            <div class="step-item__title">登入後台</div>
          </div>
         </div>
         <div style="width: 113px;" class="swiper-slide" :class="getClass(6)">
          <div class="step-item">
            <div class="step-item__num-wrp">
              <div class="step-item__num">6</div>
            </div>
            <div class="step-item__title">選擇主機</div>
          </div>
         </div>
         <div style="width: 147px;" class="swiper-slide" :class="getClass(7)">
          <div class="step-item">
            <div class="step-item__num-wrp">
              <div class="step-item__num">7</div>
            </div>
            <div class="step-item__title">線上簽約付款</div>
          </div>
         </div>
         <div style="width: 147px;" class="swiper-slide" :class="getClass(8)">
          <div class="step-item">
            <div class="step-item__num-wrp">
              <div class="step-item__num">8</div>
            </div>
            <div class="step-item__title">上傳風格資料</div>
          </div>
         </div>
         <div style="width: 113px;" class="swiper-slide" :class="getClass(9)">
          <div class="step-item">
            <div class="step-item__num-wrp">
              <div class="step-item__num">9</div>
            </div>
            <div class="step-item__title">製作測試</div>
          </div>
         </div>
         <div style="width: 113px;" class="swiper-slide" :class="getClass(10)">
          <div class="step-item">
            <div class="step-item__num-wrp">
              <div class="step-item__num">10</div>
            </div>
            <div class="step-item__title">完成交件</div>
          </div>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
import { get } from 'http';
export default {
    props:{
      step: [String, Number]
    },
    data: () => ({ 
      store: useGlobalStore(),
      swiper: '',
    }),
    mounted(){
      var that = this;
      var config = {
        spaceBetween: 0,
        slidesPerView: 'auto',
        resistance: true,
        resistanceRatio: 0
      }
      const swiper = new Swiper('.fill-step .swiper', config);
      this.swiper = swiper;
      window.ssp = swiper
    },
    watch:{
      step(){
        if ( this.swiper && this.step){
          this.swiper.slideTo(this.step - 1);
        }
      }
    },
    methods:{
      getClass(num){
        if ( num < this.step ){
          return ['before-active']
        } 

        if ( num == this.step ) {
          return ['active']
        }
      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.fill-step{
  .step-item{
    text-align: center;
    .step-item__num-wrp{
      position: relative;
      &:before, &:after{
        content:'';
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        background: #E9E9E9;
      }
      &:before{
        right: 50%;
      }
      &:after{
        left: 50%;
      }
    }
    .step-item__num{
      @include flex(center, center);
      position: relative;
      z-index: 1;
      width: 40px;
      height: 40px;
      margin: auto;
      color: #fff;
      background: #D3D3D3;
      margin-bottom: 15px;
      border-radius: 50%;
      font-weight: 700;
    }
    .step-item__title{
      line-height: calc(28 / 16);
      letter-spacing: 1.2px;
      text-indent: 1.2px;
      color: #7C7C7C;
      line-height: 1;
      padding-top: 5px;
    }
  }

  .swiper-slide{
    width: auto;
    flex-grow: 1;
    &:first-child{
      .step-item__num-wrp{
        &:before{
          display: none;
        }
      }
    }
    &:last-child{
      .step-item__num-wrp{
        &:after{
          display: none;
        }
      }
    }
    &.before-active{
      .step-item__num-wrp{
        &:before, &:after{
          background: #E7142D;
        }
      }
      .step-item__num{
        color: #E7142D;
        background: #E7142D;
        &:after{
          content:'';
          display: block;
          width: 19px;
          height:15px;
          background: url('~/assets/img/icon/check-w.svg');
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }
      .step-item__title{
        color: #252525;
      }
    }
    &.active{
      .step-item__num-wrp{
        &:before{
          background: #E7142D;
        }
      }
      .step-item__num{
        background: #E7142D;
      }
      .step-item__title{
        color: #252525;
      }
    }
    +.swiper-slide{
      // &:before{
      //   content:'';
      //   display: block;
      //   height: 1px;
      //   background: #E9E9E9;
      //   position: absolute;
      // }
    }
  }
}

</style>



