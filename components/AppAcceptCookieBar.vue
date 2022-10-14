<template>
  <div 
    class="app-accept-cookie-bar"
    :class="{
      'app-accept-cookie-bar_close': close
    }"
  >
    <div class="app-accept-cookie-bar__content">
      <div class="app-accept-cookie-bar__text">
        依據歐盟施行的個人資料保護法，我們致力於保護您的個人資料並提供您對個人資料的掌握。 我們已更新並將定期更新我們的隱私權政策，以遵循該個人資料保護法。請您參照我們最新版的<a href="javascript:;" @click="$router.push('/privacy')">隱私權聲明</a>。
      </div>
      <div class="app-accept-cookie-bar__text">
        為增進您的使用體驗，本網站使用 <a href="javascript:;" @click="$router.push('/cookies')">Cookies</a>，您可以點選以詳細了解其內容。繼續使用本網站，即表明同意我們使用的 Cookies。
      </div>
    </div>
    <div class="app-accept-cookie-bar__overlay"></div>
    <button class="app-accept-cookie-bar__btn" @click="close = true">
      CONTINUE
    </button>
  </div>
</template>

<script>
export default {
    props:{
    },
    data: () => ({ 
      close: false
    }),
    mounted(){
    },
    methods:{
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.app-accept-cookie-bar{
  position: fixed;
  z-index: 5;
  left: 50%;
  width: 1130px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: calc(100% - 48px);
  display: flex;
  align-items: center;
  bottom: 20px;
  background:#FFFFFF;
  padding: 16px 30px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  font-size: 14px;
  line-height: calc(24 / 14 * 1em);
  font-family: $ff-noto;
  transform: translateY(100%) translateY(50px);
  transition: .3s;
  overflow: hidden;
  &_close{
    opacity: 0;
    visibility: hidden;
  }

  .is-ready & {
    transform: translateY(0);
  }

  &__text{
    letter-spacing: calc(1.2 / 14 * 1em);
    &:not(:last-child){
      margin-bottom: 8px;
    }
  }

  &__btn{
    background: #E7142D;
    padding: 8px 20px;
    letter-spacing: calc(0.8 / 14 * 1em);
    font-weight: 500;
    height: 40px;
    border-radius: 20px;
    margin-left: 30px;
    color: #fff;
    white-space: nowrap;
    cursor: pointer;
    transition: .3s;
    width: 153px;
    flex-shrink: 0;
    text-align: center;
    &:hover{
      background: darken(#E7142D, 5%);
    }
  }

  a{
    text-decoration: underline;
    color: #E7142D;
  }

  &__overlay{
    position: absolute;
    left: 0;
    right: 0;
    height: 100px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 61.69%);
    opacity: 0;
    pointer-events: none;
  }

  @include media($breakpoints-design-tablet){
    flex-direction: column;
    &__btn{
      margin-top: 16px;
      margin-left: 0;
    }
  }

  @include media(414){
    &__overlay{
      opacity: 1;
    }
    &__content{
      max-height: 203px;
      overflow-y: auto;
      margin-bottom: 20px;
      padding-bottom: 30px;
    }
    &__btn{
      position: absolute;
      bottom: 17px;
    }
  }
}

</style>



