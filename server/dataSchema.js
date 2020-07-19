module.exports = {
  segments: [
    {
      date: "2016-10-24",
      origin: "BOM",
      destination: "PNQ",
    },
    {
      date: "2016-10-25",
      origin: "PNQ",
      destination: "BOM",
    },
  ],
  airports: {
    BOM: {
      city: "Mumbai",
      country: "India",
    },
    PNQ: {
      city: "Pune",
      country: "India",
    },
  },

  proposals: [
    {
      segment: [
        {
          flight: [
            {
              fare: "2500.00",
              departure_date: "2016-10-24",
              duration: 275,
              arrival_date: "2016-10-24",
              departure: "BOM",
              arrival: "PNQ",
              trip_class: "Y",
              operating_carrier: "GH",
              flight_numbers: "GH1111",
              arrival_time: "08:45",
              departure_time: "08:10",
            },
          ],
        },
        {
          flight: [
            {
              fare: "2700.00",
              departure_date: "2016-10-25",
              duration: 250,
              arrival_date: "2016-10-26",
              departure: "PNQ",
              arrival: "BOM",
              trip_class: "Y",
              operating_carrier: "SU",
              flight_numbers: "SU2222",
              arrival_time: "06:00",
              delay: 0,
              departure_time: "21:50",
            },
          ],
        },
      ],
      segment_durations: [275, 250],
    },
  ],
  airlines: {
    SU: {
      ageOfPlanes: 4.0,
      minorsNotTravelAloneTo: "4 years",
      freeStandardCarryOn: 1,
      infantsSeatCost: "50",
      average_rate: "3.18",

      name: "Aeroflot",
      economySeats: 18,

      firstSeats: 26,
      checkedBaggagePrice2nd: "$50",
      lowcost: false,
      minorsNotTravelAloneFrom: "2",
      infantsLapCost: "90% of the full ticket price",
      alliance: "SkyTeam",
      rates: "5534",
      checkedBaggagePrice1st: "Free",
      minorsWithoutAdultTo: 16,
      carryOnStandard: 1,
      minorsWithoutAdultCost: 63,
      pets: "",
      ref: "56",

      freePersonalCarryOn: 1,
      infantsLapFrom: "0",
      id: 10,
      aircrafts: 155,

      updatedDate: "2015-12-20 00:36:34",
      wifi: "For a fee",
      freeCheckedBag: 2,
      carryOnPersonal: 1,
      alliance_name: "SkyTeam",
      infantsLapTo: "under 2 years old",
      minorsWithoutAdultFrom: 5,
      checkedBaggagePrice3rd: "$150",
    },
    GH: {
      id: 591,
      rates: "670",
      name: "Globus Airlines",
      alliance_name: "OneWorld",
      lowcost: false,
      average_rate: "3.78",
    },
  },

  currency: "EUR",
};
