export default function roundDate({ date, moment }) {
  switch (moment) {
    case "past":
      date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds
      return date;

    case "future":
      date.setHours(date.getHours() + 1);
      date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds
      return date;

    default:
      return date;
  }
}
