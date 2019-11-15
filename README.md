# beanify-cli

Command line tools for [Beanify](https://github.com/beanjs-framework/beanify).
Generate, write and run an application with one single command!

## Install
```bash
npm install beanify-cli --global
```

## Usage

`beanify` offers a single command line interface for your beanify
project:

```bash
$ beanify
```

Will print an help:

```
Beanify command line interface, available commands are:

  * generate      generate a new project
  * plugin        generate a new plugin
  * version       the current beanify-cli version
  * help          help about commands

Launch 'beanify help [command]' to know more about the commands.

```

### generate

`beanify-cli` can also help with generating some project of your next beanify application. To use it:

1. `beanify generate <yourapp>`
2. `cd yourapp`
3. `npm install`

The sample code offers you four npm tasks:

* `npm start` - starts the application
* `npm test` - runs the tests

You will find three different folders:
- `plugins`: the folder where you will place all your custom plugins
- `services`: the folder where you will declare all your endpoints
- `test`: the folder where you will declare all your test

Finally there will be an `app.js` file, which is your entry point.

### plugin

Create a basic plugin.

```
$ beanify plugin <folder>/<name>
```