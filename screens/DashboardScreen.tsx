import { Text, Button } from "../components/Themed";
import Colors from "../constants/Colors";
import Style from "../style/Style";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Role, RootStackScreenProps, Ticket } from "../types";
import { TouchableOpacity, View } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import Projects from "../components/Project/Projects";
import Sizes from "../constants/Sizes";
import { GET_ME, GET_PROJECTS, GET_TICKETS } from "../apollo/queries";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import ProjectCard from "../components/Project/ProjectCard";
import { Project } from "../types";
import { UserInterfaceIdiom } from "expo-constants";
import { useGuardByRoles } from "../hooks/useGuardByRoles";

export default function DashboardScreen({
  navigation,
}: RootStackScreenProps<"Dashboard">) {
  const colorScheme = useColorScheme();
  const { isAllowed, authedUser } = useGuardByRoles([Role.ADMIN, Role.USER]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_PROJECTS, {
    onCompleted: (data) => {
      setProjects(data.projects);
    },
  });

  const {
    data: dataTickets,
    loading: loadingTickets,
    error: errorTickets,
    refetch: refetchTickets,
  } = useQuery(GET_TICKETS, {
    onCompleted: (data) => {
      setTickets(data.tickets);
    },
  });

  const {
    data: getUser,
    loading: loadingGetUser,
    error: errorGetUser,
  } = useQuery(GET_ME);

  const handleRefresh = async () => {
    refetch();
    refetchTickets();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  useEffect(() => {
    if (!loading && !loadingTickets) {
      setProjects(data.projects, dataTickets.tickets);
    }
  }, [loading, loadingTickets]);

  const projectsList = () => {
    if (error)
      return (
        <View>
          <Text>Erreur lors du chargement des projets...</Text>
        </View>
      );
    if (projects.length === 0)
      return <Text>Vous n'avez pas de projet pour le moment !</Text>;
    else
      return (
        <FlatList
          data={projects}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          refreshing={refreshing}
          onRefresh={handleRefresh}
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
  };

  return (
    <View
      style={[
        Style.flexColumnNoWrap,
        {
          padding: Sizes.semi,
          paddingTop: Sizes.full,
          flex: 1,
        },
      ]}
    >
      <View>
        <Text style={Style.h1}>Bonjour {authedUser?.firstname} ,</Text>
        <Text
          style={[Style.text, { fontSize: Sizes.fontH3, marginBottom: 15 }]}
        >
          Voici tes taches en cours...
        </Text>
      </View>
      <View style={[{ marginVertical: 25 }]}>
        <Text style={Style.h2}>Mes projets</Text>

        {!loading ? (
          projectsList()
        ) : (
          <View>
            <ActivityIndicator size="large" color={Colors.green} />
          </View>
        )}
      </View>
      <View>
        <Text style={Style.h2}>Mes tickets</Text>

        <TouchableOpacity
          style={[
            Style.ticketContainer,
            { backgroundColor: Colors[colorScheme].backgroundCard },
          ]}
          onPress={() => navigation.navigate("Ticket_details")}
        >
          <Text>Détail du ticket</Text>
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
}
