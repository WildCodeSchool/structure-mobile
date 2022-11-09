import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GET_PROJECTS } from "../../apollo/queries";
import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});


export default function Projects() {
  const { data, loading, error } = useQuery(GET_PROJECTS);
  if (loading)
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Oups, une erreur est survenue...</Text>
      </View>
    );
  
    //console.log(data);
  
  return (
    <View style={styles.container}>
      {data.projects.map((project: Project) => (
        <ProjectCard key={project.id} title={project.title} subject={project.subject} createdAt={project.createdAt}/>
      ))}
    </View>
  );
}
