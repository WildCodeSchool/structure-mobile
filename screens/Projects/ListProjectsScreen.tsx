import { StyleSheet } from "react-native";
import Projects from "../../components/Project/Projects";
import { Text, View, Button } from "../../components/Themed";
import navigation from "../../navigation";
import { gql, useQuery } from '@apollo/client';
import { useNavigation } from "@react-navigation/native";


export default function ProjectsScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes projets</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Projects/>
      <Button 
      title="+" 
      onPress={() => navigation.navigate('Create_project')}/>
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
