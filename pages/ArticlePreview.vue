<template>
  <div class="p-blog-detail bg-gray">
    <section class="banner">
      <div class="large-banner-common-fixed-effect-wrap">
        <LargeBannerCommon 
          :aspectRatio="bannerRatio"
          :minH="bannerMinH"
        >
        </LargeBannerCommon>
        <LargeBannerCommon 
          imgTag
          :aspectRatio="bannerRatio"
          :imgSrc="data.coverImg"
          mobileDefault
          class="large-banner-common-fixed"
          :minH="bannerMinH"
        >
        </LargeBannerCommon>
      </div>
    </section>
    <div class="bg-white" style="position: relative; z-index: 1;">
      <v-container class="container-1160px container_rwd-padding">
        <BaseSpacer h="68px" class="intro-start" />
        <div class="news-breif-intro">
          <div class="item-prepend">
            <div class="item-date">
              <div class="date-month">
                {{ dateInfo.month }}
              </div>
              <div class="date-more">
                {{ dateInfo.monthStr }} {{ dateInfo.yearShort }}
              </div>
            </div>
          </div>
          <div class="item-main">
            <div class="item-title">
              {{data && data.title}}
            </div>
            <div class="item-des">
              {{data && data.subTitle}}
            </div>
          </div>
        </div>
        <BaseSpacer h="68px" class="intro-end"/>
      </v-container>
      <div class="bg-gray2">
        <BaseSpacer h="68px" class="" :rwdVal="[375, 28, 768, 68]" />
        <v-container class="container-1160px container_rwd-padding">
          <div class="article-text" v-html="data.content">
          </div>
          <BaseSpacer h="70px" />
          <div class="related-box">
            <div class="box-title">
              <img src="~/assets/img/icon/lightbulb.svg" alt="" srcset="">
              延伸閱讀：
            </div>
            <div class="box-item">
              <a class="box-link">
              為什麼「客製化網頁設計」是百大知名企業品牌推薦的網站建置作法?
              </a>
            </div>
            <div class="box-item">
              <a class="box-link">
              必須選擇客製化網頁設計的5個理由與優點
              </a>
            </div>
          </div>
          <BaseSpacer h="80px"/>
          <div class="article-section-title">
            從網站規劃提案、視覺設計、功能開發到代管維護
          </div>
          <BaseSpacer h="80px"/>
          <div class="article-text">
            「從農田到餐桌，從日常到生活」是本土上市公司 興農企業的發展目標，事業版圖橫跨植物保護、塑膠、蘭花培育及旗下楓康超市，公司形象網站更身負企業核心及永續經營傳達的重任，穩固投資人對企業的信心，也吸引更多菁英人才投入企業體、共同成長。愛貝斯客製化網頁設計用視覺設計翻轉普遍人對於本土傳統企業的刻板印象，活潑且具互動性的網頁設計編排，打造聚焦企業精神的形象網站。
          </div>
          <BaseSpacer h="80px"/>
          <div class="article-text">
            而上市櫃企業網站架構能透過客製化設計重整梳理，將必備的「公司簡介」、「新聞中心」、「人才招募」、包含企業財務報表及股價資訊的「投資人專區」及包含RBA責任商業聯盟行為準則、CSR報告書的「企業社會責任」，以符合企業公開資訊揭露的規範，對使用者也更加友善閱讀與體驗的形式來呈現。
    許多企業品牌在進行網頁設計服務比較與詢價時，最常為各種方案服務所提供的設計範疇煩惱，選擇套版型網頁雖然費用較低，但版面只能填鴨式上架圖片、難有風格獨特性，內頁介面更可能又過於制式、毫無設計編排，反之尋求客製化網站設計，又擔心不知道如何表達需求，甚至是拿到一份好像與價值不符的「天價」估價單。
          </div>
          <BaseSpacer h="80px" :rwdVal="[375, 40, 768, 80]"/>
        </v-container>
      </div>
      <v-container class="container-1160px container_rwd-padding">
        <BaseSpacer h="60px" :rwdVal="[375, 40, 768, 60]"/>
        <div class="related-read-title">
          延伸閱讀
        </div>
        <BaseSpacer h="8px"/>
        <RelatedReadBlock />
      </v-container>
      <BaseSpacer h="48px"/>
    </div>
  </div>
</template>

