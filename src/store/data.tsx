export interface House {
  id: string;
  name: "Hufflepuff" | "Gryffindor" | "Slytherin" | "Ravenclaw";
  img: string;
}

export const houses: House[] = [
  {
    id: "902a6f61-38a9-4111-9bf9-1893d4002546",
    name: "Hufflepuff",
    img: "https://contentful.harrypotter.com/usf1vwtuqyxm/1GHlvnfWeIgrFMUdSmLiS5/4d5edf0b1f84866c5f20d96a53faf623/hufflepuff-crest-web-fact-file-images.jpg?q=75&fm=webp&w=600&h=416&fit=pad",
  },
  {
    id: "e8df76fa-ff7e-42c6-aa24-66205d48c323",
    name: "Gryffindor",
    img: "https://contentful.harrypotter.com/usf1vwtuqyxm/2FpHJYJFhT6aPMpIQ8COfE/33d81e3e99d4ec8c1273cfa76c979000/gryffindor-crest-web-fact-file-image.jpg?q=75&fm=webp&w=600&h=416&fit=pad",
  },
  {
    id: "e8df76fa-ff7e-42c6-aa24-66205d48c323",
    name: "Slytherin",
    img: "https://contentful.harrypotter.com/usf1vwtuqyxm/4HoZaEXbZFJDvu3c3KfaQW/d31cd135bd0c209c7da9ef48ad557311/slytherin-crest-web-fact-file-images.jpg?q=75&fm=webp&w=600&h=416&fit=pad",
  },
  {
    id: "136fb415-c190-47ce-a049-69e2c7f7ea84",
    name: "Ravenclaw",
    img: "https://contentful.harrypotter.com/usf1vwtuqyxm/p0d3jvLt7ndev0IPLLjBN/ed400804b0b89dfe58a965f592b12553/ravenclaw-crest-web-fact-file-image.jpg?q=75&fm=webp&w=600&h=416&fit=pad",
  },
];
