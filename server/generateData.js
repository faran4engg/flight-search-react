const data = require("./dataSchema");

module.exports = () => {
  const response = { getFlights: [] };

  for (let i = 0; i < 3; i++) {
    response.getFlights.push(data);
  }
  return response;
};
