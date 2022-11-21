const green = "#0D9488";
const white = "#FFFFFF";
const blue = "#164E63";
const blueGray50 = "#F8FAFC";
const gray = "#94A3B8";
const lightGray = "#CBD5E1";
const darkGray = "#212121";
const tintColorDark = "#fff";
const black = "#121212";

export default {
  green: green,
  white: white,
  blue: blue,
  blueGrayLight: blueGray50,
  gray: gray,

  light: {
    text: blue,
    background: blueGray50,
    backgroundCard: white,
    tint: green,
    tabIconDefault: gray,
    tabIconSelected: green,
    button: "164E63",
    buttonText: white,
  },
  dark: {
    text: "#fff",
    background: "#000",
    backgroundCard: darkGray,
    tint: green,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    backgroundCard: darkGray,
  },
};
