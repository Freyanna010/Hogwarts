export const getAnimatedTypesClasses = (type: string) => {
  switch (type) {
    case "type":
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
