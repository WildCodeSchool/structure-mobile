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
  //container
  container: {
    marginVertical: Sizes.full,
    marginHorizontal: Sizes.semi,
  },

  cardContainer: {
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: Sizes.semi,
    padding: Sizes.semi,
  },
  header: {
    fontSize: Sizes.fontH2,
    fontFamily: Fonts.montserratBold,
  },
  //text
  h1: {
    fontFamily: Fonts.montserratBold,
    fontSize: Sizes.fontH1,
    marginBottom: Sizes.semi,
  },
  h2: {
    fontFamily: Fonts.robotoBold,
    fontSize: Sizes.fontH2,
    marginBottom: Sizes.semi,
  },
  h3: { fontFamily: Fonts.robotoBold, fontSize: Sizes.fontH3 },
  text: { fontFamily: Fonts.robotoLight, fontSize: 12 },

  //buttons
  buttonPrimary: {
    fontFamily: Fonts.robotoMedium,
    fontSize: Sizes.p,
    backgroundColor: Colors.blue,
    borderRadius: Sizes.borderRadius,
    color: Colors.white,
    padding: Sizes.full,
  },
});
