const redis = require('redis');
const client = redis.createClient({legacyMode: true ,url : 'redis://127.0.0.1:6379'});

client
  .connect()
  .then(async (res) => {
    console.log('connected');


    
  })
  .catch((err) => {
    console.log('err happened' + err);
  });

   module.exports = client;
