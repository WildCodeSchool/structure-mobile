import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProjectDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Je suis un super projet avec plein de tickets !
      </Text>
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
    fontSize: 17,
    fontWeight: "500",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
