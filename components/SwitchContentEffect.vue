<template>
  <div 
    ref="refRoot" 
    class="switch-content-effect"
    :class="{
      'switch-content-effect_hover-trigger':hover,
      'switch-content-effect_show':show,
    }"
  >
    <div class="switch-content-effect__size-maker">
      {{ sizeMaker }}
    </div>
    <div class="switch-content-effect__content-before">
      <slot name="before"/>
    </div>
    <div class="switch-content-effect__content-after">
      <slot name="after"/>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
  props:{
    show: Boolean,
    hover: Boolean,
    sizeMaker: String
  },
  data: () => ({ 
    store: useGlobalStore(),
    isShow: false,
  }),
  watch:{
  },
  mounted(){
    this.isMounted = true;

    var refRoot = $(this.$refs['refRoot']);
    this.isReady = true;

  },
  methods:{
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.switch-content-effect{
  position: relative;
  overflow: hidden;

  &_hover-trigger{
    &:hover{
      .switch-content-effect__content-before{
        transform: translateY(-100%);
      }
      .switch-content-effect__content-after{
        transform: translateY(0%);
      }
    }
  }

  &__size-maker{
    opacity: 0;
  }
  &__content-before{
    transition: .3s cubic-bezier(.165,.84,.44,1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  &__content-after{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(100%);
    transition: .3s cubic-bezier(.165,.84,.44,1);
    white-space: nowrap;
  }

  &_show{
    .switch-content-effect__content-before{
      transform: translateY(-100%);
    }
    .switch-content-effect__content-after{
      transform: translateY(0%);
    }
  }
}

</style>



