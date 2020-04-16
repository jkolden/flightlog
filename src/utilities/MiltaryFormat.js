const zeroPad = (num, places) => String(num).padStart(places, "0");

const formatMilitaryTime = (localDate) => {
  if (localDate) {
    let hours = localDate.getUTCHours();
    let minutes = localDate.getUTCMinutes();
    return `${zeroPad(hours, 2)}${zeroPad(minutes, 2)}`;
  }
  return "";
};

export default formatMilitaryTime;
