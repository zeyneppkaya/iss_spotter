const { fetchMyIP, fetchCoordsByIP , fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, body) => {
  if (error) {
    console.log("There was an error", error);
    return;
  }
  console.log("It worked! Returned IP:" + body);
});

fetchCoordsByIP("72.140.114.222", (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log("It worked! Returned coordinates:" ,  coords);
});

const myCoords = { latitude: '45.3218', longitude: '-75.7398' };

fetchISSFlyOverTimes(myCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned flyover times:' , passTimes);
});
