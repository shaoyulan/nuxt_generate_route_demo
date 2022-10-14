<template>
  <h6 
    class="article-title"
    :class="{
    }"
  >
    <slot />
  </h6>
</template>

<script>
export default {
  props:{
    inline: Boolean,
  },
  data: () => ({ 
  }),
  mounted(){
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.article-title{
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 500;
  line-height: calc(30 / 20);
  letter-spacing: 1.5px;
}

</style>



