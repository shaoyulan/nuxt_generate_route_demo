<template>
  <div ref="refRoot" class="app-footer1__social">
    <a class="app-footer1__social-link" href="javascript:;" target="_blank" >
      <i class="icon-so-youtube"></i>
    </a>
    <a class="app-footer1__social-link" href="https://www.facebook.com/sourcejust/" target="_blank" >
      <i class="icon-so-fb"></i>
    </a>
    <a class="app-footer1__social-link" href="https://www.instagram.com/source_solution/" target="_blank" >
      <i class="icon-so-ig"></i>
    </a>
    <i class="ani-indicator"></i>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
export default {
    props:{
    },
    data: () => ({ 
    }),
    watch:{
    },
    mounted(){
      this.socialAniIndicator();
    },
    methods:{
      socialAniIndicator() {
        var ani_indicator = $(this.$refs.refRoot).find(".ani-indicator");
        var bar_link_w = $(this.$refs.refRoot).find(".app-footer1__social-link").outerWidth();
        var bar_link_h = $(this.$refs.refRoot).find(".app-footer1__social-link").outerHeight();
        ani_indicator.css({
          width: bar_link_w,
          height: bar_link_w,
        });
        var curr_ani = [];

        $(this.$refs.refRoot).on("mouseenter", ".app-footer1__social-link", function (e) {
          var pos = $(this).position();
          curr_ani.forEach(function (ani) {
            ani.pause();
            curr_ani.shift();
          });
          var duration = 300;
          if (ani_indicator.css("transform") == "matrix(0, 0, 0, 0, 0, 0)") {
            duration = 0;
          }
          curr_ani.push(anime({
            targets: ani_indicator[0],
            top: pos.top - 16,
            left: pos.left,
            duration: duration,
            complete: function () {
              anime({
                targets: ani_indicator[0],
                scale: 1,
              });
            }
          }));
        });
        $(this.$refs.refRoot).on("mouseleave", function (e) {
          curr_ani.forEach(function (ani) {
            ani.pause();
            curr_ani.shift();
          });
          anime({
            targets: ani_indicator[0],
            scale: 0,
            complete: function () {
            }
          });
        });
      }
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";
</style>



