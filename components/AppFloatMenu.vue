<template>
  <div class="app-float-menu">
    <div class="container">
      <div class="app-float-menu__links">
        <v-row>
          <v-col cols="6">
            <a @click="goPage('/service/web-design-and-develop')" class="app-float-menu__link">
              <div class="app-float-menu__title1">
                <div class="app-float-menu__text-wrap">
                  <div class="app-float-menu__text-wrap-inner">
                    <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                      <span class="js">
                        Service
                      </span>
                    </SplitShowupText>
                  </div>
                </div>
              </div>
              <div class="app-float-menu__title2">
                <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                  <span class="js">
                    服務項目
                  </span>
                </SplitShowupText>
              </div>
            </a>
          </v-col>
          <v-col cols="6">
            <a @click="goPage('/fast-build-website')" class="app-float-menu__link">
              <div class="app-float-menu__title1">
                <div class="app-float-menu__text-wrap">
                  <div class="app-float-menu__text-wrap-inner">
                    <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                      <span class="js">
                        Wordpress
                      </span>
                    </SplitShowupText>
                  </div>
                </div>
              </div>
              <div class="app-float-menu__title2">
                <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                  <span class="js">
                    快速架站
                  </span>
                </SplitShowupText>
              </div>
            </a>
          </v-col>
          <v-col cols="6">
            <a @click="goPage('/about')" class="app-float-menu__link">
              <div class="app-float-menu__title1">
                <div class="app-float-menu__text-wrap">
                  <div class="app-float-menu__text-wrap-inner">
                    <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                      <span class="js">
                        About
                      </span>
                    </SplitShowupText>
                  </div>
                </div>
              </div>
              <div class="app-float-menu__title2">
                <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                  <span class="js">
                    關於我們
                  </span>
                </SplitShowupText>
              </div>
            </a>
          </v-col>
          <v-col cols="6">
            <a @click="goPage('/contact')" class="app-float-menu__link">
              <div class="app-float-menu__title1">
                <div class="app-float-menu__text-wrap">
                  <div class="app-float-menu__text-wrap-inner">
                    <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                      <span class="js">
                        Contact
                      </span>
                    </SplitShowupText>
                  </div>
                </div>
              </div>
              <div class="app-float-menu__title2">
                <SplitShowupText :customShow="menuOpen" :customShowControl="true"> 
                  <span class="js">
                    報價洽詢
                  </span>
                </SplitShowupText>
              </div>
            </a>
          </v-col>
          <v-col cols="6">
            <a @click="goPage('/work')" class="app-float-menu__link">
              <div class="app-float-menu__title1">
                <div class="app-float-menu__text-wrap">
                  <div class="app-float-menu__text-wrap-inner">
                    <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                      <span class="js">
                        Work
                      </span>
                    </SplitShowupText>
                  </div>
                </div>
              </div>
              <div class="app-float-menu__title2">
                <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                  <span class="js">
                    客戶案例
                  </span>
                </SplitShowupText>
              </div>
            </a>
          </v-col>
          <v-col cols="6">
            <a @click="goPage('/blog')"  class="app-float-menu__link">
              <div class="app-float-menu__title1">
                <div class="app-float-menu__text-wrap">
                  <div class="app-float-menu__text-wrap-inner">
                    <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                      <span class="js">
                        Blog
                      </span>
                    </SplitShowupText>
                  </div>
                </div>
              </div>
              <div class="app-float-menu__title2">
                <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                  <span class="js">
                    知識分享
                  </span>
                </SplitShowupText>
              </div>
            </a>
          </v-col>
          <v-col cols="6">
            <a @click="goPage('/feature')" class="app-float-menu__link">
              <div class="app-float-menu__title1">
                <div class="app-float-menu__text-wrap">
                  <div class="app-float-menu__text-wrap-inner">
                    <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                      <span class="js">
                        Features
                      </span>
                    </SplitShowupText>
                  </div>
                </div>
              </div>
              <div class="app-float-menu__title2">
                <SplitShowupText :delay="300" :customShow="menuOpen" :customShowControl="true"> 
                  <span class="js">
                    特色介紹
                  </span>
                </SplitShowupText>
              </div>
            </a>
          </v-col>
        </v-row>
        <BaseSpacer h="70px" class="" :rwdVal="[375, 47, 768, 70]"/>
        <div class="text-left">
          <a class="app-float-menu__btn" @click="goPage('/contact')">
            <i class="icon-vector_contact"></i>
            <div class="app-float-menu__btn-text">
              聯絡我們
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
      menuOpen: Boolean,
    },
    data: () => ({ 
      store: useGlobalStore()
    }),
    methods:{
      toggleMenu(){
        if ( this.menuOpen ) {
          this.closeMenu()
        } else {
          this.openMenu()
        }
      },
      emitClick(path){
        this.$emit('linkClick');
        $nuxt.$router.push(path)
      },
      openMenu(){
        document.documentElement.classList.add('is-app-flat-menu-open')
      },
      closeMenu(){
        document.documentElement.classList.remove('is-app-flat-menu-open');
      },
      goPage(url){
        var that = this;
        this.$emit('linkClick'); 
        setTimeout(()=>{
          that.$router.push(url)
        }, 300)
      }
    },
    watch:{
      menuOpen(){
        if ( this.menuOpen == true ) {
          this.openMenu()
        } else {
          this.closeMenu();
        }
      }
    },
    mounted(){
      this.$emit('init',{
        toggleMenu: this.toggleMenu,
        openMenu: this.openMenu,
        closeMenu: this.closeMenu,
      })
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.is-app-flat-menu-open {
  .app-bar-1{
    pointer-events: none;
    .hamburger{
      pointer-events: all;
    }
    .app-bar-1-menu{
      opacity: 0;
    }
  }
  .go-top{
    opacity: 0;
  }
  .app-float-menu{
    pointer-events: all;
    clip-path: inset(0% 0% 0% 0%);
    &:after{
      opacity: 1;
    }
    &:before{
      opacity: 0.85;
    }
    ul{
      opacity: 1;
      visibility: visible;
    }
    li {
      opacity: 1;
      transform: translateY(0);
      &:nth-child(1){
        transition-delay: .3s;
      }
      &:nth-child(2){
        transition-delay: .35s;
      }
      &:nth-child(3){
        transition-delay: .4s;
      }
      &:nth-child(4){
        transition-delay: .45s;
      }
      &:nth-child(5){
        transition-delay: .5s;
      }
      &:nth-child(6){
        transition-delay: .55s;
      }
      &:nth-child(7){
        transition-delay: .46s;
      }
    }
  }
}

.app-float-menu{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: calc(var(--app-bar-1-height-val) + 68px);
  padding-bottom: 68px;
  z-index: 5;
  text-align: center;
  max-height: 100vh;
  overflow-y: auto;
  pointer-events: none;
  display: flex;
  align-items: center;
  opacity: 1;
  transition: all .6s cubic-bezier(0.86, 0, 0.07, 1);;
  clip-path: inset(0% 0% 100% 0%);

  &::-webkit-scrollbar
  {
      display:none; /*經測試有效:有simplebar bar時不要顯示原生 scrollbar */
      width: 0;  /* Remove scrollbar space */
      background: transparent;  /* Optional: just make scrollbar invisible */
  }
  &:before{
    content:'';
    display: block;
    @include absolute(0,0,0,0);
    position: fixed;
    z-index: 0;
    background: rgba(0, 0, 0, 1);
    backdrop-filter: blur(20px);
  }

  &:after{
    content: '';
    @include absolute(0,0,0,0);
    position: fixed;
    background: url('~assets/img/general/float-menu-mask.svg');
    background-size: cover;
    z-index: 0;
    transition: .3s;
    pointer-events: none;
    opacity: 0;
  }

  .container{
    width: 100%;
    max-width: 1320px;
    z-index: 1;
    position: relative;
  }

  &__links{
    width: 500px;
    max-width: calc(100% - 94px);
    margin-right: 11.8%;
    margin-left: auto;
    position: relative;
  }

  &__link{
    color: #fff;
    text-align: left;
    margin-bottom: 16px;
    display: block;
    text-decoration: none;
    &:hover{
      .app-float-menu__text-wrap:before{
        width: 100%;
      }
    }
  }

  &__title1{
    font-size: 32px;
    font-weight: 800;
    line-height: calc(42.34 / 32 * 1em);
    letter-spacing: calc(1 / 32 * 1em);
    font-family: $ff-redHatDisplay;
    color: #fff;
  }

  &__title2{
    font-weight: 500;
    line-height: calc(23.17 / 16 * 1em);
    letter-spacing: calc(3.5 / 16 * 1em);
    font-family: $ff-noto;
    font-size: 16px;
    color: #fff;
  }

  &__text-wrap{
    display: inline-block;
    position: relative;
    &:before{
      content:'';
      display: block;
      @include absolute(0,0,0,0);
      background:  #E7142D;
      width: 0;
      transition: .3s;
    }
  }

  &__text-wrap-inner{
    position: relative;
    z-index: 1;
    padding: 0 3px;
  }

  &__btn{
    display: inline-flex;
    align-items: center;
    background: #E7142D;
    color: #fff;
    padding: 12px 40px;
    font-size: 16px;
    line-height: 2em;
    letter-spacing: calc(1.2 / 16 * 1em);
    text-align: center;
    font-weight: 500;
    border-radius: 28px;
    cursor: pointer;
    transition: .3s;
    i {
      font-size: 18px;
      color: #fff;
      margin-right: calc(22 / 18 * 1em);
    }
    .app-float-menu__btn-text{
      color: #fff;
    }
    &:hover{
      background: #AC0316;
    }
  }

  @include media(1920){
    padding-top: calc(var(--app-bar-1-height-val) + #{rwd-val(320px, 10px, 1920px, 68px)} );
    padding-bottom: rwd-val(320px, 40px, 1920px, 68px);
  }

  @include media($breakpoints-design-tablet){
    &:after{
      background:url('~assets/img/general/float-menu-mask-tablet.svg')
    }
    &__links{
      margin-right: auto;
    }
    &__title1{
      font-size: rwd-val(414px, 20px, 768px, 32px);
    }
  }

  @include media(414){
    &__title1{
      font-size: 20px;
    }
  }
  
  @include media($breakpoints-design-mobile){
    &__title2{
      font-size: 14px;
    }
  }

  @include media($breakpoints-design-mobile-down){
    &__links{
      max-width: calc(100% - 34px);
    }
  }

  @include media(320){
    padding-top: calc(var(--app-bar-1-height-val) + 10px );
    padding-bottom: 40px;
  }
}

</style>



