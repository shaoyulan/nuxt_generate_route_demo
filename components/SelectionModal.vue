<template>
  <div class="selection-modal">
    <div class="selection-modal__toolheader">
      <v-row>
        <v-col cols="">
          <div class="selection-modal__back-wrap">
            <div class="selection-modal__backbtn" @click="close()">
              <i class="icon-arrow-left"></i>
            </div>
            <div class="selection-modal__sidetitle">
              目前選擇主題 <span class="selection-modal__darktext">Van Orton Design</span>
            </div>
          </div>
        </v-col>
        <v-col cols="auto" class="selection-modal__media-box-col">
          <div class="selection-modal__media-box">
            <v-row>
              <v-col cols="4" :class="{'active': activeMedia == 'pc'}" @click="activeMedia = 'pc'">
                <div class="selection-modal__media-link">
                  <div class="selection-modal__media-icon">
                    <i class="icon-media_pc"></i>
                  </div>
                  <div class="selection-modal__media-title">
                    桌面
                  </div>
                </div>
              </v-col>
              <v-col cols="4" :class="{'active': activeMedia == 'tablet'}" @click="activeMedia = 'tablet'">
                <div class="selection-modal__media-link">
                  <div class="selection-modal__media-icon">
                    <i class="icon-media_tablet"></i>
                  </div>
                  <div class="selection-modal__media-title">
                    平板電腦
                  </div>
                </div>
              </v-col>
              <v-col cols="4" :class="{'active': activeMedia == 'mobile'}" @click="activeMedia = 'mobile'">
                <div class="selection-modal__media-link">
                  <div class="selection-modal__media-icon">
                    <i class="icon-media_mobile"></i>
                  </div>
                  <div class="selection-modal__media-title">
                    手機
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="selection-modal__body">
      <div class="selection-modal__scroller">
        <div class="selection-modal__scroller-main">
          <img v-show="activeMedia == 'pc'" src="https://dummyimage.com/1000x3000/ccc/aaa" />
          <img v-show="activeMedia == 'tablet'" src="https://dummyimage.com/768x3000/ccc/aaa" />
          <img v-show="activeMedia == 'mobile'" src="https://dummyimage.com/414x3000/ccc/aaa" />
        </div>
      </div>
    </div>
    <div class="selection-modal__footer">
      <div class="text-center">
        <BaseButton inline theme pill w="240px" h="50px" @click.native="confirmSelect()">
          選擇此模板
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    modelValue:Boolean,
    pcSrc: String,
    tabletSrc: String,
    mobileSrc: String,
  },
  data: () => ({ 
    activeMedia: 'pc'
  }),
  methods: {
    close(){
      this.$emit('update:modelValue', false)
    },
    confirmSelect(){
      this.$emit('update:modelValue', false)
      this.$emit('confirmSelect', this.activeMedia)
    }
  },
  mounted(){
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.selection-dialog{
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(60px);
  
}

.selection-modal{
  width: 100%;
  height: 100%;
  padding: 38px 40px;
  display: flex;
  flex-direction: column;

  &__scroller{
    height: 100%;
    text-align: center;
    .selection-modal__scroller-main{
      height: 100%;
      display: inline-block;
      overflow-y: auto;
      &::-webkit-scrollbar{
        width: 4.5px;
        background-color: none;
      }
      &::-webkit-scrollbar-thumb{
        border-radius: 6px;
        background-color: #BDBDBD;
      }
      .v-image{
        max-width: 100%;
      }
      img{
        display: block;
        max-width: 100%;
      }
    }
  }

  &__toolheader{
    > .row{
      align-items: center;
    }
  }
  &__back-wrap{
    display: flex;
    align-items: center;
  }
  &__backbtn{
    background: #F1F1F1;
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    margin-right: 20px;
    @include flex(center, center);
    border-radius: 50%;
    transition: .3s ease;
    cursor: pointer;
    i {
      font-size: 20px;
      color: #505050;
      transition: inherit;
    }

    &:hover{
      background:#505050;
      i {
        color: #F1F1F1;
        transform: translateX(-4px);
      }
    }
  }
  &__sidetitle{
    font-size: 14px;
    color: #7C7C7C;
    line-height: calc(24 / 14);
    letter-spacing: 1.2px;
  }
  &__darktext{
    color: #252525;
    font-weight: 500;
  }


  &__media-box{
    padding: 0 12px;
    i{
      font-size: 20px;
    }
    .col{
      transition: .3s;
      border-radius: 7px;
      &:hover{
        background: #FFEBED;
        .selection-modal__media-link{
          color: #505050;
        }
      }
      &.active{
        .selection-modal__media-link{
          color: #505050;
        }
      }
    }
  }
  &__media-link{
    cursor: poniter;
    text-align: center;
    width: 60px;
    color: #A7A7A7;
    transition: .3s;
    cursor: pointer;
  }
  &__media-icon{
    margin-bottom: 6px;
  }
  &__media-title{
    font-size: 12px;
    line-height: calc(18 / 12);
    letter-spacing: 0.8px;
    text-indent: 0.8px;
    white-space: nowrap;
  }

  &__body{
    flex-grow: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 50px 0;
    &::-webkit-scrollbar{
      width: 4.5px;
	    background-color: none;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 6px;
      background-color: #BDBDBD;
    }
  }
  &__footer{

  }

  @include media($breakpoints-design-tablet-down){
    &__body{
      padding: 40px 0;
    }
    &__media-box-col{
      display: none;
    }
    &__darktext{
      display: block;
    }
  }
}

</style>



