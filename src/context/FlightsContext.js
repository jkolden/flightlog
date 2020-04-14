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
    departDate: "31-May-20",
    departTime: "0600",
    arriveTime: "0730",
    flightTime: "1.5",
  },
  {
    id: 2,
    flightNumber: "4179",
    to: "KSAW",
    from: "KORD",
    aircraftId: "N641AE",
    aircraftType: "ERJ-145",
    departDate: "01-Jun-20",
    departTime: "0900",
    arriveTime: "1050",
    flightTime: "1.75",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "post":
      let filteredFlights = state.filter(
        (flight) => flight.id !== action.payload.id
      );
      action.payload.status = "complete";
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
