import { StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import Fonts from "../constants/Fonts";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  //display
  flex: { display: "flex" },
  alignCenter: { justifyContent: "center" },
  flexRowNoWrap: { display: "flex", flexDirection: "row", flexWrap: "nowrap" },
  flexColumn: { display: "flex", flexDirection: "column", flexWrap: "wrap" },
  flexColumnNoWrap: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  //text
  h1: { fontFamily: Fonts.MontserratBold, fontSize: Sizes.fontH1 },
  h2: { fontFamily: Fonts.RobotoBold, fontSize: Sizes.fontH2 },
  h3: { fontFamily: Fonts.RobotoBold, fontSize: Sizes.fontH3 },
  text: { fontFamily: Fonts.RobotoLight, fontSize: 12 },
});
