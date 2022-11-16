import { StyleSheet, Button } from "react-native";
import Projects from "../../components/Project/Projects";
import { Text, View } from "../../components/Themed";
import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Style from "../../style/Style";

export default function ProjectsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes projets</Text>
      <Projects />
      <View style={styles.buttonAddProject}>
      <Button  title="+" onPress={() => navigation.navigate("Create_project")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonAddProject:{
    flex: 1,
    justifyContent: "flex-end",
  }
});
