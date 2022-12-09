import { StyleSheet, Dimensions, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import Fonts from "../constants/Fonts";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  //display
  flex: { display: "flex" },
  alignCenter: { display: "flex", alignItems: "center" },
  justifyCenter: { display: "flex", justifyContent: "center" },
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
    marginVertical: 40,
    borderRadius: Sizes.borderRadius,
    paddingHorizontal: Sizes.full,
    paddingVertical: Sizes.full,
  },

  cardContainer: {
    borderColor: Colors.green,
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderRadius: 5,
    padding: Sizes.semi,
    marginRight: Sizes.semi,
    width: width / 2.1 - Sizes.semi * 2,
    height: 150,
  },

  ticketContainer: {
    borderColor: Colors.green,
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderRadius: 5,
    padding: Sizes.semi,
    marginBottom: Sizes.semi,
    height: 60,
  },

  header: {
    fontSize: Sizes.fontH3,
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
  text: { fontFamily: Fonts.robotoLight, fontSize: 14 },
  errorText: {
    color: Colors.rose,
    fontFamily: Fonts.robotoLight,
    fontSize: Sizes.fontH4,
  },

  //buttons
  btnPrimary: {
    backgroundColor: Colors.green,
    borderColor: Colors.white,
    borderRadius: 2,
    borderWidth: 1,
    marginTop: Sizes.semi,
    paddingHorizontal: Sizes.semi,
  },

  btnSecondary: {
    backgroundColor: Colors.blue,
    borderRadius: 2,
    border: 1,
    marginTop: Sizes.semi,
    paddingHorizontal: Sizes.semi,
  },

  btnText: {
    fontFamily: Fonts.robotoMedium,
    fontSize: 20,
    textAlign: "center",
    marginVertical: Sizes.semi,
  },

  //form
  label: {
    fontFamily: Fonts.robotoMedium,
    fontSize: Sizes.fontH3,
    color: Colors.blue,
    marginTop: Sizes.semi,
  },

  input: {
    borderWidth: 2,
    borderColor: Colors.blueGray,
    padding: Sizes.semi,
    marginVertical: 5,
  },

  inputError: {
    borderWidth: 3,
    borderColor: Colors.rose,
    padding: Sizes.semi,
    marginVertical: 5,
  },
});
