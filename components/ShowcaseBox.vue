<template>
    <div class="showcase-box">
        <v-img class="showcase-box__img" :src="picSrc" />
        <div class="showcase-box__overlay">
            <div class="showcase-box__title">{{title}}</div>
            <div class="showcase-box__tags">
               {{tag}}
            </div>
            <div class="showcase-box__gobtn">
                <v-img :src="require('~/assets/img/icon/arrow.svg')" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
      picSrc: String,
      title: String,
      tag: String,
    },
    data: () => ({ 
    }),
    mounted(){
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.showcase-box{
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:hover{
        .showcase-box__overlay{
            opacity: 1;
            visibility: visible;
        }
        .v-image{
          transform: scale(1.2);
        }
    }
    
    &:before{
        content: '';
        display: block;
    }

    &_lg{
        padding-top: calc(520 / 722 * 100%);
    }
    &:not(&_lg){
        padding-top: calc(240 / 333 * 100%);
    }

    &__img{
        @include absolute(0,0,0,0);
        margin: auto;
        transition: transform 1s cubic-bezier(.165,.84,.44,1);
    }

    &__overlay{
        @include absolute(0,0,0,0);
        background: linear-gradient(180deg, rgba(107, 30, 39, 0.64) 50%, rgba(221, 56, 53, 0) 127.08%);
        color: #fff;
        padding: 22px;
        opacity: 0;
        visibility: hidden;
        transition: .3s;
    }

    &__title{
        font-size: 16px;
        line-height: calc(32 / 16 * 1em);
        letter-spacing: calc(1.2 / 16 * 1em);
    }

    &__tags{
        font-size: 14px;
        line-height: calc(24 / 14 * 1em);
        letter-spacing: calc(1.2 / 14 * 1em);
    }

    &__gobtn{
        width: 66px;
        height: 66px;
        background: #E7142D;
        @include flex(center, center);
        position: absolute;
        right: 0;
        bottom: 0;
        .v-image{
            max-width: 39.5%;
        }
    }
}


</style>



