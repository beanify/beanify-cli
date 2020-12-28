const { readFile, writeFile, existsSync } = require('fs')

const path = require('path')
const chalk = require('chalk')
const generify = require('generify')
const argv = require('yargs-parser')
const { execSync } = require('child_process')
const log = require('./log')

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
    log('error', "must specify a directory to 'beanify generate'")
    process.exit(1)
  }

  if (existsSync(path.join(dir, 'package.json'))) {
    log('error', 'a package.json file already exists in target directory')
    process.exit(1)
  }

  generify(
    path.join(__dirname, 'templates', 'plugin'),
    dir,
    {},
    file => {
      log('debug', `generated ${file}`)
    },
    err => {
      if (err) {
        log('error', err.message)
        return process.exit(1)
      }

      process.chdir(dir)
      execSync('npm init -y')

      log('info', `reading package.json in ${dir}`)
      readFile('package.json', (err, data) => {
        if (err) {
          log('error', err.message)
          return process.exit(1)
        }

        let pkg
        try {
          pkg = JSON.parse(data)
        } catch (err) {
          log('error', err.message)
          return process.exit(1)
        }

        pkg.main = 'index.js'

        pkg.scripts = {
          test: 'node ./ex.js',
          lint: 'npm run lint:standard && npm run lint:typescript',
          'lint:fix': 'standard --fix',
          'lint:standard': 'standard --verbose | snazzy',
          'lint:typescript': 'eslint -c types/.eslintrc types/**/*.d.ts'
        }

        pkg.dependencies = {}

        pkg.devDependencies = {
          '@typescript-eslint/eslint-plugin': '^4.9.1',
          '@typescript-eslint/parser': '^4.9.1',
          beanify: '^3.0.5',
          eslint: '^7.15.0',
          'eslint-config-standard': '^16.0.2',
          'eslint-plugin-import': '^2.22.1',
          'eslint-plugin-node': '^11.1.0',
          'eslint-plugin-promise': '^4.2.1',
          'eslint-plugin-standard': '^5.0.0',
          'pino-pretty': '^3.5.0',
          'pre-commit': '^1.2.2',
          snazzy: '^9.0.0',
          standard: '^16.0.3',
          typescript: '^4.1.3'
        }

        pkg.typings = 'index.d.ts'
        pkg['pre-commit'] = ['lint']

        log('debug', 'edited package.json, saving')
        writeFile('package.json', JSON.stringify(pkg, null, 2), err => {
          if (err) {
            log('error', err.message)
            return process.exit(1)
          }

          log('debug', 'saved package.json')
          log('info', `project ${pkg.name} generated successfully`)
          log(
            'debug',
            `run '${chalk.bold(
              'npm install or yarn install'
            )}' to install the dependencies`
          )
          log(
            'debug',
            `run '${chalk.bold(
              'npm test or yarn run test'
            )}' to test the plugin`
          )

          execSync('git init')
        })
      })
    }
  )
}

module.exports = cli

if (require.main === module) {
  cli(process.argv.slice(2))
}
