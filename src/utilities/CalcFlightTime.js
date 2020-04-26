const CalcFlightTime = (pOut, pIn) => {
  let flightTime = `${(pIn - pOut) / 3600000} + ${(
    ((pIn - pOut) % 3600000) /
    60000
  ).toFixed(0)}`;
  return flightTime;
};

export default CalcFlightTime;
