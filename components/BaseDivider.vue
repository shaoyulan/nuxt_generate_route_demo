<template>
  <div 
    class="base-divider"
    :style="{
      '--base-divider-h': h,
      '--base-divider-color': color,
    }"
  >
  </div>
</template>

<script>
export default {
  props:{
    h: {
      type: String,
      default: '1px'
    },
    color: {
      type: String,
      default: '#C4C4C4'
    },
  },
  data: () => ({ 
  }),
  mounted(){
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.base-divider{
  --base-divider-h: 1px;
  --base-divider-color: #C4C4C4;
  height: var(--base-divider-h);
  background: var(--base-divider-color);
  transform: scaleY(0.5);
}

</style>



