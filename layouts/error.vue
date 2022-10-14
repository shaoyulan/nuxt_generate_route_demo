<template>
  <v-app dark class="error-layout">
    <div class="p-error">
      <div class="container container-1200px container_rwd-padding">
        <div class="error-display">
          <BaseSpacer h="68px" />
          <v-row>
            <v-col cols="auto">
              <div class="error-display__title error-display__mob-item">
                <template v-if="error.statusCode === 404" >
                  Oops！頁面不存在
                  <img class="error-display__img" src="~/assets/img/general/404.svg" alt="" srcset="">
                </template>
                <template v-else >
                  Oops！出了點狀況
                </template>
              </div>
            </v-col>
            <v-col cols="auto" class="error-display__mid-spacer">
            </v-col>
            <v-col cols="auto">
              <template v-if="error.statusCode === 404" >
                <div class="error-display__title error-display__pc-item">
                  Oops！頁面不存在
                </div>
                <div class="error-display__text">
                  可能的原因
                </div>
                <div class="error-display__list-item-wrap">
                  <div class="error-display__list-item">
                    原來的頁面已經不存在了
                  </div>
                  <div class="error-display__list-item">
                    我們的伺服器出現了問題
                  </div>
                </div>
                <BaseSpacer h="40px" />
              </template>
              <BaseButton 
                @click.native="$router.push('/')" 
                theme 
                pill 
                w="160px" 
                h="50px" 
                inline
              >
                回到首頁
              </BaseButton>
            </v-col>
          </v-row>
          <BaseSpacer h="68px" />
        </div>
      </div>
      <!-- <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/">
        Home page
      </NuxtLink> -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'FluidWhite',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/design';

h1 {
  font-size: 20px;
}

.error-layout{
  .v-application--wrap{
    background:#f6f6f6;
  }
  .p-error{
    padding-top: var(--app-bar-1-height-val);
    height: 100%;
    display: flex;
    align-items: center;
  }
}

.error-display{
  &__title{
    font-size: 40px;
    font-weight: 500;
    line-height: calc(54 / 40);
    letter-spacing: 4px;
    margin-bottom: 32px;
  }
  &__text{
    line-height: calc(28 / 16);
    letter-spacing: 1.2px;
  }
  &__list-item{
    line-height: calc(28 / 16);
    display: flex;
    letter-spacing: 1.2px;
    &:before{
      content:'';
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      flex-shrink: 0;
      margin: 0 0.4em;
      margin-top: 0.65em;
      background: #000;
    }
  }

  &__mid-spacer.col{
    flex-grow: 1;
    max-width: 106px;
  }

  &__mob-item{
    display: none;
  }

  &__img{
    max-width: 70vw;
  }

  > .row{
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }

  @include media(1920){
    
  }

  @include media(992){
    text-align: center;
    > .row{
      flex-wrap: wrap;
    }
    .col{
      flex: 100%;
    }
    &__list-item-wrap{
      display: inline-block;
    }
    &__mid-spacer{
      display: none;
    }
    &__pc-item{
      display: none;
    }

    &__mob-item{
      display: block;
    }
  }

  @include media($breakpoints-design-tablet){
    &__title{
      margin-bottom: rwd-val(375px, 32px, 768px, 64px);
      font-size: rwd-val(375px, 24px, 768px, 36px);
    }
  }

  @include media($breakpoints-design-mobile){
    &__title{
      margin-bottom: 32px;
      font-size: 24px;
    }
  }
}

</style>
