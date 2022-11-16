import { Text, View } from "react-native";
import Login from "../components/Auth/Login";

export default function LoginScreen() {
  return (
    <View>
      <Text>Connexion</Text>
      <Login />
    </View>
  );
}