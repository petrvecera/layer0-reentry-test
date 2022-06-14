// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

module.exports = new Router()
  .match('/service-worker.js', ({ serviceWorker }) => {
    return serviceWorker('.next/static/service-worker.js')
  })
   .match("/reentry", ({ proxy }) => {
        proxy('reentry', { path: '/reentry' })
    })
    .match("/pre", ({ proxy }) => {
        proxy('pagep', { path: '/' })
    })

  .use(nextRoutes) // automatically adds routes for all files under /pages
