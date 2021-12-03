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

module.exports = { fetchMyIP };
