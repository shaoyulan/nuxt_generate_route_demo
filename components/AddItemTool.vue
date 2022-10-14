<template>
  <div class="add-item-tool" @keydown.enter="onEnter">
    <div class="add-item-tool__toadd" @click="switchEnterMode()" v-show="!isInputMode">
      <i class="icon-addicon"></i>
      <div class="add-item-tool__text">
        新增選項
      </div>
    </div>
    <div class="add-item-tool__enter" v-show="isInputMode">
      <input 
        type="text" 
        class="add-item-tool__input" 
        placeholder="輸入選項"
        v-model="inputValue"
      >
      <div 
        class="add-item-tool__text add-item-tool__text_theme add-item-tool__link"
        @click="onEnter()"
      >
        Enter
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 純UI Radio
 */

export default {
  props:{
  },
  data: () => ({ 
    isInputMode: false,
    inputValue: '',
  }),
  methods: {
    switchEnterMode(){
      this.isInputMode = true;
    },
    onEnter(){
      if ( !this.isInputMode ) return;
      this.$emit('enter', this.inputValue )
      this.isInputMode = false;
      this.inputValue = '';
    }
  },
  mounted() {
    
  },
};
</script>

<style lang="scss">
@import '~assets/css/design';

.add-item-tool{
  height:28px;

  &:hover{
    .add-item-tool__toadd{
      .add-item-tool__text{
        color: #E7142D;
      }
    }
  }

  &__toadd{
    color: #E7142D;
    display: flex;
    align-items: center;
    cursor: pointer;
    i {
      margin-right: 10px;
      font-size: 19px;
      color: #E7142D;
    }
  }

  &__enter{
    display: flex;
    align-items: center;
  }

  &__text{
    color: #505050;
    letter-spacing: 1.2px;
    font-family: $ff-msjh;
    line-height: 1;
    font-weight: 500;
    transition: .3s;
  }

  &__text_theme{
    color: #E7142D;
  }

  &__input{
    border-bottom: 1px solid #7C7C7C;
    height: 28px;
    margin-right: 8px;
    width: 102px;
    &:focus, &:active{
      outline: none;
      box-shadow: none;
    }
  }

  &__link{
    cursor: pointer;
  }
}

</style>
