<template>
  <div 
    class="base-no-data"
    :class="{
      'base-no-data_inline': inline
    }"
  >
    <div class="base-no-data__inner">
      <div class="base-no-data__title">
        OOPS！查無搜尋結果
      </div>
      <div class="base-no-data__icon">
        <img src="~/assets/img/general/no-data.svg" alt="" srcset="">
      </div>
      <div class="base-no-data__des">
        試著輸入其他關鍵字吧！ex.網頁、科技、軟體
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    inline: Boolean,
  },
  data: () => ({ 
  }),
  mounted(){
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.base-no-data{
  display: block;
  text-align: center;

  &__title{
    font-weight: 500px;
    font-size: 28px;
    line-height: calc(34 / 28);
    letter-spacing: calc(2.5 / 28 * 1em);
    margin-bottom: 63px;
  }

  &__icon{
    max-width: 64vw;
    margin: auto;
    margin-bottom: 63px;
    img{
      max-width: 100%;
    }
  }

  &__des{
    letter-spacing: calc(2.5 / 16 * 1em);
    color: #505050;
  }

  &_inline{
    display: inline-block;
  }

  @include media(1920){
    &__title{
      font-size: rwd-val(768px, 24px, 1920px, 28px);
      margin-bottom: rwd-val(768px, 53px, 1920px, 63px);
    }
    
    &__icon{
      margin-bottom: rwd-val(768px, 53px, 1920px, 63px);
    }
  }

  @include media($breakpoints-design-tablet){
    &__title{
      font-size: 24px;
      margin-bottom: 53px;
    }
    
    &__icon{
      margin-bottom: 53px;
    }
  }

  @include media($breakpoints-design-tablet-down){
    &__title{
      margin-bottom: 45px;
    }
    
    &__icon{
      margin-bottom: 45px;
    }
  }
}

</style>



