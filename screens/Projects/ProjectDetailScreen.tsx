import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import ProjectDetails from "../../components/Project/ProjectDetails";

export default function ProjectDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails du projet</Text>
      <ProjectDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
