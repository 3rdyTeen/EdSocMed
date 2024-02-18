const crypto = require('crypto');

const hashString = (string = null) => {
    if(!string) {
        string = crypto.randomBytes(20).toString('hex');
    }
   
   return crypto.createHash('md5').update(string).digest('hex');
}
  

module.exports = hashString;
