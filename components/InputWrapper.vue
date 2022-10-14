<template>
  <div 
    class="input-wrapper"
    :class="{
      'input-wrapper_underline': underline
    }"
  >
    <slot/>
  </div>
</template>

<script>
export default {
    props:{
      underline:Boolean
    },
    data: () => ({ 
    }),
    mounted(){
      var that = this;
    },
    methods:{
      onScroll(){

      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.input-wrapper{
  --form-field-fz: 14px;
  &_underline{
    .v-text-field__slot{
      input{
        max-height: 44px;
        height: 44px;
      }
    }
    .v-input__append-inner{
      margin-top: 12px;
      i {
        font-size: 20px;
      }
    }
  }
}

</style>



