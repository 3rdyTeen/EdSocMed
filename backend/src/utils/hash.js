const crypto = require('crypto');

const createRandomToken = () => 
    crypto.randomBytes(20).toString('hex');

const hashString = (string) =>
     crypto.createHash('md5').update(string).digest('hex');
  

module.exports = {
    createRandomToken,
    hashString
};
