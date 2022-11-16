import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
  project: {
    borderWidth: 1,
    borderColor: "#0D9488",
    margin: 5,
  },
});

export default function ProjectCard({
  id,
  title,
  subject,
  createdAt,
  onPress,
}) {
  return (
    <View style={styles.project}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.projectTitle}>{subject}</Text>
      <Text style={styles.projectDescription}>{createdAt}</Text>
    </View>
  );
}
