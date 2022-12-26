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
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { GET_ME, GET_PROJECTS, GET_TICKETS } from "../../apollo/queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import Style from "../../style/Style";
import navigation from "../../navigation";
import { useNavigation } from "@react-navigation/native";
import { Ticket } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../constants/Colors";

import { MeData } from "../../types";
import TicketCard from "./TicketCard";

export default function Projects() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const [Get_user_tickets, { data, loading, error, refetch }] =
    useLazyQuery(GET_TICKETS);
  const dataTickets = data?.tickets ?? [];

  const {
    data: getUser,
    loading: loadingGetUser,
    error: errorGetUser,
  } = useQuery<MeData>(GET_ME, {
    onCompleted: (data) => {
      //console.log(data.me)
      Get_user_tickets();
    },
  });

  const handleRefresh = async () => {
    refetch();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  useEffect(() => {
    handleRefresh();
    console.log("tickets", dataTickets);
    setTickets(tickets);
  }, []);

  if (loading)
    return (
      <View>
        <ActivityIndicator size="large" color={Colors.green} />
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Erreur lors du chargement des tickets...</Text>
      </View>
    );
  if (dataTickets.length === 0)
    return <Text>Vous n'avez pas de tickets pour l'instant !</Text>;
 
  return (
    <ScrollView>
      {dataTickets.map((ticket: Ticket) => (
        <TicketCard
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          createdAt={ticket.createdAt}
          status={ticket.status}
          project={ticket.project}
          priority={ticket.priority}
        />
      ))}
    </ScrollView>
  );
}
