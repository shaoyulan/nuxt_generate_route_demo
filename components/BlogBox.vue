<template>
  <div class="blog-box">
    <div class="blog-box__media">
      <img :src="picSrc" alt="" class="blog-box__img">
    </div>
    <div class="blog-box__info">
      <div class="blog-box__date-box">
        <div class="blog-box__date">{{ dateInfo.date }}</div>
        <div class="blog-box__month">{{ dateInfo.monthShort }} {{ dateInfo.date }}</div>
      </div>
      <h5 class="blog-box__title">
        {{title}}
      </h5>
    </div>
    <div class="blog-box__des">
      {{subTitle}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    picSrc: String,
    createTime: String,
    title: String,
    subTitle: String,
  },
  data: () => ({ 
  }),
  computed:{
    dateInfo(){
      if ( this.createTime ) {
        return this.$mix.parseISODate(this.createTime)
      }
    },
  },
  mounted(){
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.blog-box{
  cursor: pointer;
  
  &:hover{
    .blog-box__media{
      img{
        transform: scale3d(1.1,1.1,1.1);
      }
    }
  }

  &__media{
    margin-bottom: 30px;
    background: #fafafa;
    position: relative;
    overflow: hidden;
    &:before{
      content:'';
      display: block;
      padding-top: calc(260 / 310 * 100%);
    }

    img{
      @include absolute(0,0,0,0);
      margin: auto;
      max-height: 100%;
      transition: transform 1s cubic-bezier(.165,.84,.44,1);
    }
  }

  &__info{
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    align-items: baseline;
  }

  &__date-info{
    text-align: center;
    margin-right: 24px;
  }

  &__date-box{
    flex-shrink: 0;
    margin-right: 24px;
    text-align: center;
    font-family: $ff-redHatDisplay;
  }

  &__date{
    font-size: 40px;
    line-height: 1;
    letter-spacing: calc(2.5 / 40 * 1em);
    text-indent: calc(2.5 / 40 * 1em);
    color: #505050;
    font-weight: 500;
  }

  &__month{
    font-size: 13px;
    font-weight: 500;
    line-height: calc(28 / 13 * 1em);
    letter-spacing: calc(2.5 / 13 * 1em);
    text-indent: calc(2.5 / 13 * 1em);
  }

  &__title{
    font-size: 18px;
    line-height: 1.4444em;
    letter-spacing: calc(2 / 18 * 1em);
    @include text-lines-ellipsis(1.4444em, 2);
    font-weight: normal;
  }

  &__des{
    font-size: 14px;
    line-height: calc(24 / 14 * 1em);
    letter-spacing: calc(1.2 / 14 * 1em);
    color: #505050;
    @include text-ellipsis;
  }

}

</style>



