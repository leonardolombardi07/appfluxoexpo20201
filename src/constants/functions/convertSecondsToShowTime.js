export default function convertSecondsToShowTime(seconds) {
  let dias, horas, minutos, segundos;
  let total = Math.floor(seconds);

  dias = Math.floor(total / 60 / 60 / 24);
  horas = Math.floor(total / 60 / 60) - dias * 24;
  minutos = Math.floor(total / 60) - horas * 60 - dias * 24 * 60;
  segundos = total - minutos * 60 - horas * 60 * 60 - dias * 24 * 60 * 60;

  if (dias != 0) {
    return dias + "D " + horas + "h" + minutos + "min" + segundos + "s";
  } else {
    return horas + "h" + minutos + "min" + segundos + "s";
  }
}
