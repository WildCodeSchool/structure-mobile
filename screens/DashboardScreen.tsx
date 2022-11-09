import { Text, View } from "../components/Themed";

import Style from "../style/Style";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DashboardScreen() {
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
    <View>
      <Text style={Style.h1}>Bonjour {name}</Text>
      <View />
    </View>
  );
}
