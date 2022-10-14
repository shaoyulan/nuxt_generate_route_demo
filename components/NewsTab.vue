<template>
  <SimpleTab
    :list="list"
    @click="$emit('itemClick', $event)"
  />
</template>

<script>
export default {
    props:{

    },
    data: () => ({ 
      list: [
        {
          id: 1,
          name: '所有日誌',
        },
        {
          id: 2,
          name: 'SEO 優化',
        },
        {
          id: 3,
          name: '網頁設計常見問題',
        },
        {
          id: 4,
          name: '網頁須知',
        },
        {
          id: 5,
          name: '網站工具說明',
        },
        {
          id: 6,
          name: '數位行銷',
        }
      ]
    }),
    mounted(){
    }
}
</script>

<style lang="scss">
@import "~assets/css/design";

</style>



