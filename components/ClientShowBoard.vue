<template>
  <div class="client-show-board">
    <v-row>
      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/msi.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/hualien.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/golden_voice.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/uc.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/itry.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/class.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/standard_foods.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/itri.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/seven.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/tsmc.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/cathay.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="4" lg="3" data-aos="all_fade_up" >
        <div class="client-box">
          <div class="client-box__img-wrap">
            <img src="~/assets/img/preview/client/tcbank.png" alt="" class="client-box__img">
          </div>
          <div class="client-box__text">
            <div class="client-box__text-content">
              微星科技
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    props:{
    },
    data: () => ({ 
    }),
    mounted(){
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.client-show-board{
  background: #FFFFFF;
  >.row{
    margin-left: 0;
    margin-right: 0;
  }
  [class*="col"]{
    &:hover{
      &:before{
        opacity: 0;
      }

      + [class*="col"]{
        &:before{
          opacity: 0;
        }
      }
    }
  }
  [class*="col"] + [class*="col"]{
    position: relative;
    &:before{
      content:'';
      display: block;
      width: 1px;
      background:#E9E9E9;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 66.66667%;
      transition: .3s;
    }
  }

  [class*="col"]{
    transition: .3s;
    &:hover{
      box-shadow: 0 0 28px rgba(0, 0, 0, 0.08);
    }
  }

  @media screen and (min-width: 1264px){
    [class*="col"]{
      &:nth-child(4n + 1){
        &:before{
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 600px) and (max-width: 1263.98px){
    [class*="col"]{
      &:nth-child(3n + 1){
        &:before{
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: 599.98px){
    [class*="col"]{
      &:nth-child(2n + 1){
        &:before{
          display: none;
        }
      }
    }
  }
}

.client-box{
  --client-box-v-gap: 20px;
  text-align: center;
  padding: var(--client-box-v-gap) 0;

  &:hover{
    .client-box__img{
      filter: grayscale(0%);
      opacity: 1;
    }
  }

  &__img-wrap{
    min-height: 75px;
  }

  &__img{
    transition: .3s;
    max-width: 100%;
  }

  &__text{
    color: #252525;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: calc(1.2 / 14 * 1em);
    text-indent: calc(1.2 / 14 * 1em);
    @include text-lines-ellipsis(1.714em, 2);
  }

  &__text-content{
    text-align: left;
    display: inline-block;
  }

  @include media($breakpoints-design-mobile){
    &__text{
      font-size: 12px;
      line-height: 18px;
    }
  }
}

</style>