<script>
import { useGlobalStore } from '@@/store/global.js'
import RelatedReadBlock from '../components/RelatedReadBlock.vue';

export default {
    name: "",
    layout: "preview",
    props: {},
    validate({ params, query, store }) {
      return true // if the params are valid
    },
    asyncData({ req, res, params }) {
      if (process.server) {

        res.setHeader('Access-Control-Allow-Headers', '*')
        res.setHeader('Access-Control-Allow-Methods', '*')
        res.setHeader('access-control-allow-origin', '*')
        
        return {data: req.body};
        // return {
        //   data: {
        //     "coverImg": "https://storage.googleapis.com/download/storage/v1/b/source-solution-bucket/o/upload_data%2Fblog%2F73aa077f-6dee-4b51-a321-113d90d5f1c8.jpg?generation=1664417928760935&alt=media",
        //     "smallImg": "https://storage.googleapis.com/download/storage/v1/b/source-solution-bucket/o/upload_data%2Fblog%2Ff8d939db-ea55-4d78-8a43-92c3511ed7d0.jpg?generation=1664417920249225&alt=media",
        //     "title": "《愛之船 Vessel of love》 Release Tour",
        //     "content": "<p><span style=\"color: rgb(132,132,132);background-color: rgb(246,246,246);font-size: 16px;font-family: Montserrat, \"Noto Sans TC\", 微軟正黑體, 蘋果儷中黑, -apple-system, system-ui, \"Segoe UI\", Roboto, Ubuntu, Cantarell, \"Noto Sans\", sans-serif, BlinkMacSystemFont, \"Helvetica Neue\", Arial;\">從網頁搜尋行為中已經觀察到：現在的消費者願意尋找更多家供應商來進行服務比較，但卻也花費更少的時間來深入瀏覽企業品</span></p>\n<p><span style=\"color: rgb(132,132,132);background-color: rgb(246,246,246);font-size: 16px;font-family: Montserrat, \"Noto Sans TC\", 微軟正黑體, 蘋果儷中黑, -apple-system, system-ui, \"Segoe UI\", Roboto, Ubuntu, Cantarell, \"Noto Sans\", sans-serif, BlinkMacSystemFont, \"Helvetica Neue\", Arial;\">牌。 選擇量身打造的客製化網頁設計，愛貝斯網站設計團隊將協助企業與品牌獲得最有效益的網頁策略規劃、及最友善的介面配置，</span></p>\n<p><span style=\"color: rgb(132,132,132);background-color: rgb(246,246,246);font-size: 16px;font-family: Montserrat, \"Noto Sans TC\", 微軟正黑體, 蘋果儷中黑, -apple-system, system-ui, \"Segoe UI\", Roboto, Ubuntu, Cantarell, \"Noto Sans\", sans-serif, BlinkMacSystemFont, \"Helvetica Neue\", Arial;\">讓自己能夠在眾多提供相似服務的競業對手中有效率地「展現自己的差異點」，並且「留下獨有的品牌印象」。</span>&nbsp;</p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(99,98,98);background-color: rgb(246,246,246);font-size: 24px;font-family: Montserrat, \"Noto Sans TC\", 微軟正黑體, 蘋果儷中黑, -apple-system, system-ui, \"Segoe UI\", Roboto, Ubuntu, Cantarell, \"Noto Sans\", sans-serif, BlinkMacSystemFont, \"Helvetica Neue\", Arial;\">從網站規劃提案、視覺設計、功能開發到代管維護</span></p>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(132,132,132);background-color: rgb(246,246,246);font-size: 16px;font-family: Montserrat, \"Noto Sans TC\", 微軟正黑體, 蘋果儷中黑, -apple-system, system-ui, \"Segoe UI\", Roboto, Ubuntu, Cantarell, \"Noto Sans\", sans-serif, BlinkMacSystemFont, \"Helvetica Neue\", Arial;\">「從農田到餐桌，從日常到生活」是本土上市公司 興農企業的發展目標，事業版圖橫跨植物保護、塑膠、蘭花培育及旗下楓康超市，公司形象網站更身負企業核心及永續經營傳達的重任，穩固投資人對企業的信心，也吸引更多菁英人才投入企業體、共同成長。愛貝斯客製化網頁設計用視覺設計翻轉普遍人對於本土傳統企業的刻板印象，活潑且具互動性的網頁設計編排，打造聚焦企業精神的形象網站。</span></p>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(132,132,132);background-color: rgb(246,246,246);font-size: 16px;font-family: Montserrat, \"Noto Sans TC\", 微軟正黑體, 蘋果儷中黑, -apple-system, system-ui, \"Segoe UI\", Roboto, Ubuntu, Cantarell, \"Noto Sans\", sans-serif, BlinkMacSystemFont, \"Helvetica Neue\", Arial;\">而上市櫃企業網站架構能透過客製化設計重整梳理，將必備的「公司簡介」、「新聞中心」、「人才招募」、包含企業財務報表及股價資訊的「投資人專區」及包含RBA責任商業聯盟行為準則、CSR報告書的「企業社會責任」，以符合企業公開資訊揭露的規範，對使用者也更加友善閱讀與體驗的形式來呈現。 許多企業品牌在進行網頁設計服務比較與詢價時，最常為各種方案服務所提供的設計範疇煩惱，選擇套版型網頁雖然費用較低，但版面只能填鴨式上架圖片、難有風格獨特性，內頁介面更可能又過於制式、毫無設計編排，反之尋求客製化網站設計，又擔心不知道如何表達需求，甚至是拿到一份好像與價值不符的「天價」估價單。</span><br>&nbsp;</p>\n<img src=\"https://storage.googleapis.com/download/storage/v1/b/source-solution-bucket/o/upload_data%2Fblog%2Fcaf4277a-03f2-4590-af0b-1bb286b80fc0.jpg?generation=1664417981079297&alt=media\" alt=\"undefined\" style=\"height: auto;width: 50%\"/>\n<p></p>\n",
        //     "subTitle": "我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新",
        //     "metaDes": "網頁敘述我們都曾經在生活中遇到悲傷難過的事， 是什麼讓我們在經歷這些之後再站起來， 選擇原諒自己或者他人、選擇釋然、選擇重新新",
        //     "metaKeyword": "網頁,SEO,須知,愛之船",
        //     "Date": "2021-09-04 19:33:50"
        //   }
        // }
      }
    },
    data: () => ({
      data:{},
      store: useGlobalStore(),
      title: '',
      subTitle: '',
    }),
    head() {
      return {
        title: this.data.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.data.metaDes
          },
          {
            name: 'keywords',
            content: this.data.metaKeyword
          },
        ]
      }
    },
    computed:{
      dateInfo(){
        if ( !this.data ) return {}
        if ( !this.data.Date ) return {};
        
        var arr = this.data.Date.split(' ');
        var dateArr = arr[0].split('-');
        
        return {
          year: dateArr[0],
          month: dateArr[1],
          date: dateArr[2],

          yearShort: dateArr[0].slice(2),
          monthStr:(function(){
            switch (parseInt(dateArr[1])) {
              case 1:
                return 'Jan.'
                break;
              case 2:
                return 'Feb.'
                break;
              case 3:
                return 'Mar.'
                break;
              case 4:
                return 'Apr.'
                break;
              case 5:
                return 'May.'
                break;
              case 6:
                return 'Jun.'
                break;
              case 7:
                return 'Jul.'
                break;
              case 8:
                return 'Aug.'
                break;
              case 9:
                return 'Sep.'
                break;
              case 10:
                return 'Oct.'
                break;
              case 11:
                return 'Nov.'
                break;
              case 12:
                return 'Dec.'
                break;
              default:
                break;
            }
          }())
        }
      },
      bannerRatio(){
        if ( this.store.windowInnerWidth < 768 ) {
          return 375/484
        }
        if ( this.store.windowInnerWidth < 1024 ) {
          return 768/484
        }
        return 1440/484
      },
      bannerMinH(){
        if ( this.store.windowInnerWidth < 768 ) {
          return 484
        }
        if ( this.store.windowInnerWidth < 1024 ) {
          return 484
        }
        return 535
      }
    },
    mounted() {
      // debugger
      console.log('dta', this.data ,)
    },
    components: { RelatedReadBlock }
}
</script>

