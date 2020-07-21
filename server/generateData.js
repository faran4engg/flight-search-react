const flightData = require("./dataSchema");
const airports = require("./airports");

module.exports = () => {
  const response = { getFlights: [], airports: airports };

  for (let i = 0; i < 3; i++) {
    response.getFlights.push(flightData);
  }
  return response;
};
