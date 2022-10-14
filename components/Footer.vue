<template>
  <div>
    <v-footer
      absolute
      class="app-footer1"
      :class="{
        'app-footer1_visible': store.isFooterInersecting
      }"
      v-intersect="onIntersect"
      app
    >
    <div class="app-footer1__inner">
      <div class="container container-1200px">
        <v-row>
          <v-col class="app-footer1__col-left">
            <img 
              class="app-footer1__logo" 
              src="~assets/img/logo/logo3.svg" alt=""
              data-aos="all_fade_up"
            >
            <FooterSocial class="mobile" data-aos="all_fade_up" />
            <div class="app-footer1__copyright pc" data-aos="all_fade_up" >
              Copyright&emsp;© 2021 Designed by Source
            </div>
          </v-col>
          <v-col class="app-footer1__col-mid">
            <v-row>
              <v-col cols="6" data-aos="all_fade_up" >
                <NuxtLink class="app-footer1__link" to="/service/web-design-and-develop">
                  <div class="app-footer1__link-text">
                    <SplitShowupText> 
                      <span class="js">
                        服務項目
                      </span>
                    </SplitShowupText>
                  </div>
                  <div class="app-footer1__link-btn">
                    <div class="app-footer1__link-icon">
                      <i class="icon-icon_navigation_arrow_right"></i>
                    </div>
                  </div>
                </NuxtLink>
              </v-col>
              <v-col cols="6" data-aos="all_fade_up" >
                <NuxtLink class="app-footer1__link" to="/fast-build-website">
                  <div class="app-footer1__link-text">
                    <SplitShowupText> 
                      <span class="js">
                        快速架站
                      </span>
                    </SplitShowupText>
                  </div>
                  <div class="app-footer1__link-btn">
                    <div class="app-footer1__link-icon">
                      <i class="icon-icon_navigation_arrow_right"></i>
                    </div>
                  </div>
                </NuxtLink>
              </v-col>
              <v-col cols="6" data-aos="all_fade_up" >
                <NuxtLink class="app-footer1__link" to="/about">
                  <div class="app-footer1__link-text">
                    <SplitShowupText> 
                      <span class="js">
                        關於我們
                      </span>
                    </SplitShowupText>
                  </div>
                  <div class="app-footer1__link-btn">
                    <div class="app-footer1__link-icon">
                      <i class="icon-icon_navigation_arrow_right"></i>
                    </div>
                  </div>
                </NuxtLink>
              </v-col>
              <v-col cols="6" data-aos="all_fade_up" >
                <a class="app-footer1__link" href="javascript:;">
                  <div class="app-footer1__link-text">
                    <SplitShowupText> 
                      <span class="js">
                        報價洽詢
                      </span>
                    </SplitShowupText>
                  </div>
                  <div class="app-footer1__link-btn">
                    <div class="app-footer1__link-icon">
                      <i class="icon-icon_navigation_arrow_right"></i>
                    </div>
                  </div>
                </a>
              </v-col>
              <v-col cols="6" data-aos="all_fade_up" >
                <NuxtLink class="app-footer1__link" to="/feature">
                  <div class="app-footer1__link-text">
                    <SplitShowupText> 
                      <span class="js">
                        特色介紹
                      </span>
                    </SplitShowupText>
                  </div>
                  <div class="app-footer1__link-btn">
                    <div class="app-footer1__link-icon">
                      <i class="icon-icon_navigation_arrow_right"></i>
                    </div>
                  </div>
                </NuxtLink>
              </v-col>
              <v-col cols="6" data-aos="all_fade_up" >
                <NuxtLink class="app-footer1__link" to="/blog">
                  <div class="app-footer1__link-text">
                    <SplitShowupText> 
                      <span class="js">
                        知識分享
                      </span>
                    </SplitShowupText>
                  </div>
                  <div class="app-footer1__link-btn">
                    <div class="app-footer1__link-icon">
                      <i class="icon-icon_navigation_arrow_right"></i>
                    </div>
                  </div>
                </NuxtLink>
              </v-col>
              <v-col cols="6" data-aos="all_fade_up" >
                <NuxtLink class="app-footer1__link" to="/work">
                  <div class="app-footer1__link-text">
                    <SplitShowupText> 
                      <span class="js">
                        客戶案例
                      </span>
                    </SplitShowupText>
                  </div>
                  <div class="app-footer1__link-btn">
                    <div class="app-footer1__link-icon">
                      <i class="icon-icon_navigation_arrow_right"></i>
                    </div>
                  </div>
                </NuxtLink>
              </v-col>
            </v-row>
            <FooterSocial class="extra-mobile" data-aos="all_fade_up" /> 
          </v-col>
          <v-col class="app-footer1__col-right">
            <FooterSocial class="pc" data-aos="all_fade_up" />

            <div class="app-footer1__copyright mobile" data-aos="all_fade_up">
              Copyright&emsp;© 2021 Designed by Source
            </div>
  
            <div class="app-footer1__contact">
              <div class="app-footer1__contact-item" title="撥打電話">
                <a href="tel:+886-3-6583366">
                  Tel.&emsp;(03)658-3366
                </a>
              </div>
              <div class="app-footer1__contact-item">
                <a href="mailto:contact@sourcejust.com" title="寫信給我們"> 
                  Mail.&emsp;contact@sourcejust.com
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="app-footer1__vline"></div>
      <Gotop />
    </div>
    </v-footer>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
