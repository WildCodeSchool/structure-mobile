import { Text, Button } from "../components/Themed";
import Colors from "../constants/Colors";
import Style from "../style/Style";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Role, RootStackScreenProps, Ticket, User } from "../types";
import {
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
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
import TicketCard from "../components/Ticket/TicketCard";
import { get } from "react-hook-form";

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
    handleRefresh();
  }, []);

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
        <SafeAreaView>
          <ScrollView horizontal>
            {projects.map((project, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("Project_details", {
                    projectId: project.id,
                  })
                }
              >
                <ProjectCard
                  id={project.id}
                  tickets={project.tickets}
                  title={project.title}
                  subject={project.subject}
                  createdAt={project.createdAt}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SafeAreaView>
      );
  };

  const ticketsList = () => {
    if (errorTickets)
      return (
        <View>
          <Text>Erreur lors du chargement des tickets...</Text>
        </View>
      );
    if (dataTickets.length === 0)
      return <Text>Vous n'avez pas de ticket pour le moment !</Text>;
    else
      return (
        <ScrollView>
          {tickets.map((ticket, index) => (
            <TicketCard
              key={index}
              id={ticket.id}
              title={ticket.title}
              createdAt={ticket.createdAt}
              priority={ticket.priority}
              project={ticket.project}
            />
          ))}
        </ScrollView>
      );
  };

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        nestedScrollEnabled={true}
        style={[
          Style.flexColumnNoWrap,
          {
            padding: Sizes.semi,
            paddingTop: Sizes.full,
            flexGrow: 1,
          },
        ]}
      >
        <View>
          <Text style={Style.h1}>Bonjour {authedUser?.firstname} ,</Text>
          <Text
            style={[Style.text, { fontSize: Sizes.fontH3, marginBottom: 15 }]}
          >
            Voici tes tâches en cours...
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
          {!loadingTickets ? (
            ticketsList()
          ) : (
            <View>
              <ActivityIndicator size="large" color={Colors.green} />
            </View>
          )}
        </View>
        <View />
      </ScrollView>
    </SafeAreaView>
  );
}
