import { StyleSheet, Button } from "react-native";
import Projects from "../../components/Project/Projects";
import { Text, View } from "../../components/Themed";
import navigation from "../../navigation";
import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";

export default function TicketsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes tickets</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Button
        title="Nouveau ticket"
        onPress={() => navigation.navigate("Create_ticket")}
      />
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
