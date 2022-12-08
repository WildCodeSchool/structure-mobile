import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GET_ME, GET_PROJECTS } from "../../apollo/queries";
import { useQuery } from "@apollo/client";
import Style from "../../style/Style";
import navigation from "../../navigation";
import { useNavigation } from "@react-navigation/native";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../constants/Colors";

export default function Projects() {
  const navigation = useNavigation();

  const [projects, setProjects] = useState<Project[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_PROJECTS, {
    onCompleted: (data) => {
      setProjects(data.projects);
    },
  });

  const {
    data: getUser,
    loading: loadingGetUser,
    error: errorGetUser,
  } = useQuery(GET_ME);

  const handleRefresh = async () => {
    refetch();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  useEffect(() => {
    if (!loading) {
      setProjects(data.projects);
    }
  }, [loading]);

  if (loading)
    return (
      <View>
        <ActivityIndicator size="large" color={Colors.green} />
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Erreur lors du chargement des projets...</Text>
      </View>
    );
  if (projects.length === 0)
    return <Text>Vous n'avez pas de projet pour l'isntant !</Text>;

  return (
    <FlatList
      data={projects}
      keyExtractor={(item) => item.id.toString()}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Project_details", {
              projectId: item.id,
              title: item.title,
              subject: item.subject,
              code: item.code,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt,
              tickets: item.tickets,
              members: item.members,
              user_author_project: item.user_author_project,
              user_author_project_id: item.user_author_project_id,
            })
          }
        >
          <ProjectCard
            id={item.id}
            title={item.title}
            subject={item.subject}
            createdAt={item.createdAt}
          />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
