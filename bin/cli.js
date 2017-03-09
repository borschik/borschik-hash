#!/usr/bin/env node

const meow = require('meow');
const bHash = require('..');
 
const cli = meow(`
    Usage
      $ borschik-hash <inputFiles>
 
    Examples
      $ foo file.js
      LWJmVQ8Q4Kn5C4mK3iYXHyieR7g
`);

cli.input.forEach(file => console.log(bHash(file)));
