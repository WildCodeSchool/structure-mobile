import { useLazyQuery } from "@apollo/client";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { GET_PROJECT } from "../../apollo/queries";
import {
  ProjectData,
  RootStackParamList,
  RootStackScreenProps,
} from "../../types";

export default function ProjectDetails() {
  const route = useRoute();
  const projectId = route.params != undefined ? route.params?.projectId : null;

  const [getProject, { data }] = useLazyQuery<ProjectData>(GET_PROJECT, {
    variables: {
      where: {
        id: Number(projectId),
      },
    },
  });

  useEffect(() => {
    getProject();
  }, []);

  return (
    <View>
      <Text>{data?.project.title}</Text>
      <Text>Voici la page de détails du projet </Text>
    </View>
  );
}
