import React from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ListRenderItem,
} from "react-native";
import { Text, View } from "../../components/Themed";
import { Project, Ticket } from "../../types";
import TicketCard from "../../components/Ticket/TicketCard";
import { SafeAreaView } from "react-native-safe-area-context";

const project = {
  //id: "",
  title: "Structure",
  subject: "Création d'un outils de création et gestion de tickets",

  // updatedAt: "",
  author: "Nicolas",
  tickets: {
    ticket1: {
      title: "Réflexion navigation",
      description: "Faire la liste des items présents dans la navbar",
      status: "En cours",
      priority: "Haute",
      //time_estimation: "30min",
      //files: File[];
      createdAt: 22122021,
      //updatedAt: ,
      user_author: "Geoffrey",
      user_assign: "Nicolas",
    },
  },
};

export default function ProjectDetailScreen(project: Project) {
  const renderTicket: ListRenderItem<Ticket> = ({}) => {
    return <TicketCard key={ticket.id} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{project.title}</Text>
        <Text>{project.subject}</Text>
        <View>
          <Text>Geoffrey M.</Text>
          <Text>project.createdAt</Text>
        </View>
        {project.tickets ? (
          <FlatList data={project.tickets} renderItem={renderTicket} />
        ) : (
          <ActivityIndicator size="large" color="black" />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