<style lang="scss">
@import "~assets/css/design";

.p-blog-detail{
  .news-breif-intro{
    display: flex;
    font-size: 20px;
    .item-prepend{
      flex-shrink: 0;
      text-align: right;
    }
    .item-main{
      min-width: 0;
      flex-grow: 1;
    }
  
    .item-date{
      text-align: center;
      display: inline-block;
      font-size: 64px;
      margin-right: 63px;
      font-family: $ff-montserrat;
      .date-month{
        text-align: left;
        color: #D11329;
        line-height: calc(78 / 64);
        @include letter-spacing-center(2.5px);
      }
      .date-more{
        font-size: 14px;
        font-weight: 500;
        @include letter-spacing-center(2.5px);
        line-height: calc(28 / 14);
        font-weight: 500;
        color: #7C7C7C;
      }
    }
  
    .item-title{
      font-size: 32px;
      font-weight: 500;
      line-height: calc(40 / 32);
      letter-spacing: calc(4 / 32 * 1em);
      margin-bottom: calc(24 / 32 * 1em);
    }
    .item-des{
      font-size: 16px;
      line-height: calc(28 / 16);
      letter-spacing: 1.2px;
      color: #848484;
    }
  
    .item-link{
      color: #D11329;
      font-weight: 500;
      font-size: 1em;
      line-height: calc(31 / 20);
      letter-spacing: 0.05em;
    }
  }
  
  .article-text{
    font-size: 16px;
    line-height: calc(28 / 16);
    letter-spacing: 1.2px;
    color: #848484;
  }
  
  .related-box{
    font-size: 20px;
    letter-spacing: 0.05em;
    color: #444444;
    background: #EEEEEE;
    padding: 50px 60px;
    .box-title{
      line-height: calc(30 / 20);
      letter-spacing: 1.5px;
      margin-bottom: 13px;
    }
    .box-item{
      display: flex;
      align-items: center;
      line-height: calc(36 / 20);
      letter-spacing: 2.5px;
      + .box-item{
        margin-top: calc(13 / 28 * 1em);
      }
      &:hover{
        a {
          color: $color-red;
        }
      }
      &:before{
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #444444;
        margin-right: 10px;
        flex-shrink: 0;
        margin-left: calc(0.5em - 2.5px);
      }
      a {
        color: #444444;
        transition: .3s;
      }
    }
  }
  
  .article-section-title{
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.05em;
    line-height: calc(28 / 24);
    letter-spacing: 2.5px;
    color: #636262;
  
    // @include media(1920){
    //   font-size: rwd-val(320px, 20px, 1920px, 24px);
    // }
  
    // @include media(320){
    //   font-size: 20px;
    // }
  }
  
  .related-read-title{
    font-size: 36px;
    line-height: calc(54 / 36);
    letter-spacing: calc(4 / 36 * 1em);
    color: #E7142D;
  }

  @include media(1920){
    .intro-start{
      height: rwd-val(768px, 48px, 1920px, 68px);
    }

    .news-breif-intro{
      .item-title{
        font-size: rwd-val(768px, 24px, 1920px, 32px);
      }
      .item-date{
        margin-right: rwd-val(768px, 40px, 1920px, 63px);
      }
    }

    .related-box{
      padding: rwd-val(768px, 24px, 1920px, 50px) rwd-val(768px, 40px, 1920px, 60px);
    }

    .related-read-title{
      font-size: rwd-val(768px, 24px, 1920px, 36px);
    }
  }

  @include media($breakpoints-design-tablet){
    .intro-start, .intro-end{
      height: rwd-val(768px, 28px, 1920px, 48px);
    }

    .news-breif-intro{
      .item-title{
        font-size: rwd-val(375px, 20px, 1920px, 24px);
      }
      .item-date{
        font-size: rwd-val(375px, 24px, 768px, 64px);
      }
    }

    .related-box{
      padding: 24px rwd-val(768px, 24px, 1920px, 40px);
      .box-item{
        font-size: rwd-val(375px, 16px, 768px, 20px);
      }
    }

    .related-read-title{
      font-size: 24px;
    }
  }

  @include media(414){
    .news-breif-intro{
      flex-direction: column;
      .item-prepend{
        text-align: left;
        margin-bottom: 20px;
      }
      .item-date{
        display: flex;
        align-items: center;
        .date-month{
          margin-right: 7px;
        }
      }
    }
  }

  @include media($breakpoints-design-mobile){
    .intro-start, .intro-end{
      height: 28px;
    }

    .news-breif-intro{
      .item-title{
        font-size: 20px;
      }
      .item-des{
        font-size: 14px;
      }
    }

    .related-box{
      padding: 24px 24px;
      .box-item{
        font-size: 16px;
      }
    }
  }

}


</style>
