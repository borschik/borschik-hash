var path = require('path');
var fs = require('fs');

var assert = require('chai').assert;

var borschikHash = require('../index');

var FIXTURES_DIR = path.join(__dirname, 'fixtures');

describe('borschikHash', function() {
    it('should hash contents of CSS file', function() {
        var filename = path.join(FIXTURES_DIR, 'text.css');
        var contents = fs.readFileSync(filename);

        var hash = borschikHash(contents);

        assert.equal(hash, 'LWJmVQ8Q4Kn5C4mK3iYXHyieR7g');
    });

    it('should hash contents of JS file', function() {
        var filename = path.join(FIXTURES_DIR, 'text.js');
        var contents = fs.readFileSync(filename);

        var hash = borschikHash(contents);

        assert.equal(hash, 's2waZ-cd23dy_WqyHXmzbhscY_k');
    });

    it('should hash contents of png file', function() {
        var filename = path.join(FIXTURES_DIR, 'image.png');
        var contents = fs.readFileSync(filename);

        var hash = borschikHash(contents);

        assert.equal(hash, 'wFPs-e1B3wMRud8TzGw7YHjS08I');
    });
});
