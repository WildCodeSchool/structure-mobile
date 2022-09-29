import { StyleSheet, Image } from "react-native";
import logo from "../assets/images/logo.svg";

import EditScreenInfo from "../components/EditScreenInfo";
import SignUp from "../components/SignUp";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

//S'IDENTIFIER
export default function SignInScreen({
  navigation,
}: RootTabScreenProps<"SignIn">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Se connecter</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <SignUp /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  logo: {
    width: 100,
    height: 50,
    maxWidth: 300,
  },
});
