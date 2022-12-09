import { Text, Button } from "../components/Themed";
import Colors from "../constants/Colors";
import Style from "../style/Style";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackScreenProps } from "../types";
import { TouchableOpacity, View } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import Projects from "../components/Project/Projects";
import Sizes from "../constants/Sizes";
import { GET_ME, GET_PROJECT } from "../apollo/queries";

export default function DashboardScreen({
  navigation,
}: RootStackScreenProps<"Dashboard">) {
  const colorScheme = useColorScheme();
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
    <View
      style={[
        Style.flexColumnNoWrap,
        { padding: Sizes.semi, paddingTop: Sizes.full },
      ]}
    >
      <View>
        <Text style={Style.h1}>Bonjour Username,</Text>
        <Text
          style={[Style.text, { fontSize: Sizes.fontH3, marginBottom: 15 }]}
        >
          Voici tes projets en cours...
        </Text>
      </View>
      <View style={[{ marginVertical: 25 }]}>
        <Text style={Style.h2}>Mes projets</Text>
        <Projects />
      </View>
      <View>
        <Text style={Style.h2}>Mes tickets</Text>

        <TouchableOpacity
          style={[
            Style.cardContainer,
            { backgroundColor: Colors[colorScheme].backgroundCard },
          ]}
          onPress={() => navigation.navigate("Ticket_details")}
        >
          <Text>Détail du ticket</Text>
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
}