import FooterSocial from './FooterSocial.vue';
export default {
    props: {},
    data: () => ({
        store: useGlobalStore(),
    }),
    mounted() {
    },
    computed: {},
    methods: {
      onIntersect(entries, observer) {
        this.store.isFooterInersecting = entries[0].isIntersecting;
      },
    },
    components: { FooterSocial }
}
</script>

<style lang="scss">
@import "~assets/css/design";


// footer
.app-footer1{
  $self: &;
  background: #fff!important;
  padding-top:  78px;
  padding-bottom: 88px;
  // position: relative;
  position: absolute;

  @keyframes app-footer1__hover-arrow{
    0%{transform:translate(0,0);opacity:1}
    60%{transform:translate(100%,0);opacity:0}
    70%{transform:translate(-100%,0);opacity:0}
    to{transform:translate(0,0);opacity:1}
  }

  &__inner{
    width: 100%;
  }

  &__col-right{
    text-align: right;
    align-items: flex-end;
  }

  &__col-left, &__col-right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__logo{
    width: 212px;
    max-width: 100%;
  }

  &__link{
    display: inline-flex;
    align-items: center;
    line-height: calc(30 / 14 * 1em);
    letter-spacing: calc(1.5 / 14 * 1em);
    text-decoration: none;

    &:hover{
      #{ $self }__link-text{
        color: #E7142D;
      }
      #{ $self }__link-btn{
        i {
          animation: app-footer1__hover-arrow .8s cubic-bezier(.5,.25,0,1) 0s 1 normal forwards;
        }
      }
    }

    #{ $self }__link-text{
      margin-right: 20px;
      color: #252525;
      font-size: 14px;
      transition: .3s;
    }

    #{ $self }__link-btn{
      background: #FFEBED;
      @include flex(center, center);
      color: #E7142D;
      width: 28px;
      height: 28px;
      border-radius: 50%;

      i {
        // font-size: 12px;
        display: inline-block;
        // transform: scale(calc(5 / 12));
      }
    }

    #{ $self }__link-icon{
      font-size: 12px;
      transform: scale(calc(5 / 12));
    }
  }

  &__social{
    position: relative;
    display: inline-flex;
    margin-right: -16px;
    .ani-indicator{
      position: absolute;
      background: #FFEBED;
      border-radius: 50%;
      top: 50%;
      transform: scale(0);
      transform-origin: center;
    }
  }

  &__social-link{
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    width: 54px;
    font-size: 21px;
    position: relative;
    z-index: 1;
    &:before{
      content:'';
      display: block;
      padding-top: 100%;
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      background: #FFEBED;
      opacity: 0;
      transition: .3s;
      border-radius: 50%;
    }

    &:hover{
      i{
        color: #E7142D;
      }
      &:before{
        // opacity: 1;
      }
    }

    i {
      color: #505050;
      position: relative;
      transition: .3s ease;
    }
  }

  &__copyright{
    font-size: 12px;
    line-height: calc(14.63 / 12 * 1em);
    letter-spacing: 0.02em;
    font-weight: 500;
  }

  &__contact-item{
    &:hover {
      a{
        color: $color-red;
      }
    }
    a{
      text-decoration: none; 
      color: #505050;
      font-size: 14px;
      line-height: calc(17 / 14 * 1em);
      letter-spacing: 0.165em;
      font-weight: 500;
      transition: .3s;
    }
    &:not(:last-child){
      margin-top: 20px;
    }
  }

  &__vline{
    position: absolute;
    right: 125px;
    top : 0;
    bottom: 0;
    width: 1px;
    background: #F1F1F1;
  }

  .go-top{
    transition: .3s ease;
    transition-delay: .3s;
    transform: translateX(200%);
  }

  &_visible{
    .go-top{
      transform: translateX(200%);
      transform: translateX(0%);
    }
  }

  // 1474 開始，footer_inner最右側會貼齊右邊線
  // 1474 = 1224 + 125 + 125
  @include media(1474){
    .container{
      // 騰出空間給 page top
      margin-right: 0;
      padding-right: calc(125px + 36px);
      // max-width: calc(900px + 125px + 36px);
      max-width: calc(1185px + 125px + 36px);
    }
  }

  @include media-up(1024.02){
    .mobile{
      display: none!important;
    }
  }

  @include media(1024){
    padding-top: 50px;
    padding-bottom: 50px;

    .pc{
      display: none!important;
    }

    .app-footer1__col-left,
    .app-footer1__col-mid,
    .app-footer1__col-right
    {
      flex: 100%;
    }
    .app-footer1__col-left{
      margin-bottom: 24px;
      flex-direction: row;
      align-items: center;
    }
    .app-footer1__col-mid{
      margin-bottom: 24px;
      .col{
        flex: 25%;
        max-width: 25%;
      }
    }
    .app-footer1__col-right{
      flex-direction: row;
      align-items: flex-end;
      .app-footer1__copyright.mobile{
        padding-bottom: 0.2em;
      }
    }
  }

  @include media-up(768){
    .extra-mobile{
      display: none!important;
    }
  }
  @include media(767.98){
    padding-top: 40px;
    padding-bottom: 40px;
    .app-footer1__vline{
      display: none;
    }
    .go-top{
      display: none!important;
    }
    .container{
      padding-right: 12px;
      margin-right: auto;
    }
    .app-footer1__social.mobile{
      display: none;
    }

    .app-footer1__social.extra-mobile{
      margin-right: 0;
      margin-left: -16px;
    }

    .app-footer1__col-left{
      margin-bottom: 10px;
    }

    .app-footer1__col-mid{
      margin-bottom: 0;
      .row{
        margin-bottom: 14px;
      }
      .col{
        flex: 33.333%;
        max-width: 33.333%;
      }
    }

    .app-footer1__col-right{
      flex-wrap: wrap;
      text-align: left;
      .app-footer1__copyright.mobile{
        flex: 100%;
      }
      .app-footer1__contact{
        flex: 100%;
      }
    }
  }

  @include media(576){
    .app-footer1__col-mid{
      .col{
        flex: 50%;
        max-width: 50%;
      }
    }
  }
} 
// footer /

</style>



