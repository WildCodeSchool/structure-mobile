import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GET_PROJECTS } from "../../apollo/queries";
import { useQuery } from "@apollo/client";

export default function CreateProject() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un nouveau projet</Text>
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
});
