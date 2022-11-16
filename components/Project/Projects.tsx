import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  FlatList,
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

export default function Projects() {
  const navigation = useNavigation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, error } = useQuery(GET_PROJECTS);
  const {
    data: getUser,
    loading: loadingGetUser,
    error: errorGetUser,
  } = useQuery(GET_ME);

  const handleRefresh = async () => {
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
        <Text>Chargement...</Text>
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={projects}
        keyExtractor={(item, index) => item.id.toString()}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        renderItem={({ item }) => (
          <ProjectCard
            id={item.id}
            title={item.title}
            subject={item.subject}
            createdAt={item.createdAt}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
