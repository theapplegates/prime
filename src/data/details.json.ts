export interface Template {
  link: string;
  title: string;
  location: string;
  date: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
};
const one: Template = {
  link: "#_",
  imageOne: "https://cdn.dribbble.com/users/61921/screenshots/6135745/brutal_4x.png?resize=1600x1200&vertical=center",
  imageTwo: "https://cdn.dribbble.com/userupload/5568536/file/original-e62d2e814ec4d8a1550b96dfef6bec97.png?resize=1504x1128",
  imageThree: "https://cdn.dribbble.com/users/391632/screenshots/6683796/dribbble_shot_01.46_4x.png?resize=1600x1200&vertical=center",
  title: "Banana",
  location: "Åland Islands, Finland",
  date: "13.02.2023",
};
const two: Template = {
link: "#_",
  imageOne: "#_",
  imageTwo: "#_",
  imageThree: "#_",
  title: "Relámpago",
  location: "Åland Islands, Finland",
  date: "10.02.2022",
};
const three: Template = {
link: "https://colorsandfonts.com",
  title: " Cacahuete",
  location: "Åland Islands, Finland",
  date: "10.02.2022",
};
export const bytitle = {
  one,
    two,
    three,
};
export const  details = Object.values(bytitle);
