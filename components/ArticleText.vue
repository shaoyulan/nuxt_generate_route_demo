<template>
  <div 
    class="article-text"
    :class="{
    }"
  >
    <slot />
  </div>
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

.article-text{
  font-size: 16px;
  line-height: calc(28 / 16);
  letter-spacing: 1.2px;
  color: #505050;
  font-weight: 400;
  margin-bottom: 24px;
}

</style>



