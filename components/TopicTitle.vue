<template>
    <div 
        class="topic-title"
        :class="[
            white ? 'topic-title_white' : null
        ]"
    >
        <h2 class="topic-title__up">
          <slot name="up">
          {{up}}
          </slot>
        </h2>
        <h2 class="topic-title__down">
          <slot name="down">
            {{down}}
          </slot>
        </h2>
    </div>
</template>

<script>
export default {
    props:{
      up: String,
      down: String,

      white: Boolean
    },
    data: () => ({ 
    }),
    mounted(){
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.topic-title{
  &__up{
    font-size: 64px;
    line-height: calc(75.14 / 64 * 1em);
    letter-spacing: calc(1 / 64 * 1em);
    font-weight: 700;
    color: #E7142D;
    font-family: $ff-raleway;
  }

  &__down{
    font-size: 20px;
    line-height: calc(30 / 20 * 1em);
    letter-spacing: calc(1.5 / 20 * 1em);
    font-family: $ff-noto;
  }

  &_white{
    .topic-title__up, .topic-title__down{
        color: #fff;
    }
  }

  @include media(1920){
    &__up{
      font-size: rwd-val(768px, 52px, 1920px, 64px);
    }
  }
  @include media($breakpoints-design-tablet - 0.2){
    &__up{
      font-size: rwd-val(375, 40px, 1920px, 52px);
    }
    &__down{
      font-size: 18px;
    }
  }
  @include media($breakpoints-design-mobile){
    &__up{
      font-size: 40px;
    }
    &__down{
      font-size: 16px;
    }
  }
}

</style>



