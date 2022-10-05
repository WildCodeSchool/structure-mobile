import { Text, View } from "react-native";
import Register from "../components/Auth/Register";

export default function RegisterScreen() {
  return (
    <View>
      <Text>Créer un nouveau compte</Text>
      <Register />
    </View>
  );
}
