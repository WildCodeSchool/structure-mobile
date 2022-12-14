import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { Ticket } from "../../types";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import React from "react";
import Style from "../../style/Style";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import formatDate from "../../utils/formatDate";
import Sizes from "../../constants/Sizes";

export default function TicketCard(ticket: Ticket) {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity
      style={[
        Style.ticketContainer,
        Style.flex,
        {
          backgroundColor: Colors[colorScheme].backgroundCard,
          justifyContent: "space-around",
        },
      ]}
      onPress={() => navigation.navigate("Ticket_details")}
    >
      <View
        style={[
          Style.flexRowNoWrap,
          {
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: Sizes.semi / 2,
          },
        ]}
      >
        <Text style={Style.h3}>{ticket.title}</Text>
        <AntDesign name="arrowright" size={24} color={Colors.gray} />
      </View>
      <View
        style={[
          Style.flexRowNoWrap,
          {
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <View style={[Style.flexRowNoWrap, { alignItems: "center" }]}>
          <EvilIcons name="clock" size={20} color={Colors.blueGray} />
          <Text
            style={[Style.text, { color: Colors.blueGray, paddingLeft: 5 }]}
            numberOfLines={1}
          >
            {formatDate(ticket.createdAt)}
          </Text>
        </View>
        <Text style={Style.priority}>{ticket.priority}</Text>
      </View>
    </TouchableOpacity>
  );
}
