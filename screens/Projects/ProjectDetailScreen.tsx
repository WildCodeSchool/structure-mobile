import React from "react";
import {
  FlatList,
  ActivityIndicator,
  ListRenderItem,
} from "react-native";
import Style from "../../style/Style";
import { Text, View } from "../../components/Themed";
import { Project, Ticket } from "../../types";
import TicketCard from "../../components/Ticket/TicketCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

const project = {
  //id: "",
  title: "Structure",
  subject: "Création d'un outils de création et gestion de tickets",

  // updatedAt: "",
  author: "Nicolas",
  tickets: {
    ticket: {
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
 
  return (
    <SafeAreaView>
      <View style={[Style.container]}>
        <Text style={Style.h2}>{project.title}</Text>
        <Text style={Style.text}>{project.subject}</Text>
        <View>
          <Text>Geoffrey M.</Text>
          <Text>project.createdAt</Text>
        </View>
       
      </View>
    </SafeAreaView>
  );
}

