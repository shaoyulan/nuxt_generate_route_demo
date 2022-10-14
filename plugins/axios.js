export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    baseURL: "https://offcial.sourcejust.com/official/",
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    },
    transformResponse: [
      function(res){
        return res;
      }
    ],
  })

  // Set baseURL to something different
  // api.setBaseURL('https://free100.com.tw:443')

  // Inject to context as $api
  inject('api', api)
}