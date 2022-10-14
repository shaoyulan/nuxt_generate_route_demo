<template>
  <a class="blog-card" >
    <div class="blog-card__media">
      <v-img :aspect-ratio="360/225" :src="picSrc"></v-img>
    </div>
    <div class="blog-card__foot">
      <div class="blog-card__date">
        <div class="blog-card__date-num">13</div>
        <div class="blog-card__date-info">MAY 10</div>
      </div>
      <h5 class="blog-card__title">
        {{title}}
      </h5>
    </div>
    <div class="blog-card__info">
      {{subTitle}}
    </div>
  </a>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      picSrc: String,
      createTime: String,
      title: String,
      subTitle: String,
    },
    data: () => ({ 
      store: useGlobalStore(),
    }),
    mounted(){
      var that = this;
    },
    computed:{
      month(){
        if ( this.createTime ) {
          return (new Date(this.createTime)).getMonth() + 1
        }
      },
      date(){
        if ( this.createTime ) {
          return (new Date(this.createTime)).getDate()
        }
      },
    },
    methods:{
      onScroll(){

      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.blog-card{
  margin-bottom: 20px;
  display: block;
  &:hover{
    .v-image{
      transform: scale(1.2);
    }
  }
  &__media{
    margin-bottom: 28px;
    overflow: hidden;
  }
  &__foot{
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  &__date{
    font-size: 40px;
    margin-right: calc(34 / 40 * 1em);
    text-align: center;
    flex-shrink: 0;
  }
  &__date-num{
    color: #E7142D;
    line-height: calc(39 / 40);
    letter-spacing: calc(2.5 / 40 * 1em);
    text-indent: calc(2.5 / 40 * 1em);
  }
  &__date-info{
    font-size: 13px;
    font-weight: 500;
    line-height: calc(28 / 13);
    letter-spacing: calc(2.5 / 13 * 1em);
    text-indent: calc(2.5 / 13 * 1em);
    color: #7C7C7C;
  }
  &__title{
    font-size: 18px;
    line-height: calc(29 / 18);
    letter-spacing: calc(2.5 / 18 * 1em);
    color: #505050;
    font-weight: normal;
    @include text-lines-ellipsis(calc(29 / 18), 2);
  }
  &__info{
    font-size: 14px;
    line-height: calc(24 / 14);
    letter-spacing: calc(1.2 / 14 * 1em);
    color: #505050;
  }
  .v-image{
    transition: transform 1s cubic-bezier(.165,.84,.44,1);
  }
}

</style>



