import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import Style from "../../style/Style";
import formatDate from "../../utils/formatDate";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Project, Ticket } from "../../types";
import Sizes from "../../constants/Sizes";

export default function ProjectCard(project: Project, ticket: Ticket) {
/*   const numberTicket = project.tickets?.filter(
    (ticket) => ticket.status
  ).length; */
  let numberOfTickets = 0;
  for(let i = 0; i < project.tickets.length; i++) {
    numberOfTickets += 1;
  }

  const tickets = numberOfTickets === 0 || numberOfTickets === 1 ? "Ticket" : `Tickets`;
  
  return (
    <View
      style={[
        Style.cardContainer,
        Style.flex,
        { justifyContent: "space-around" },
      ]}
    >
      <View
        style={[
          Style.flexRowNoWrap,
          { justifyContent: "space-between", alignItems: "center" },
        ]}
      >
        <Text style={[Style.text, { color: Colors.blueGray }]}>{tickets}: {numberOfTickets}</Text>
        <AntDesign name="arrowright" size={24} color={Colors.gray} />
      </View>
      <Text style={[Style.h3, { color: Colors.blue, marginBottom: 5 }]}>
        {project.title}
      </Text>
      <Text
        style={[Style.text, { color: Colors.blue, marginBottom: 10 }]}
        numberOfLines={2}
      >
        {project.subject}
      </Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={[Style.flexRowNoWrap, { alignItems: "center" }]}>
        <EvilIcons name="clock" size={20} color={Colors.blueGray} />
        <Text
          style={[Style.text, { color: Colors.blueGray, paddingLeft: 5 }]}
          numberOfLines={1}
        >
          {formatDate(project.createdAt)}
        </Text>
      </View>
    </View>
  );
}
