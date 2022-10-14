<template>
    <div
      class="pagination-simple"
      :class="{
      }"
    >
      <input
          :value="nowPage"
          type="hidden"
      />
      <ul>
          <li class="pagination-item" :class="{'is-disable': nowPage - 1 < 1}" @click="onClickPage(nowPage - 1 )">
              <a href="javascript:;" class="back">
                  <v-icon>mdi-chevron-left</v-icon>
              </a>
          </li>
          <li class="pagination-item" @click="onClickPage(pageNum)" :data-page="pageNum" :class="{'is-active': nowPage == pageNum}" v-for="pageNum in pageList" :key="pageNum">
              <a href="javascript:;" class="">
              {{pageNum}}
              </a>
          </li>
          <li class="pagination-item" :class="{'is-disable': nowPage + 1 > totalPage}" @click="onClickPage(nowPage + 1)">
              <a href="javascript:;" class="next">
                  <v-icon>mdi-chevron-right</v-icon>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
      // 總頁數
      totalPage:{
          type: Number,
          default: 0
      },
      // 當前號碼
      nowPage: {
          type: Number,
          default: 0,
      },
      // pagination的頁數 (非link數字)
      // page: {
      //     default: 1
      // },
      // 一次顯示幾頁
      perPage:{
          type: Number,
          default: 5
      },
      // 隱藏上一頁/下一頁說明文字
      hideNavText:{
          type:Boolean,
          default: false,
      },

      // 手機板30px
      mobile30px: {
          type: Boolean,
          default: false
      }
    },
    data: () => ({ 
    }),
    computed:{
      to(){
        var result = this.nowPage + (this.perPage - 1) / 2;

        // now 在第一輪數字內
        if (result <= this.perPage) result = this.perPage;

        if (result > this.totalPage) result = this.totalPage;

        return result;
      },
      from(){

        var result = this.nowPage - (this.perPage - 1) / 2;

        // 在最後一輪數字內
        if (result >= this.totalPage- (this.perPage - 1)) result = this.totalPage- (this.perPage - 1);

        if (result < 1) result = 1;

        return result;
      },
      pageList(){
        var result = [];

        if ( this.totalPage < 1 ) {

        } else {
            for ( let i = this.from; i <= this.to; i++) {
              result.push(i)
            }
        }

        return result
      }
    },
    methods:{
      onClickPage(page){
        this.$emit('pageChange', page)
      },
      onUltraPrev(){
        this.$emit('ultraPrev')
      },
      onPrev(){
        this.$emit('prev')
      },
      onUltraNext(){
        this.$emit('ultraNext')
      },
      onNext(){
        this.$emit('next')
      }
    },
    mounted(){
      
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

// pagination-simple
.pagination-simple{
    margin-bottom: 20px;

    &.sty-mobile-30px{
        @include mobile-down{
            a {
                width: 30px;
                height: 30px;
            }
        }
    }

    ul{
        list-style: none;
        padding:0;
        margin:0;
        width: 100%;
        @include flex(center, center);
    }

    li {
      width: 100%;
      max-width: 63px;
      position: relative;
      
      &.is-disable{
          pointer-events: none;
          a{
              &.back, &.next{
                  color: #636262;
              }
          }
      }
    }

    &:not(.sty-hide-nav-text){
        a{
            &.back{
                color: #636262;
            }

            &.next{
                color: #636262;
            }

        }
    }

    a {
        width: 100%;
        @include flex(center,center);
        color: #C4C4C4;
        border-radius: 50%;
        font-weight: 500;
        font-size: 20px;
        line-height: calc(24 / 20);
        text-decoration: none;
        @include letter-spacing-center(0.05em);
        transition: .3s;
        i {
            display: inline-block;
        }

        &.back, &.next{
            color: #636262;
            border-radius: 18px;
            &:hover i{
              color: $color-red;
            }
        }

        &:hover{
          color: $color-red;
        }
    }

    .pagination-item{

        &.is-active{
            a {
                color: $color-red;
            }
        }
    }

}
// pagination-simple /

</style>



