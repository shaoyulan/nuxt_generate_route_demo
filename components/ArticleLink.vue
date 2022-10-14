<template>
  <component :is="to ? 'NuxtLink':'a'"
    :to="to ? to : null"
    :href="(!to && contentAsHref) ? $slots.default[0].text : null"
    class="article-link"
    :class="{
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props:{
    to: Boolean,
    contentAsHref: Boolean
  },
  data: () => ({ 
  }),
  computed:{
  },  
  mounted(){
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

a.article-link{
  color: #E7142D;
  text-decoration: underline;
}

</style>



