import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({ 
    windowInnerWidth: 0,
    scrollTop: 0,
    // 減少動畫
    reduceAnimation: false,
    // gotop scroll 進行中
    isGoingTopDoing: false,
    // app mounted
    isAppMounted : false,
    // app loaded
    isAppLoaded: false,
    // 滑到footer
    isFooterInersecting: false, 
    // menu打開
    isAppFloatMenuOpen: false
  }),
  getters: {
  },
  actions: {
    async getIP ({ commit }) {
      console.log('this', this)
      // const ip = await this.$axios.$get('http://icanhazip.com')
      // commit('SET_IP', ip)
    }
  },
});