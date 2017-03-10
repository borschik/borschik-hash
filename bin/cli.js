#!/usr/bin/env node

var fs = require('fs');

var borschikHash = require('..');
var pkg = require('../package.json');
var args = process.argv;

var i = 2;
var length = args.length;

if (length === i) {
    console.log(help());
    process.exit();
}

if (args[i] === '--help' || args[i] === '-h') {
    console.log(help());
    process.exit();
}

if (args[i] === '--version'  || args[i] === '-V') {
    console.log(pkg.version);
    process.exit();
}

if (args[i] === '--hello') {
    console.log('🍅');
    process.exit();
}

for (; i < length; i++) {
    var filePath = args[i];
    if (fs.existsSync(filePath)) {
        var file = fs.readFileSync(filePath);
        console.log(borschikHash(file));
    } else {
        console.log('Error: there is no such file —', filePath);
    }
}

function help() {
    return '\n' + pkg.description + '\n\n' +
        'Usage:\n' +
        '$ ' + pkg.name + ' file_to_freeze.js\n\n' +
        'Options:\n' +
        '  -h, --help : Help\n' +
        '  -V, --version : Version\n';
}
