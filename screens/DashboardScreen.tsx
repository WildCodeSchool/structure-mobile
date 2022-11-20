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
      <View>
        <Text style={Style.h1}>Bonjour Username,</Text>
        <Text>Voici tes projets en cours...</Text>
      </View>
      <View>
        <Text>Mes projets</Text>
        <TouchableOpacity
          style={Style.buttonPrimary}
          onPress={() => navigation.navigate("Project_details")}
        >
          <Text>Détail du projet</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Mes tickets</Text>

        <TouchableOpacity
          style={Style.buttonPrimary}
          onPress={() => navigation.navigate("Ticket_details")}
        >
          <Text>Détail du ticket</Text>
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
}
