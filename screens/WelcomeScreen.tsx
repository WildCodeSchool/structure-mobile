import { Image, Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import Style from "../style/Style";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import LogoSvg from "../components/svg/logo";

//S'IDENTIFIER
export default function WelcomeScreen({
  navigation,
}: RootStackScreenProps<"Welcome">) {
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[{ backgroundColor: Colors[colorScheme].tint, flex: 1 }]}
    >
      <View
        style={[
          Style.flexColumnNoWrap,
          Style.container,
          {
            alignItems: "stretch",
            justifyContent: "space-around",
            backgroundColor: Colors.green,
          },
        ]}
      >
        <View>
          <LogoSvg />
          <Text style={[Style.h1]}>
            Le ticketing pour gagner en produtivité
          </Text>
        </View>
        <View style={[Style.flexColumnNoWrap]}>
          <Button
            //style={styles.buttonPrimary}
            title="Se connecter"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            //style={styles.button}
            title="S'inscrire"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
