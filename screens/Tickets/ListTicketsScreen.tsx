import { StyleSheet, Button, ActivityIndicator, FlatList, ListRenderItem } from "react-native";
import TicketCard from "../../components/Ticket/TicketCard";
import { Text, View } from "../../components/Themed";
import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import Style from "../../style/Style";
import React, { useEffect, useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ticket } from "../../types";

export default function TicketsScreen() {
  const navigation = useNavigation();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, error } = useQuery(GET_TICKETS);

  const renderTicket: ListRenderItem<Ticket> = ({item}) => {
    return  <TicketCard
      id={item.id}
      title={item.title}
      status={item.status}
      createdAt={item.createdAt}
     />;
  };

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
      setTickets(data.projects);
    }
  }, [loading]);

  if (loading)
    return (
      <View style={[Style.container, Style.justifyCenter, Style.alignCenter ]}>
           <ActivityIndicator size="large" color={Colors.green} />
      </View>
    );
  if (error)
    return (
      <View style={[Style.container, Style.justifyCenter, Style.alignCenter ]}>
        <Text>Erreur lors du chargement des tickets...</Text>
      </View>
    );
  if (tickets.length === 0)
    return <Text >Vous n'avez pas de ticket pour le moment !</Text>;

  
  return (
    <View>
      <FlatList
        data={tickets}
        keyExtractor={(item, index) => item.id.toString()}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        renderItem={renderTicket}
      />
      <Button
        title="Nouveau ticket"
        onPress={() => navigation.navigate("Create_ticket")}
      />
    </View>
  );
}
   
