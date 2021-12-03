const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, body) => {
  if (error) {
    console.log('There was an error', error);
    return;
  }
  console.log('It worked! Returned IP:' + body);
});

fetchCoordsByIP('72.140.114.222', (error, callback) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , callback);
});