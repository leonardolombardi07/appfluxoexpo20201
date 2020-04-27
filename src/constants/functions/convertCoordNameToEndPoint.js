export default function convertCoordNameToEndPoint(coord_name) {
  switch (coord_name) {
    case "HOME":
      return "/fluxo/";
    case "CCE":
      return "/coordenacoes/1/";
    case "CEL":
      return "/coordenacoes/2/";
    case "PRO":
      return "/coordenacoes/3/";
    case "MNP":
      return "/coordenacoes/4/";
    case "QAB":
      return "/coordenacoes/5/";
    default:
      return "";
  }
}
