const request = require('request');

const fetchMyIP = (callback) => {

  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (error) return callback("There has been an error retieving IP address: " + error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const myIP = JSON.parse(body).ip;
    callback(null, myIP);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    if (response.statusCode !== 200) {
      callback(Error(`There was status code error in fetchCoordsByIP: ${response.statusCode}`), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });
  });
};
  
module.exports = { fetchMyIP, fetchCoordsByIP };
