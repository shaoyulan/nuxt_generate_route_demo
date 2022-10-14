<template>
  <div ref="refRoot" class="btn-follower-effect">
    <slot />
  </div>
</template>

<script>
export default {
  props:{
  },
  data: () => ({ 
  }),
  mounted(){
    var slot = $(this.$refs['refRoot'].firstChild);

    $(this.$refs['refRoot']).after(slot);
    $(this.$refs['refRoot']).remove();
    
    var pv_x = '';
    var pv_y = '';

    var ball = slot;

    if ( !ball.length ) return;

    slot.on('mousemove', function (e) {
        if (pv_x == '') pv_x = e.clientX;
        if (pv_y == '') pv_y = e.clientY;

        var ball_left = ball.offset().left;
        var ball_top = ball.offset().top;


        ball.offset({
            left: ball_left + ((e.clientX - pv_x) * 0.5),
            top: ball_top + ((e.clientY - pv_y) * 0.5),
        })

        pv_x = e.clientX;
        pv_y = e.clientY;

    });

    slot.on('mouseleave', function (e) {
        pv_x = '';
        pv_y = '';

        ball.animate({
            left: 0,
            top: 0,
        })
    })
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";


</style>



