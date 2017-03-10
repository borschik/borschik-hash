borschik-hash
=============

[Borschik](https://github.com/borschik/borschik) hash function to [freeze](https://github.com/borschik/borschik/blob/master/docs/freeze/freeze.en.md) files.

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]

[npm]:      https://www.npmjs.org/package/borschik-hash
[npm-img]:  https://img.shields.io/npm/v/borschik-hash.svg

[travis]:   https://travis-ci.org/borschik/borschik-hash
[test-img]: https://img.shields.io/travis/borschik/borschik-hash.svg?label=tests

Install
-------

```
$ npm install --save-dev borschik-hash
```

Usage
-----

```js
var borschikHash = require('borschik-hash');

var contents = fs.readFileSync('path/to/file');
var hash = borschikHash(contents);

// ➜ LWJmVQ8Q4Kn5C4mK3iYXHyieR7g
```

CLI
---

```shell
$ borschik-hash path/to/file

LWJmVQ8Q4Kn5C4mK3iYXHyieR7g
```

License
-------

MIT © [Andrew Abramov](https://github.com/blond)
