const { loadNuxt, build } = require('nuxt')
const express = require('express')
const app = require('express')()
// const isDev = process.env.NODE_ENV !== 'production'
const isDev = false;
// const port = process.env.PORT || 3000
const port = 3010


async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start');

  app.use(express.json())

  // Render every route with Nuxt
  app.use(async function(req, res, next){

    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('access-control-allow-origin', '*')

    if ( req.url == '/articlepreview' || req.url == '/workpreview'){

      const { html, error, redirected } = await nuxt.renderRoute(req.url, {
        req,
        res
      })

      var newHtml = html

      res.send(newHtml);

    } else {

      nuxt.render(req, res)
    }

  })

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}

start()
