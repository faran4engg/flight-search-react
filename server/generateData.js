module.exports = () => {
  const data = { getFlights: [] };

  for (let i = 0; i < 100; i++) {
    data.getFlights.push({ id: i, name: `user${i}` });
  }
  return data;
};
