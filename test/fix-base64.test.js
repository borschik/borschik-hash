var assert = require('chai').assert;

var fixBase64 = require('../lib/fix-base64');

describe('fixBase64', function() {
    it('+-a+b/c=', function() {
        assert.equal(fixBase64('+-a+b/c='), 'a-b_c');
    });
});
