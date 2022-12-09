import Projects from "../../components/Project/Projects";
import { Text, View } from "../../components/Themed";
import { gql, useQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Style from "../../style/Style";
import { Button } from "../../components/Button";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function ProjectsScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Projects />
      <View>
        <Button
          type="primary"
          onPress={() => navigation.navigate("Create_project")}
        >
          +
        </Button>
      </View>
    </View>
  );
}
