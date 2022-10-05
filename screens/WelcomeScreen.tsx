import { StyleSheet, Image, Button } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

//S'IDENTIFIER
export default function WelcomeScreen({
  navigation,
}: RootStackScreenProps<"Welcome">) {
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue !</Text>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/images/logo.png")}
      />
      <View>
        <Button
          //style={styles.buttonPrimary}
          title="Se connecter"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          //style={styles.button}
          title="S'inscrire"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
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
    width: 300,
    height: 150,
    maxWidth: 300,
  },
  buttonPrimary: {
    backgroundColor: "0D9488",
    color: "white",
    padding: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "white",
    borderColor: "0D9488",
    color: "0D9488",
    padding: 20,
    borderRadius: 10,
  },
});
