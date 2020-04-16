import React, { useReducer } from "react";

export const FlightsContext = React.createContext();

const initialState = [
  {
    id: 1,
    flightNumber: "4092",
    to: "KORD",
    from: "KDBQ",
    aircraftId: "N68174",
    aircraftType: "ERJ-145",
    scheduledDeparture: new Date("2020-04-04T04:00:00Z"),
    scheduledArrival: new Date("2020-04-04T05:30:00Z"),
    flightTime: "1.5",
  },
  {
    id: 2,
    flightNumber: "4179",
    to: "KSAW",
    from: "KORD",
    aircraftId: "N641AE",
    aircraftType: "ERJ-145",
    scheduledDeparture: new Date("2020-04-06T18:40:00Z"),
    scheduledArrival: new Date("2020-04-06T20:40:00Z"),
    flightTime: "1.75",
  },
  {
    id: 3,
    flightNumber: "837",
    to: "ORD",
    from: "LAX",
    aircraftId: "N641AE",
    aircraftType: "ERJ-145",
    scheduledDeparture: new Date("2020-04-10T07:15:00Z"),
    scheduledArrival: new Date("2020-04-10T11:45:00Z"),
    flightTime: "4.50",
  },
  {
    id: 4,
    flightNumber: "223",
    to: "SFO",
    from: "JFK",
    aircraftId: "N641AE",
    aircraftType: "ERJ-145",
    scheduledDeparture: new Date("2020-04-11T12:40:00Z"),
    scheduledArrival: new Date("2020-04-11T18:40:00Z"),
    flightTime: "5.50",
  },
];

const reducer = (state, action) => {
  let filteredFlights = state.filter(
    (flight) => flight.id !== action.payload.id
  );
  switch (action.type) {
    case "post":
      action.payload.status = "complete";
      filteredFlights.push(action.payload);
      return filteredFlights;
    case "save":
      action.payload.status = "enroute";
      filteredFlights.push(action.payload);
      return filteredFlights;
  }
};

export const FlightsProvider = ({ children }) => {
  const [flights, dispatch] = useReducer(reducer, initialState);
  return (
    <FlightsContext.Provider value={{ flights: flights, dispatch: dispatch }}>
      {children}
    </FlightsContext.Provider>
  );
};
