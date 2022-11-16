import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GET_ME, GET_PROJECTS } from "../../apollo/queries";
import { useQuery } from "@apollo/client";
import Style from "../../style/Style";
import navigation from "../../navigation";
import { useNavigation } from "@react-navigation/native";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Projects() {
  const navigation = useNavigation();
  const { data, loading, error } = useQuery(GET_PROJECTS);
  const {
    data: getUser,
    loading: loadingGetUser,
    error: errorGetUser,
  } = useQuery(GET_ME);

  /* const getUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserToken();
  }, []); */

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

  return (
    <View style={styles.container}>
      {data.projects.map((project: Project) => (
        <TouchableOpacity
          key={project.id}
          style={Style.buttonPrimary}
          onPress={() => navigation.navigate("Project_details")}
        >
          <ProjectCard
            title={project.title}
            subject={project.subject}
            createdAt={project.createdAt}
          />
        </TouchableOpacity>
      ))}
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
});