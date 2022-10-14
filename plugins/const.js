const $const = {
  gender:{
    MALE: 'MALE',
    FEMALE: 'FEMALE',
  },
  service:{
    APP_IOS: 'APP_IOS',
    APP_ANDROID: 'APP_ANDROID',
    APP_DUAL: 'APP_DUAL',
    WEB: 'WEB',
    UIUX: 'UIUX',
    SOFTWARE: 'SOFTWARE',
    ERP: 'ERP',
    LINE_BOT: 'LINE_BOT',
  },
  REDUCE_ANI_BREAKPOINTS: 1024
}

export default function ({}, inject) {
  inject('const', $const)
}

export {
  $const
}