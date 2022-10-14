<template>
  <div class="menu-and-search-bar">
    <div class="menu-and-search-bar__container">
      <div class="menu-and-search-bar__col-left">

        <div class="menu-and-search-bar__swiper">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div 
                class="swiper-slide" 
                :class="{
                  'is-active': item.id == activeId 
                }"
                v-for="item in list" :key="item.id"
              >
                <a 
                  href="javascript:;" 
                  class="menu-and-search-bar__menu-item"
                  @click="onClickItem(item)"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="menu-and-search-bar__col-right">
        <InputWrapper underline >
          <v-text-field
            class=""
            type="search"
            v-model="searchText"
            placeholder="搜尋全部作品..."
            Hide details
            @keydown.enter="onSearch()"
          >
            <template v-slot:append>
              <i class="icon-search" @click="onSearch()"></i>
            </template>
          </v-text-field>
        </InputWrapper>
        <!-- <v-text-field
            class="sty-search"
            v-model="searchText"
            outlined
            placeholder="搜尋全部作品..."
            Hide details
          >
            <template v-slot:append>
              <img :src="require('~/assets/img/icon/search.svg')" alt="">
            </template>
          </v-text-field> -->
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
import InputWrapper from './InputWrapper.vue';
export default {
    props: {
      activeId: [String, Number],
      list: Array,
    },
    data: () => ({
      store: useGlobalStore(),
      swiper: '',
      searchText:''
    }),
    computed:{
      activeIdRefSwiperIdx(){
        var result = '';

        if ( this.activeId || this.activeId == 0 ){
          this.list.some((item, idx)=>{
            if ( item.id == this.activeId ) {
              result = iidx
              return
            }
          })  
        }

        return result;
      },
      activeItem(){
        var result = '';

        if ( this.activeId || this.activeId == 0 ){
          this.list.some((item, idx)=>{
            if ( item.id == this.activeId ) {
              result = item
              return
            }
          })  
        }

        return result;
      },
    },
    watch:{
      activeId(){
        if ( this.swiper ) {
          if ( this.activeIdRefSwiperIdx || this.activeIdRefSwiperIdx ==0 ){
            this.swiper.slideTo(this.activeIdRefSwiperIdx)
          }
        }
      }
    },
    mounted() {
      var that = this;

      this.swiper = new Swiper(".menu-and-search-bar .swiper", {
        slidesPerView: "auto"
      });
    },
    methods: {
      onClickItem(item){
        this.$emit('clickItem', {
          searchText: this.searchText,
          item: item
        })
      },
      onSearch(){
        this.$emit('search', {
          searchText: this.searchText,
          item: this.activeItem
        })
      }
    },
    components: { InputWrapper }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.menu-and-search-bar{
  $self: &;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .swiper-slide{
    width:auto;
    padding: 0 28px;
    + .swiper-slide{
      border-left: 1px solid #D3D3D3;
    }

    &.is-active{
      .menu-and-search-bar__menu-item{
        color: #E7142D;
      }
    }
  }

  &__col-left, &__col-right{
  }
  &__col-left{
    flex-grow: 1;
    padding-right: 15px;
  }
  &__col-right{
    flex-shrink: 0;
    width: 25%;
    padding-left: 15px;
    border-left: 1px solid #D3D3D3;
  }
  &__swiper{
    height: 80px;
    display: flex;
    align-items: center;
    .swiper{
      margin-left: 0;
    }
  }
  &__container{
    display: flex;
    align-items: center;
    width: 1300px;
    max-width: 100%;
    // padding: 0 12px;
    margin: 0 auto;
  }

  &__menu-item{
    &#{$self}__menu-item{
      text-decoration: none;
      color: #252525;
      transition: .3s;
    }
    &:hover{
      color: #E7142D;
    }
  }

  .input-wrapper{
    width: 220px;
    max-width: 100%;
    margin: 0 auto;
    &:hover{
      i {
        color: #E7142D;
      }
    }
    i{
      cursor: pointer;
      transition: .3s;
    }
  }

  @include media(992){
    &__swiper{
      height: rwd-val(375px, 68px, 992px, 80px);
    }

    .swiper-slide{
      &:first-child{
        padding-left:0;
      }
      &:last-child{
        padding-right: 0;
      }
    }
    &__container{
      flex-wrap: wrap;
    }
    &__col-left, &__col-right{
      width: 100%;
    }
    &__col-left{
      border-bottom: 1px solid #E9E9E9;
      padding-left: rwd-val(375px, 24px, 992px, 40px);
      padding-right: rwd-val(375px, 24px, 992px, 40px);
    }
    &__col-right{
      border-left: 0;
      padding-left: rwd-val(375px, 24px, 992px, 40px);
      padding-right: rwd-val(375px, 24px, 992px, 40px);
      .input-wrapper{
        margin-left: 0;
      }
    }
  }

  @include media(576){
    .input-wrapper{
      width: 100%;
    }
  }

  @include media($breakpoints-design-mobile){
    &__swiper{
      height: 68px;
    }
    &__col-left{
      padding-left: 24px;
      padding-right: 24px;
    }
    &__col-right{
      border-left: 0;
      padding-left: 24px;
      padding-right: 24px;
    }
  }
}

</style>



