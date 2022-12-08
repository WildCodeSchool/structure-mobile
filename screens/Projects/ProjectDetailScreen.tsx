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
import { useNavigation, useRoute } from "@react-navigation/native";


export default function ProjectDetailScreen() {
  const route = useRoute()
  const { projectId, title, subject, code, createdAt, updatedAt, tickets, members, user_author_project, user_author_project_id  } = route.params

  return (
    <SafeAreaView>
      <View style={[Style.container]}>
        <View>
          <Text>Projet ID:{projectId}</Text>
          <Text>Titre du projet: {title}</Text>
          <Text>Sujet: {subject}</Text>
          <Text>Code: {code}</Text>
          <Text>Créé le: {createdAt}</Text>
          <Text>MAJ le: {updatedAt}</Text>
          <Text>Tickets: {tickets}</Text>
          <Text>Concernés: {members}</Text>
          <Text>Auteur: {user_author_project}</Text>
        </View>
       
      </View>
    </SafeAreaView>
  );
}

