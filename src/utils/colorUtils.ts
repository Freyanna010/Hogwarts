export const getHouseColor = (house: string) => {
  switch (house) {
    case "Gryffindor":
      return "gryffindorColor";
    case "Slytherin":
      return "slytherinColor";
    case "Ravenclaw":
      return "ravenclawColor";
    case "Hufflepuff":
      return "hufflepuffColor";
    default:
      return "";
  }
};
