<template>
    <div 
      ref="refRoot"
      class="nav-circle"
      :class="{
        'nav-circle_show': show,
        'nav-circle_first-showed': firstShowed,
      }"
    >
      <div class="nav-circle-indicator">
        <div class="nav-circle-indicator__box nav-circle-indicator__box1">
          <img 
            class="nav-circle-indicator__icon" 
            src="~/assets/img/icon/arrow-up.svg" alt="" srcset=""
            @click="goPrev(getFContent(0).href)"
          >
          <div class="nav-circle-indicator__num">
            {{ activeContent.idx < 9 ? `0${activeContent.idx}` : activeContent.idx }}
          </div>
        </div>
        <div class="nav-circle-indicator__line"></div>
        <div class="nav-circle-indicator__box nav-circle-indicator__box2">
            <div class="nav-circle-indicator__num">
              {{ list.length < 9 ? `0${list.length}` : list.length }}
            </div>
            <img 
              @click="goNext(getFContent(2).href)" 
              class="nav-circle-indicator__icon" 
              src="~/assets/img/icon/arrow-down.svg" alt="" srcset=""
            >
          </div>
      </div>
      <div class="nav-circle-main">
        <div 
          v-for="idx in 20" :key="idx"
          class="navcircle" 
          :class="{
            'navcircle_visible': idx == f1 || idx == f2 || idx == f3,
            'navcircle_active': idx == f2
          }"
        >
          <template v-if="idx == beforeF1">
            <div class="navcircle__center">
              <div class="navcircle__dot"></div>
              <div class="navcircle__content">{{getFContent(-1).name}}</div>
            </div>
            <span class="temp">
              {{idx}}
            </span>
          </template>
          <template v-if="idx == f1">
            <div class="navcircle__center" data-1 @click="goPrev(getFContent(0).href)">
              <div class="navcircle__dot"></div>
              <div class="navcircle__content">{{getFContent(0).name}}</div>
            </div>
            <span class="temp">
              {{idx}}
            </span>
          </template>
          <template v-if="idx == f2">
            <div 
              data-2
              class="navcircle__center"
              :class="{
                'navcircle__center_fff': activeContent.href == '#professional'
              }"
            >
              <div class="navcircle__dot"></div>
              <div class="navcircle__content">{{getFContent(1).name}}</div>
            </div>
            <span class="temp">
              {{idx}}
            </span>
          </template>
          <template v-if="idx == f3">
            <div class="navcircle__center" data-3 @click="goNext(getFContent(2).href)">
              <div class="navcircle__dot"></div>
              <div class="navcircle__content">{{getFContent(2).name}}</div>
            </div>
            <span class="temp">
              {{idx}}
            </span>
          </template>
          <template v-if="idx == afterf3">
            <div class="navcircle__center">
              <div class="navcircle__dot"></div>
              <div class="navcircle__content">{{getFContent(3).name}}</div>
            </div>
            <span class="temp">
              {{idx}}
            </span>
          </template>
        </div>
      </div>
    </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
  props:{
  },
  data: () => ({ 
    store: useGlobalStore(),
    list: [
      {
        id: 1,
        idx: 6,
        name: '知識分享',
        href:"#blog",
      },
      {
        id: 2,
        idx: 1,
        name: '最新消息',
        href:"#news"
      },
      {
        id: 3,
        idx: 2,
        name: '服務項目',
        href:"#services"
      },
      {
        id: 4,
        idx: 3,
        name: '專業與肯定',
        href:"#professional"
      },
      {
        id: 5,
        idx: 4,
        name: '設計案例',
        href:"#works"
      },
      {
        id: 6,
        idx: 5,
        name: '我們的客戶',
        href:"#clients"
      },
    ],

    htmlCollection:'',
    itemsId:'',
    sectionDeg:'',
    radianSectionDeg:'',
    radiusLength: 385,

    rotateCount: 0,
    rotation:0,
    center:'',

    isSelfScrolling: false,
    firstShowedTimeout: '',
    firstShowed: false,
    show: false,
  }),
  computed:{
    beforeF1(){
      return this.getRealIdx(4 + this.rotateCount);
    },
    f1(){
      return this.getRealIdx(5 + this.rotateCount);
    },
    f2(){
      return this.getRealIdx(6 + this.rotateCount);
    },
    f3(){
      return this.getRealIdx(7 + this.rotateCount);
    },
    afterf3(){
      return this.getRealIdx(8 + this.rotateCount);
    },

    activeContent(){
      var result = this.getFContent(1);
      if ( result ) {
        return result;
      }
      return {}
    }
  },  
  watch:{
    // gotop 被點擊
    'store.isGoingTopDoing':function(){
      this.turnLeftTo(this.list[0].href)
    }
  },
  methods: {
    getRealIdx(rawIdx){
      var itemCount = this.itemsId.length
      var realRawIdx = rawIdx % itemCount;
      if ( realRawIdx < 1) {
        return itemCount + realRawIdx
      } else {
        return realRawIdx
      }
    },
    // 取得對應的內容
    getFContent(Fnum){
      // 內容數量
      var contentCount = this.list.length
      // raw Content idx
      var rawContentIdx = Fnum + this.rotateCount;
      // real Content idx
      var realRotateCount = rawContentIdx % contentCount;

      if ( realRotateCount < 0) {
        return this.list[contentCount + realRotateCount]
      } else {
        return this.list[realRotateCount]
      }
    },  
    turnLeft(numberOfSlide = 1){

      this.rotateCount -= numberOfSlide;
      this.rotation = this.rotation + (this.radianSectionDeg * numberOfSlide);
      this.center.style.transform = 'rotate('+ this.rotation +'rad)';

      for(var i=0; i<this.itemsId.length; i++){
        this.itemsId[i].style.transform = 'rotate('+ -this.rotation +'rad)';
      }
    },
    turnRight(numberOfSlide = 1){

      this.rotateCount += numberOfSlide;
      this.rotation = this.rotation - (this.radianSectionDeg * numberOfSlide);
      this.center.style.transform = 'rotate('+this.rotation+'rad)';
      for(var i=0; i<this.itemsId.length; i++){
        this.itemsId[i].style.transform = 'rotate('+ -this.rotation +'rad)';
      }
    },
    async turnLeftTo(href){
      var activeItem = this.activeContent;
      var activeIdxInList;
      var targetIdxInList;
      var countToAction;

      this.list.some((item, idx)=>{
        if ( item.href == activeItem.href ){
          activeIdxInList = idx;
          return true
        }
      });

      this.list.some((item, idx)=>{
        if ( item.href == href ){
          targetIdxInList = idx;
          return true
        }
      });

      if ( targetIdxInList < activeIdxInList ) {
        countToAction = activeIdxInList - targetIdxInList
      }

      if ( targetIdxInList > activeIdxInList ){
        countToAction = activeIdxInList + (this.list.length - targetIdxInList)
      }

      if ( countToAction ) {
        for(let i = 0; i < countToAction; i++){
          await new Promise((resolve, reject)=>{
            this.turnLeft()
            setTimeout(()=>{
              resolve() 
            }, 600 /* 0.5s */)
          })
        }
      }
    },
    async turnRighttTo(href){
      var activeItem = this.activeContent;
      var activeIdxInList;
      var targetIdxInList;
      var countToAction;

      this.list.some((item, idx)=>{
        if ( item.href == activeItem.href ){
          activeIdxInList = idx;
          return true
        }
      });

      this.list.some((item, idx)=>{
        if ( item.href == href ){
          targetIdxInList = idx;
          return true
        }
      });

      if ( targetIdxInList > activeIdxInList ) {
        countToAction = targetIdxInList - activeIdxInList;
      }
      
      if ( targetIdxInList < activeIdxInList ){
        countToAction = targetIdxInList + (this.list.length - activeIdxInList)
      }

      if ( countToAction ) {
        for(let i = 0; i < countToAction; i++){
          await new Promise((resolve, reject)=>{
            this.turnRight()
            setTimeout(()=>{
              resolve() 
            }, 600 /* 0.5s */)
          })
        }
      }
    },
    goPrev(href){
      this.turnLeft()
      this.scrollTo(href)
    },
    goNext(href){
      this.turnRight()
      this.scrollTo(href)
    },
    onScroll(){
      if ( this.isSelfScrolling || this.store.isGoingTopDoing ) {
        return
      };

      var that = this;
      var viewCenter = window.pageYOffset + (window.innerHeight / 2);
      var viewCenterTop = window.pageYOffset + (window.innerHeight * 0.3 );
      var bannerBottom = $('section.banner').offset().top + $('section.banner').outerHeight()
      var bannerDecoBottom = $('.deco-wrap__curl').offset().top + $('.deco-wrap__curl').outerHeight()
      var contactTop = $('section.contact').offset().top;
      var refRoot = $(this.$refs['refRoot']);
      var navCircleTop = refRoot.length ? refRoot.offset().top : 0;
      var navCircleBottom = navCircleTop + (refRoot.length ? refRoot.outerHeight() : 0)
      
      this.list.forEach(item=>{
        var targetDom = $(item.href);
        if ( targetDom.length ) {
          var targetTop = targetDom.offset().top;
          var targetBottom = targetTop + targetDom.outerHeight();

          // 是否進入目標區
          if ( viewCenter > targetTop && viewCenter < targetBottom ) {

            if (!that.activeContent) return;

            if ( that.activeContent.href !== item.href ){
              if ( viewCenter - targetTop > targetBottom - viewCenter) {

                // 正在往上滑
                that.turnLeftTo(item.href)
              } else {
                // 正在往下滑
                that.turnRighttTo(item.href)
              }
            }
          }
        }
      })

      if (  bannerDecoBottom < viewCenterTop && contactTop > navCircleBottom) {
        this.show = true;
        if ( !this.firstShowed ) {
          if ( this.firstShowedTimeout ) clearTimeout(this.firstShowedTimeout);
          this.firstShowedTimeout = setTimeout(()=>{
            that.firstShowed = true
          }, 1000)
        }
      } else {
        this.show = false;
      }
    },
    scrollTo(href){
      var that = this;
      this.isSelfScrolling = true;

      var scrollTop = $(href).length ? $(href).offset().top : '';
      var headerHeight = $('.app-bar-1').height() || 0;

      if ( $(href).length ) {
        $('html, body').stop().animate({
          scrollTop: scrollTop - headerHeight,
        }, 1000, "easeInOutExpo", function(){
          that.isSelfScrolling = false;
        })
      }
    }
  },
  mounted(){
    this.htmlCollection = document.getElementsByClassName('navcircle');
    this.itemsId = Array.from(this.htmlCollection);
    this.sectionDeg = 360/this.itemsId.length;
    this.radianSectionDeg = this.sectionDeg*Math.PI*2/360;

    for(var i=0; i<this.itemsId.length; i++){
      this.itemsId[i].style.top = this.radiusLength*Math.sin(this.radianSectionDeg*i-1.5708)-50+'px';
      this.itemsId[i].style.left = this.radiusLength*Math.cos(this.radianSectionDeg*i-1.5708)-50+'px';
    }

    this.center = document.querySelector('.nav-circle-main');

    window.rr = this.turnRight
    window.ll = this.turnLeft
    window.sf = this;

    window.addEventListener('scroll', this.onScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style lang="scss">
@import "~assets/css/design";

.nav-circle{
  width: 770px;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateX(-100%) translateY(-50%);
  z-index: 4;
  border: 1px solid #D3D3D3;
  border-radius: 50%;
  transition: .3s;
  opacity: 0;

  &:before{
    content:'';
    display: block;
    padding-top: 100%;
  }

  &_show{
    transform: translateX(-100%) translateY(-50%) translateX(108px);
    opacity: 1;
  }

  &:not(.nav-circle_show){
    .navcircle_visible{
      .navcircle__center{
        opacity: 0;
      }
    }
    .nav-circle-indicator{
      transform: translateY(-50%) translateX(-200%);
    }
  }

  &:not(.nav-circle_first-showed){
    .navcircle__center{
      &[data-1]{
        transition-delay: 0.3s;
      }
      &[data-2]{
        transition-delay: 0.4s;
      }
      &[data-3]{
        transition-delay: 0.5s;
      }
    }
  }

  .nav-circle__list{
    @include absolute(0,0,0,0);
  }

  .nav-circle-main{
    transition: .5s;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .navcircle{
    @include flex(center, center);
    position: absolute;
    transform-origin: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    // border: 2px solid lightblue;
    opacity: 0;
    transition: .5s;
  }

  .navcircle_visible{
    opacity: 1;
  }
  .navcircle_active{
    opacity: 1;
    .navcircle__dot{
      background: #E7142D;
      box-shadow: 0px 0px 12px rgba(221, 56, 53, 0.5);
    }
    .navcircle__content{
      color: #000;
    }
  }
  .navcircle__center{
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    transform: translateY(-50%) translateX(-6px);
    cursor: pointer;
    transition: .5s ease;
  }
  .navcircle__center_fff{
    .navcircle__content{
      color: #fff;
    }
  }
  .navcircle__dot{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #7C7C7C;
    margin-right: 10px;
    transition: .5s;
  }
  .navcircle__content{
    white-space: nowrap;
    color: #7C7C7C;
    line-height: calc(28 / 16);
    letter-spacing: 1.2px;
    transition: .5s;
  }
  .temp{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: none;
  }
}

.nav-circle-indicator{
    position: absolute;
    right: calc(108 / 2 * 1px);
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    width: 28px;
    transition: .5s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition-delay: 1s;
    &__icon{
      display: block;
      margin: 0 auto;
      cursor: pointer;
    }
    &__num{
      font-family: $ff-montserrat;
      font-weight: bold;
      font-size: 14px;
      line-height: calc(30/ 20 * 1em);
      letter-spacing: 0.035em;
      text-indent: 0.035em;
    }
    &__box1{
      .nav-circle-indicator__icon{
          margin-bottom: 20px;
      }
      .nav-circle-indicator__num{
          font-size: 20px;
          color: #E7142D;
      }
    }
    &__box2{
      .nav-circle-indicator__icon{
          margin-top: 20px;
      }
      .nav-circle-indicator__num{
          color: #7C7C7C;
      }
    }
    &__line{
      height: 1px;
      background: #E9E9E9;
      max-width: 23px;
      margin: 20px auto;
    }
}

.nav-circle-list{
    &__item{
        position: absolute;
        display: flex;
        align-items: center; 
        white-space: nowrap;
        color: #7C7C7C;
        font-size: 14px;
        font-family: $ff-noto;
        transition: .6s;

        &:before{
            content:'';
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #A7A7A7;
            margin-right: 12px;
        }

        &.prev{
            position: absolute;
            top: 35%;
            left: calc(98% - 3px);
        }

        &.current{
            top: 50%;
            left: calc(100% - 6px);
            font-size: 16px;
            color: #000000;
            
            &:before{
                height: 12px;
                width: 12px;
                background: #E7142D;
                box-shadow: 0px 0px 12px rgba(221, 56, 53, 0.5);
            }
        }

        &.next{
            top: 65%;
            left: calc(98% - 9px);
        }
    }
}

</style>



