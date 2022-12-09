import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import Style from "../../style/Style";
import formatDate from "../../utils/formatDate";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

export default function ProjectCard({ id, title, subject, createdAt }) {
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
        <Text style={[Style.text, { color: Colors.blueGray }]}>0 Tickets</Text>
        <AntDesign name="arrowright" size={24} color={Colors.gray} />
      </View>
      <Text style={[Style.h3, { color: Colors.blue }]}>{title}</Text>
      <Text style={[Style.text, { color: Colors.blueGray }]} numberOfLines={2}>
        {subject}
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
          {formatDate(createdAt)}
        </Text>
      </View>
    </View>
  );
}
