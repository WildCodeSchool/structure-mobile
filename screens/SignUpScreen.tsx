import { StyleSheet } from "react-native";
import SignUp from "../components/SignUp";

import { Text, View } from "../components/Themed";
//S'INSCRIRE
export default function SignUpcreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>S'inscrire</Text>
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
});
