import { Text, View, Button } from "../components/Themed";
import Colors from "../constants/Colors";
import Style from "../style/Style";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackScreenProps } from "../types";
import { TouchableOpacity } from "react-native";

export default function DashboardScreen({
  navigation,
}: RootStackScreenProps<"Dashboard">) {
  const [name, setName] = useState("");
  const [userId, setuserId] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) setName(value);

        setName("");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={Style.flexColumnNoWrap}>
      <Text style={Style.h1}>Bonjour {name}</Text>

      <TouchableOpacity
        style={Style.buttonPrimary}
        onPress={() => navigation.navigate("All_projects")}
      >
        <Text>Mes projets</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Style.buttonPrimary}
        onPress={() => navigation.navigate("All_tickets")}
      >
        <Text>Mes tickets</Text>
      </TouchableOpacity>

      <View />
    </View>
  );
}
