<template>
  <div 
    class="article-list-item"
    :class="{
    }"
  >
    <div class="article-list-item__content">
      <slot />
    </div>
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

.article-list-item{
  display: flex;
  margin-bottom: 12px;
  &:before{
    content:'';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #505050;
    margin: 0 0.45em;
    margin-top: 0.6em;
    flex-shrink: 0;
  }
}

</style>



