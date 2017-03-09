var crypto = require('crypto');

/**
 * Code content by SHA1 Base64 algorithm.
 *
 * @param {String} content — content to code.
 * @returns {String} Coded content.
 */
function sha1Base64(content) {
    var sha1 = crypto.createHash('sha1');

    sha1.update(content);

    return sha1.digest('base64');
}

/**
 * Fix Base64 string to accomplish Borschik needs.
 *
 * @param {String} base64 — string to fix.
 * @returns {String} Fixed string.
 */
function fixBase64(base64) {
    return base64
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '')
        .replace(/^[+-]+/g, '');
}

/**
 * Fix
 *
 * @param {String} contents — file contents.
 *
 * @returns {String}
 */
module.exports = function (contents) {
    return fixBase64(sha1Base64(contents));
};
