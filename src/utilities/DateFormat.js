//format for ZULU date and not broswer date:
export default function DateFormat(pDate) {
  const ye = new Intl.DateTimeFormat("en", {
    year: "2-digit",
    timeZone: "UTC",
  }).format(pDate);
  const mo = new Intl.DateTimeFormat("en", {
    month: "short",
    timeZone: "UTC",
  }).format(pDate);
  const da = new Intl.DateTimeFormat("en", {
    day: "2-digit",
    timeZone: "UTC",
  }).format(pDate);

  return `${da}-${mo}-${ye}`;
}
