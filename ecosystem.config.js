module.exports = {
  // apps: [
  //   {
  //     name: 'souls',
  //     exec_mode: 'cluster',
  //     instances: 'max', // Or a number of instances
  //     script: '/var/www/souls/node_modules/nuxt/bin/nuxt.js',
  //     args: 'start',
  //     env: {
  //       // process.env.NODE_ENV
  //       NODE_ENV: 'production'
  //     }
  //   }
  // ]
  apps: [
    {
      name: 'souls_preview',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: '/var/www/souls/server.js'
    }
  ]
}
