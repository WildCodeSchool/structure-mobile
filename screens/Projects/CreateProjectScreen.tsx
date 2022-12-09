import React from "react";
import style from "../../style/Style";
import CreateProject from "../../components/Project/CreateProject";
import { Text, View } from "../../components/Themed";
import Style from "../../style/Style";
import Sizes from "../../constants/Sizes";
import Colors from "../../constants/Colors";

export default function CreateProjectScreen() {
  return (
    <View
      style={[
        Style.container,
        Style.justifyCenter,
        {
          marginBottom: Sizes.semi,
          marginHorizontal: Sizes.semi,
          borderColor: Colors.blueGrayLight,
          borderWidth: 1,
        },
      ]}
    >
      <Text style={[Style.h2, { textAlign: "center" }]}>Créer un projet</Text>
      <CreateProject />
    </View>
  );
}
