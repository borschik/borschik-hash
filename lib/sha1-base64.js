var crypto = require('crypto');

/**
 * Code content by SHA1 Base64 algorithm.
 *
 * @param {String} content — content to code.
 * @returns {String} Coded content.
 */
module.exports = function sha1Base64(content) {
    var sha1 = crypto.createHash('sha1');

    sha1.update(content);

    return sha1.digest('base64');
};
