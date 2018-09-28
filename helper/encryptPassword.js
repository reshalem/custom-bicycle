const crypto = require('crypto');

function encryptPassword(instance) {
    const secret = 'none';
    const hash = crypto.createHmac('sha256', secret)
                    .update(instance.username)
                    .digest('hex');

    instance.password = hash;

    return instance;
}

module.exports = encryptPassword;