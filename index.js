var sha1Base64 = require('./lib/sha1-base64');
var fixBase64 = require('./lib/fix-base64');

/**
 * Codes content by SHA1 Base64 algorithm with fix Base64 string to accomplish Borschik needs.
 *
 * @param {String} contents — file contents.
 * @returns {String}
 */
module.exports = function (contents) {
    return fixBase64(sha1Base64(contents));
};
