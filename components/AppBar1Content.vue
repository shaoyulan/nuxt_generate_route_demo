<template>
  <div class="app-bar1-content" >
    <NuxtLink to="/" class="app-bar-logo" >
        <Logo :dark="darkLogo" />
    </NuxtLink>
    <!-- <v-toolbar-title v-text="title" /> -->
    <v-spacer />
    <nav class="nav" >
      <ul class="app-bar-1-menu">
        <li>
          <NuxtLink to="/blog">最新消息</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">關於我們</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/feature">特色介紹</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/service/web-design-and-develop">服務項目</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/work">客戶案例</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/fast-build-website">快速架站</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">報價洽詢</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">知識分享</NuxtLink>
        </li>
      </ul>
      <span class="nav-indicator"></span>
    </nav>
    <SelfFollwerEffect>
      <a
        icon
        class="hamburger-round-wrapper"
        @click.stop="toggleMenu()"
      >
        <div class="hamburger hamburger-11" :class="menuOpen ? 'is-active' : ''">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </a>
    </SelfFollwerEffect>
</div>
</template>

<script>
import SelfFollwerEffect from './SelfFollwerEffect.vue';
export default {
    props: {
      menuOpen: Boolean,
      darkLogo: Boolean
    },
    data: () => ({}),
    methods: {
        toggleMenu() {
            console.log("emit", this.menuOpen);
            this.$emit("update:menuOpen", !this.menuOpen);
        },
        initNavIndicator() {
            var indicaator = $(".nav-indicator")[0];
            var ani = "";
            $(".app-bar-1-menu li a").on("mouseenter", function () {
                var pos = $(this).position();
                var pl = parseFloat($(this).css("padding-left"));
                anime.set(indicaator, {
                    opacity: 1,
                });
                if (ani)
                    ani.pause();
                ani = anime({
                    targets: indicaator,
                    width: $(this).width(),
                    left: pos.left + pl,
                    easing: "easeOutExpo"
                });
            });
            $(".app-bar-1 .nav").on("mouseleave", function () {
                if (ani)
                    ani.pause();
                ani = anime({
                    targets: indicaator,
                    width: 0,
                    easing: "easeOutExpo",
                    complete: function () {
                        anime.set(indicaator, {
                            opacity: 0,
                        });
                    }
                });
            });
        },
        navTextAni() {
            $(".app-bar-1-menu li a").each(function (idx, a) {
                if ($(a).text().trim().length == 0)
                    return;
                $(a).css({
                    position: "relative",
                    overflow: "hidden",
                    display: "inline-block"
                });
                $(a).wrapInner("<span></span>");
                var target = $(a).find("span");
                var cloned = target.clone().css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    transform: "translateY(100%)"
                });
                target[0].innerHTML = target[0].textContent.replace(/\S/g, "<span class='letter' style='display:inline-block;' >$&</span>");
                cloned[0].innerHTML = cloned[0].textContent.replace(/\S/g, "<span class='letter' style='transform:translateY(100%); display:inline-block;' >$&</span>");
                cloned.appendTo($(a));
                $(a).on("mouseenter", function () {
                    anime({
                        targets: $(a).find(".letter").toArray(),
                        translateY: [0, "-100%"],
                        delay: anime.stagger(20, { start: 0 })
                    });
                });
                $(a).on("mouseleave", function () {
                    anime({
                        targets: $(a).find(".letter").toArray().reverse(),
                        translateY: ["-100%", 0],
                        delay: anime.stagger(20, { start: 0 })
                    });
                });
            });
        }
    },
    mounted() {
        this.initNavIndicator();
        this.navTextAni();
    },
    components: { SelfFollwerEffect }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.app-bar1-content{
  width: 100%;
  display: flex;
  align-items: center;

  .nav{
    position: relative;
    .nav-indicator {
      height: 2px;
      width: 0;
      background: #E7142D;
      position: absolute;
      top: 95%;
    }
  }

  .app-bar-1-menu{
    display: flex;
    font-size: 14px;
    padding: 0;
    list-style-type: none;
    flex-grow: 1;
    margin-right: 40px;
    transition: opacity .3s;
    padding-left: 0;
    a{
      color: #fff;
      text-decoration: none;
      width: 100%;
      text-align: center;
      display: block;
      padding: 0 20px;
    }
    li{
      flex-grow: 1;
    }
  }

  .app-bar-logo{
    width: 220px;
    opacity: 0;
    transform: translateY(100%);
    transition: .3s;
    img{
      max-width: 100%;
      display: block;
    }
    &.is-hide{
      opacity: 0;
    }
  }
  // @include media(1920){
  //   .app-bar-logo{
  //     width: rwd-val(768px, 240px, 1920px, 220px);
  //   }
  // }
}

</style>



