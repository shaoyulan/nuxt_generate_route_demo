<template>
  <div class="dark-intro-block">
    <div class="container container-1120px container_rwd-padding">
      <BaseSpacer h="80px" class="dark-intro-block__title-up" />
      <div class="text-center">
        <MainTitle
          :sup="sup"
          :title="title"
          themeLine
        />
      </div>
      <BaseSpacer h="40px" class="dark-intro-block__title-down" />
      <div class="des">
        <div class="des-inner">
          <slot name="des">
            {{des}}
          </slot>
        </div>
      </div>
      <BaseSpacer h="80px" class="dark-intro-block__des-down" />
    </div>
  </div>
</template>

<script>
export default {
    props:{
      sup: String,
      title: String,
      des: String,
    },
    data: () => ({ 
    }),
    mounted(){
    },
    methods:{
      log(){
        console.log('data2')
      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.dark-intro-block{
  background: #252525;
  color: #fff;
  .des{
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    line-height: calc(30 / 16);
    letter-spacing: calc(2.5 / 16 * 1em);
    font-weight: 500;
    text-align: center;
  }

  .des-inner{
    display: inline-block;
    text-align: left;
  }

  .dark-intro-block__mobile-br{
    display: none;
  }

  @include media(1920){
    .dark-intro-block__title-down{
      height: rwd-val(768px, 32px, 1920px, 40px);
    }
    .main-title{
      .main-title__title{
        font-size: rwd-val(768px, 32px, 1920px, 36px);
      }
    }
  }

  @include media($breakpoints-design-tablet){
    .dark-intro-block__title-up{
      height: rwd-val(375px, 60px, 768px, 80px);
    }
    .dark-intro-block__title-down{
      height: rwd-val(375px, 20px, 768px, 32px);
    }
    .dark-intro-block__des-down{
      height: rwd-val(375px, 60px, 768px, 80px);
    }
    .main-title{
      .main-title__title{
        font-size: rwd-val(375px, 24px, 1920px, 32px);
      }
    }
  }

  @include media($breakpoints-design-mobile){
    .main-title{
      .main-title__title{
        font-size: 24px;
      }
      .des{
        font-size: 14px;
      }
    }
  }
}

</style>



