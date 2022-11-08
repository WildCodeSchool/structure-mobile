import { StyleSheet } from "react-native";
import CreateProject from "../../components/Project/CreateProject";
import { Text, View } from "../../components/Themed";

export default function CreateProjectScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nouveau projet</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <CreateProject/>
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
