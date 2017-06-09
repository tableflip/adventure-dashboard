import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'

import '../../api/projects/server/publications'

import { seedProjects } from './seed'

Meteor.startup(seedProjects)

// Debugging tools
const debug = require('debug')('http')
const lag = require('event-loop-lag')(1000)

// Log http requests
WebApp.connectHandlers.use((req, res, next) => {
  debug(req.method + ' ' + req.url)
  next()
})

// `_stats` route for getting metrics out of the deployed app at runtime.
WebApp.connectHandlers.use('/_stats', (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  const html = `
  <meta http-equiv="refresh" content="2" />
  <div style='font:menu; display:flex; align-items:center; justify-content:center'>
    <div style='flex: none;'>
      <h1>Event Loop Latency</h1>
      <code style='font-size: 300%'>${lag().toFixed(0)} ms</code>
      <h2>Versions</h2>
      <pre><code style='font-size: 150%'>${JSON.stringify(process.versions, null, 2)}</code></pre>
    </div>
  </div>
  `
  res.end(html)
})
