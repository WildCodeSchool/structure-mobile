import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Ticket } from "../../types";

const fakeTicket = {
  //id: ,
  title: "Réflexion navigation",
  description: "Faire la liste des items présents dans la navbar",
  status: "En cours",
  priority: "Haute",
  time_estimation: "30min",
  //files: File[];
  createdAt: 22122021,
  //updatedAt: ,
  user_author: "Geoffrey",
  user_assign: "Nicolas",
  //project: Project;
  //project_id: number;
  //comments: Comment[];
  //labels: Label[];
};

export default function TicketDetailScreen(item: Ticket) {
  return (
    <View>
      <Text>Réflexion navigation</Text>
      <Text>Temps estimé : 30min</Text>
      <Text>Faire la liste des items présents dans la navbar</Text>
      <View>
        <Text>Geoffrey</Text>
        <Text>Geoffrey</Text>
        <Text>22-09-2022</Text>
        <Text>Pris en charge par : Nicolas</Text>
      </View>
      <Text>FlatList des commentaires</Text>
    </View>
    // <View style={styles.container}>
    //   <Text style={styles.title}>{item.title}</Text>
    //   <Text>Temps estimé : 30min</Text>
    //   <Text>{item.description}</Text>
    //   <View>
    //     <Text>{item.user_author}</Text>
    //     <Text>Geoffrey</Text>
    //     <Text>{item.createdAt}</Text>
    //     <Text>22-09-2022</Text>
    //     <Text>Pris en charge par : Nicolas</Text>
    //   </View>
    //   <View>//FlatList des commentaires</View>
    // </View>
  );
}
