export default {
  render:{
    before(renderer, options){
      // options.build.publicPath = 'http://172.20.10.5:3010/_nuxt/'
      options.crossorigin = true;
      options.bundleRenderer.runInNewContext = true;
    },
    routeContext(context){
      // context.routePath = 'index2.html'
      // console.log('context2==', context)
    }
  },
}