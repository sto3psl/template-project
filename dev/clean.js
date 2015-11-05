'use strict'

var del = require('node-delete')
var fs = require('fs')

// fs.readdir('../dist', function (err, files) {
//   if (err) console.log(err)
//   else console.log(files)
// })

const dir = '../dist/'

del([dir + '*.png', dir + '*.ico', dir + '*.js', dir + '*.css', dir + 'manifest.json'], {'force': true}, function (err, paths) {
  if (err) console.error(err)
  else console.log('Deleted files:\n', paths.join('\n'))
})

console.log('Directory clean.')
