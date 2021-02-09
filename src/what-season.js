module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  const seasons = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "fall",
    "fall",
    "fall",
    "winter"
  ];

  if (date.getMonth !== Date.prototype.getMonth) {
    throw new Error();
  }

  return seasons[date.getMonth()];
};
