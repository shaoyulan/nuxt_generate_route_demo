<template>
  <div>
    <img v-if="!dark" class="app-logo" :src="require('~/assets/img/logo/logo_full.svg')">
    <img v-if="dark" class="app-logo" :src="require('~/assets/img/logo/logo3.svg')">
  </div>
</template>

<script>
export default {
  props:{
    dark: Boolean
  },
  data: () => ({ 
  }),
  mounted(){
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.app-logo{
    display: inline-block;
    img{
        display: block;
    }
}

</style>



