<template>
  <div class="related-read-block">
    <div class="related-read-block__list">
      <div v-if="store.windowInnerWidth > 768" class="related-read-item" v-for="idx in 3" :key="idx">
        <div class="related-read-item__date">
          <div class="related-read-item__date-text">13</div>
          <div class="related-read-item__date-info">MAY 10</div>
        </div>
        <div class="related-read-item__main">
          <div class="related-read-item__title">
            有人跟你說你的 idea 不可能？太棒了！
          </div>
          <div class="related-read-item__des">
            app 不像網頁一般需要高度仰賴網路速度，因此運作速度通常較快。不過響應式網頁或許已經快趕上這個差距。假設您希望增加產品在搜尋引擎上的可見度，並吸引更多流量，請選擇響應式網頁。app 屬於封閉式環境，無法被搜尋引擎擷取，所以不會對基本搜尋（organic search）排名造成影響。
          </div>
        </div>
        <div class="related-read-item__media">
          <img src="https://picsum.photos/164/105" alt="">
        </div>
      </div>
      <div v-if="store.windowInnerWidth <= 768" class="related-read-mobile-item" v-for="idx in 3" :key="idx">
        <div class="related-read-mobile-item__media">
          <img src="https://picsum.photos/360/230" alt="">
        </div>
        <div class="related-read-mobile-item__main">
          <div class="related-read-mobile-item__top-info">
            <div class="related-read-mobile-item__date">
              <div class="related-read-mobile-item__date-text">13</div>
              <div class="related-read-mobile-item__date-info">MAY 10</div>
            </div>
            <div class="related-read-mobile-item__title">
              有人跟你說你的 idea 不可能？太棒了！
            </div>
          </div>
          <div class="related-read-mobile-item__des">
            app 不像網頁一般需要高度仰賴網路速度，因此運作速度通常較快。不過響應式網頁或許已經快趕上這個差距。假設您希望增加產品在搜尋引擎上的可見度，並吸引更多流量，請選擇響應式網頁。app 屬於封閉式環境，無法被搜尋引擎擷取，所以不會對基本搜尋（organic search）排名造成影響。
          </div>
        </div>
      </div>
    </div>
    <div class="related-read-block__line"></div>
    <div class="related-read-block__nav-wrap">
      <div class="related-read-block__nav">
        <div class="related-read-block__nav-icon">
          <i class="icon-arrow-left"></i>
        </div>
        <div class="related-read-block__nav-text">
          【CIS企業識別的重要性】網站想要做的好，企業DNA不能少
        </div>
      </div>
      <div class="related-read-block__nav-line"></div>
      <div class="related-read-block__nav">
        <div class="related-read-block__nav-text">
          【CIS企業識別的重要性】網站想要做的好，企業DNA不能少
        </div>
        <div class="related-read-block__nav-icon">
          <i class="icon-arrow-right"></i>
        </div>
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
    }),
    mounted(){
      var that = this;
    },
    methods:{
      onScroll(){

      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.related-read-block{
  $self: &;
  &__list{
    .related-read-item{
      padding:32px 0;
      border-bottom: 1px solid #E9E9E9;
    }
    .related-read-mobile-item{
      padding:40px 0;
      border-bottom: 1px solid #E9E9E9;
    }
  }
  &__nav-wrap{
    display: flex;
    align-items: center;
    padding: 24px 0;
    border-bottom: 1px solid #E9E9E9;
  }
  &__nav{
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover{
      .related-read-block__nav-text,
      .related-read-block__nav-icon
      {
        color: #E7142D;
      }
    }
  }
  &__nav-icon{
    font-size: 26px;
    color: #505050;
    transition: .3s;
  }
  &__nav-text{
    padding: 15px 30px;
    font-size: 24px;
    line-height: calc(36 / 24);
    letter-spacing: calc(2.5 / 24 * 1em);
    color: #505050;
    transition: .3s;
  }
  &__nav-line{
    width: 1px;
    align-self: stretch;
    background: #E9E9E9;
  }

  @include media($breakpoints-design-tablet){
    .related-read-block__nav-wrap{
      flex-wrap: wrap;
      padding: 0;
      border-bottom: 0;
      .related-read-block__nav{
        width: 578px;
        max-width: 100%;
        margin: auto;
        &:first-child{
          .related-read-block__nav-text{
            padding-right: 0;
          }
        }
        &:last-child{
          .related-read-block__nav-text{
            padding-left: 0;
          }
        }
      }
      .related-read-block__nav-line{
        width: 100%;
        height: 1px;
      }
      .related-read-block__nav-icon{
        font-size: rwd-val(375px, 21px, 768px, 26px);
      }
      .related-read-block__nav-text{
        font-size: rwd-val(375px, 18px, 768px, 24px);
      }
    }
  }

  @include media(650){
    .related-read-mobile-item{
      display: block;
      .related-read-mobile-item__media{
        width: 100%;
        margin-bottom: 23px;
      }
    }
  }

  @include media($breakpoints-design-mobile){
    .related-read-block__nav-wrap{
      .related-read-block__nav-icon{
        font-size: 21px;
      }
      .related-read-block__nav-text{
        font-size: 18px;
      }
    }
  }
}

.related-read-item{
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    .related-read-item__title{
      color: #E7142D;
    }
  }
  &__date{
    font-size: 40px;
    margin-right: calc(52 / 40 * 1em);
    font-family: $ff-montserrat;
    text-align: center;
    flex-shrink: 0;
  }
  &__date-text{
    line-height: calc(39 / 40 * 1em);
    letter-spacing: calc(2.5 / 40 * 1em);
    text-indent: calc(2.5 / 40 * 1em);
    color: #E7142D;
  }
  &__date-info{
    font-size: 13px;
    line-height: calc(28 / 13);
    letter-spacing: calc(2.5 / 13 * 1em);
    text-indent: calc(2.5 / 13 * 1em);
    color: #7C7C7C;
  }
  &__main{
    margin-right: 48px;
  }
  &__title{
    font-size: 24px;
    line-height: calc(32 / 24);
    letter-spacing: calc(2.5 / 24 * 1em);
    margin-bottom: 0.5em;
    transition: .3s;
    @include text-ellipsis;
  }
  &__des{
    line-height: calc(28 / 16);
    letter-spacing: calc(1.2 / 16 * 1em);
    color: #848484;
    @include text-lines-ellipsis(calc(28 / 16 * 1em), 2);
  }

}

.related-read-mobile-item{
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  &__media{
    flex-shrink: 0;
    margin-right: 20px;
    width: calc(291 / 648 * 100%);
    position: relative;
    &:before{
      content:'';
      display: block;
      padding-top: calc(230 / 360 * 100%);
      background: #fafafa;
    }
    img{
      @include absolute(0,0,0,0);
      margin: auto;
      max-height: 100%;
    }
  }
  &__top-info{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  &__date{
    text-align: center;
    font-size: 32px;
    margin-right: 24px;
    font-family: $ff-montserrat;
    flex-shrink: 0;
  }
  &__date-text{
    color: #E7142D;
    letter-spacing: 2.5px;
  }
  &__date-info{
    color: #7C7C7C;
    font-size: 13px;
    line-height: calc(28 / 13);
    letter-spacing: 2.5px;
    font-weight: 500;
  }
  &__title{
    font-size: 20px;
    line-height: calc(30 / 20);
    letter-spacing: 1.5px;
  }
  &__des{
    font-size: 16px;
    line-height: calc(28 / 16);
    letter-spacing: 1.2px;
    color: #848484;
  }
}

</style>



