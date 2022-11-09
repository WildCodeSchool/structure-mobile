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
});

export default function ProjectCard({ title, subject, createdAt }) {
  return (
    <View style={styles.project}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.projectTitle}>{subject}</Text>
      <Text style={styles.projectDescription}>{createdAt}</Text>
    </View>
  );
}
