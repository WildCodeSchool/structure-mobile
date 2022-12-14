import Projects from "../../components/Project/Projects";
import { Text, View } from "../../components/Themed";
import { useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import Style from "../../style/Style";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { GET_ME, GET_PROJECTS } from "../../apollo/queries";
import ProjectCard from "../../components/Project/ProjectCard";
import { Project } from "../../types";
import Sizes from "../../constants/Sizes";
import { AntDesign } from "@expo/vector-icons";

export default function ProjectsScreen() {
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
  }, []);

  const projectList = () => {
    if (error)
      return (
        <View>
          <Text>Erreur lors du chargement des projets...</Text>
        </View>
      );
    if (projects.length === 0)
      return <Text>Vous n'avez pas de projet pour le moment.</Text>;
    else
      return (
        <FlatList
          data={projects}
          keyExtractor={(item) => item.id.toString()}
          refreshing={refreshing}
          onRefresh={() => refetch()}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Project_details", {
                  projectId: item.id,
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
  };

  return (
    <View
      style={[
        Style.flexColumnNoWrap,
        {
          padding: Sizes.full,
          paddingTop: Sizes.full,
          flex: 1,
        },
      ]}
    >
      <Text style={Style.h2}>Mes projets</Text>
      {!loading ? (
        projectList()
      ) : (
        <ActivityIndicator size="large" color={Colors.green} />
      )}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Create_project")}>
          <AntDesign
            name="plussquare"
            size={50}
            color="#0D9488"
            style={{ position: "absolute", top: -40, right: 10, zIndex: 4 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
