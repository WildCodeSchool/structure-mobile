import { Text } from "../components/Themed";
import Colors from "../constants/Colors";
import Style from "../style/Style";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Role, RootStackScreenProps, Ticket } from "../types";
import {
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import Projects from "../components/Project/Projects";
import Sizes from "../constants/Sizes";
import {
  GET_ME,
  GET_PROJECTS,
  GET_TICKETS,
} from "../apollo/queries";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import ProjectCard from "../components/Project/ProjectCard";
import { Project } from "../types";
import { UserInterfaceIdiom } from "expo-constants";
import { useGuardByRoles } from "../hooks/useGuardByRoles";
import TicketCard from "../components/Ticket/TicketCard";
import Tickets from "../components/Ticket/Tickets";

export default function DashboardScreen({
  navigation,
}: RootStackScreenProps<"Dashboard">) {
  const colorScheme = useColorScheme();
  const { isAllowed, authedUser } = useGuardByRoles([Role.ADMIN, Role.USER]);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  /* const ticketsList = () => {
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
  }; */

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
          <Projects/>
        </View>
        <View>
          <Text style={Style.h2}>Mes tickets</Text>
          <Tickets/>
        </View>
        <View />
      </ScrollView>
    </SafeAreaView>
  );
}
