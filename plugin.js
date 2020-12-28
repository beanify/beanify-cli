const {
  existsSync,
  renameSync
} = require('fs')

const path = require('path')
const generify = require('generify')
const argv = require('yargs-parser')
const log = require('./log')

function generate (dir, cb) {
  let _name = path.basename(dir)
  if (_name.endsWith('.js')) {
    _name = _name.substr(0, _name.length - 3)
  }
  const _dir = path.join(dir, '..')
  generify(path.join(__dirname, 'templates', 'plugins'), _dir, {
    name: `'beanify-${_name}'`
  }, (file) => {
    log('debug', `plugin ${_name}.js`)
  }, (err) => {
    if (err) {
      return cb(err)
    }

    renameSync(path.join(_dir, '.____template.js'), path.join(_dir, `${_name}.js`))

    log('info', `plugin ${_name}.js generated successfully`)
  })
}

function cli (args) {
  const opts = argv(args)
  const dir = opts._[0]

  if (dir && existsSync(dir)) {
    if (dir !== '.' && dir !== './') {
      log('error', 'directory ' + opts._[0] + ' already exists')
      process.exit(1)
    }
  }

  if (dir === undefined) {
    log('error', 'must specify a directory to \'beanify plugin\'')
    process.exit(1)
  }

  if (existsSync(path.join(dir, 'package.json'))) {
    log('error', 'a package.json file already exists in target directory')
    process.exit(1)
  }

  generate(dir, (err) => {
    if (err) {
      log('error', err.message)
      process.exit(1)
    }
  })
}

module.exports = {
  generate, cli
}

// if(require.main===module){
//     cli(process.argv.slice(2));
// }
