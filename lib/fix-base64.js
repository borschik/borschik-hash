/**
 * Fix Base64 string to accomplish Borschik needs.
 *
 * @param {String} base64 — string to fix.
 * @returns {String} Fixed string.
 */
module.exports = function fixBase64(base64) {
    return base64
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '')
        .replace(/^[+-]+/g, '');
};
