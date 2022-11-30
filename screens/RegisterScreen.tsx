import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Register from "../components/Auth/Register";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import Sizes from "../constants/Sizes";
import useColorScheme from "../hooks/useColorScheme";
import Style from "../style/Style";

export default function RegisterScreen() {
    const colorScheme = useColorScheme();
  return (
    <SafeAreaView
    style={[
      {
        backgroundColor: Colors[colorScheme].tint,
        flex: 1,
        paddingHorizontal: Sizes.semi,
        justifyContent: "center",
      },
    ]}
    >
      <ScrollView>
        <View style={[Style.alignCenter, { }]}>
          <Text
            style={[
              Style.h2,
              {
                fontFamily: Fonts.montserratBold,
                color: Colors.white,
                textAlign: "center",
                paddingTop: Sizes.full,
              },
            ]}
          >
            Créez votre compte, 
          </Text>
          <Text
            style={[
              Style.h2,
              {
                fontFamily: Fonts.robotoLight,
                color: Colors.white,
                textAlign: "center",
              },
            ]}
          >
            C'est gratuit!
          </Text>
        </View>
        <View style={{ marginBottom: Sizes.full }}>
        <Register />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
