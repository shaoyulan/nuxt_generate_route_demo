<template>
    <a 
        class="service-show-box"
        href="javascript:;"
        :class="[
        ]"
    >
        <div class="service-show-box__icon">
            <img :src="icon" alt="" srcset="">
        </div>
        <h5 class="service-show-box__title">{{title}}</h5>
        <div class="service-show-box__title2">{{title2}}</div>
    </a>
</template>

<script>
export default {
    props:{
        icon: String,
        title: String,
        title2: String,
    },
    data: () => ({ 
    }),
    mounted(){
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.service-show-box{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 15px;
    min-height: 280px;
    text-decoration: none;
    transition: .3s;

    &__icon{
        max-width: calc(100% - 15px);
        display: block;
        margin: 0 auto;
        margin-bottom: 30px;
        img{
            max-width: 100%;
            display: block;
        }
    }

    &__title{
        line-height: calc(23.17 / 16 * 1em);
        letter-spacing: calc(1.5 / 16 * 1em);
        text-indent: calc(1.5 / 16 * 1em);
        font-family: $ff-noto;
        color:#252525;
        font-weight: normal;
    }

    &__title2{
        font-size: 12px;
        line-height: calc(28 / 12 * 1em);
        letter-spacing: calc(1 / 12 * 1em);
        text-indent: calc(1 / 12 * 1em);
        font-family: $ff-raleway;
        color: #505050;
    }

    &:hover{
        background: #252525;
        .service-show-box__title{
            color: #fff;
        }
        .service-show-box__title2{
            color: #fff;
        }
    }

    @include media($breakpoints-design-tablet){
      min-height: rwd-val(375px, 202px, 768px, 240px);
      &__title{
        font-size: 16px;
        margin-bottom: 8px;
        line-height: calc(23.17 / 14);
      }
      &__title2{
        line-height: calc(14 / 12);
      }
    }

    @include media($breakpoints-design-mobile){
      min-height: 202px;
      &__title{
        font-size: 14px;
        line-height: calc(20.27 / 14);
      }
      &__icon{
        margin-bottom: 27px;
      }
    }
}

</style>



