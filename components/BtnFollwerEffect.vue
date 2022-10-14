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
    var ani = ''

    slot.addClass('btn-follower-effect')
    slot.append('<i class="btn-follower-effect_i"></i>')

    $(this.$refs['refRoot']).after(slot);
    $(this.$refs['refRoot']).remove();

    // enter
    slot.on('mouseenter', function (e) {
      var el = $(e.target).find('.btn-follower-effect_i');
      if (el && el[0] !== null) {
        var position = e.currentTarget.getBoundingClientRect();
        if (ani) {
          ani.pause()
        }
        anime.set(el[0], {
          top: e.clientY - position.y - 25,
          left: e.clientX - position.x - 25
        })
        ani = anime({
          targets: el[0],
          opacity: [0, 1],
          scale: [0, 5],
          easing: 'easeOutExpo'
        })
      }
    });

    // move
    slot.on('mousemove', function (e) {
      var el = $(this).find('.btn-follower-effect_i');
      if (el && el[0] !== null) {
        var position = e.currentTarget.getBoundingClientRect();
        ani = anime.set(el[0], {
          top: e.clientY - position.y - 25,
          left: e.clientX - position.x - 25,
          opacity: 1
        })
      }
    });

    // leave
    slot.on('mouseleave', function (e) {
      var el = $(this).find('.btn-follower-effect_i');
      if (el && el[0] !== null) {
        var position = e.currentTarget.getBoundingClientRect();
        if (ani) {
          ani.pause()
        }
        ani = anime({
          targets: el[0],
          opacity: [1, 0],
          scale: [5, 0],
          top: e.clientY - position.y,
          left: e.clientX - position.x,
          easing: 'easeOutExpo'
        })
      }
    });
  }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.btn-follower-effect{
  position: relative;
  overflow: hidden;
  display: inline-block;
  text-align: center;
  .btn-content{
    position: relative;
    z-index: 1;
  }
  .btn-follower-effect_i{
    background: #FFEBED;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: -5px;
    margin-top: -5px;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0;
  }
}

</style>



