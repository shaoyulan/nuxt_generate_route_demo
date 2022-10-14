<template>
  <div class="contact-block">
    <div class="container container-1200px container_rwd-padding">
      <v-row>
        <v-col cols="7">
          <h2 class="contact-block__suptitle"  data-aos="all_fade_up">
            Contact
          </h2>
          <div class="contact-block__title"  data-aos="all_fade_up">
            索爾斯專業開發團隊・<span style="display: inline-block;">是您的最佳選擇</span>
          </div>
          <div class="contact-block__des"  data-aos="all_fade_up">
            帶著您的想法與需求，我們將協助您一步一步走完、企劃、設計、切版、後台、修改、完成專案。
          </div>
        </v-col>
        <v-col cols="5" class="contact-block__col-right"  data-aos="all_fade_up">
          <BtnFollwerEffect>
            <button class="contact-block__btn" @click="$router.push('/contact')">
              <div class="contact-block__btn-content">
                <i class="icon-vector_contact"></i>
                聯絡我們
              </div>
            </button>
          </BtnFollwerEffect>
        </v-col>
      </v-row>
    </div>
    <img class="contact-block__rocket" src="~assets/img/general/rocket.svg" alt="" srcset="">
  </div>
</template>

<script>
import BtnFollwerEffect from './BtnFollwerEffect.vue';
export default {
  props: {},
  data: () => ({}),
  mounted() {
  },
  components: { BtnFollwerEffect }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.contact-block{
  background: linear-gradient(to right, #E7142D, #D11C31);
  padding-top: 95px;
  padding-bottom: 78px;
  color: #fff;
  position: relative;

  .row{
    align-items: center;
    .contact-block__col-right{
      text-align: right;
    }
  }

  &__suptitle{
    font-size: 24px;
    font-weight: 600;
    line-height: calc(29.26 / 24 * 1em);
    letter-spacing: calc(1px / 24 * 1em);
    margin-bottom: 1em;
  }

  &__title{
    font-size: 28px;
    font-weight: 500;
    line-height: calc(34 / 28 * 1em);
    letter-spacing: calc(2.5 / 28 * 1em);
    margin-bottom: calc(16 / 28 * 1em);
  }

  &__des{
    font-size: 14px;
    line-height: calc(24 / 14 * 1em);
    letter-spacing: calc(1.2 / 14 * 1em);
    font-weight: 500;
  }

  &__btn{
    font-size: 20px;
    line-height: calc(32 / 20 * 1em);
    letter-spacing: calc(1.2 / 20 * 1em);
    text-indent: calc(1.2 / 20 * 1em);
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 52px;
    padding: 16px;
    width: 307px;
    max-width: 100%;
    cursor: pointer;
    transition: .3s;
    i {
      margin-right: 1em;
    }

    .contact-block__btn-content{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;
      z-index: 1;
    }

    &:hover{
      background: #fff;
      color: #E7142D;
    }
  }

  &__rocket{
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @include media(1920){
    padding-top: rwd-val(375px, 52px, 1920px, 95px);
    padding-bottom: rwd-val(375px, 39px, 1920px, 78px);
  }
  @include media(992){
    .row{
      flex: 100%;
      text-align: left;
      [class*="col"]{
        flex: 100%;
        max-width: 100%;
        margin-bottom: 10px;
        text-align: left;
      }
    }
  }
  @include media($breakpoints-design-tablet){
    &__title{
      font-size: rwd-val(375px, 20px, 768px, 28px);
    }
  }
  @include media($breakpoints-design-mobile){
    padding-top: 52px;
    padding-bottom: 39px;
    &__title{
      font-size: 20px;
    }
    .contact-block__btn{
      width: 100%;
    }
  }
}

</style>



