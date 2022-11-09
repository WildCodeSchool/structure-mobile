import { Image, Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import Style from "../style/Style";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useColorScheme from "../hooks/useColorScheme";

//S'IDENTIFIER
export default function WelcomeScreen({
  navigation,
}: RootStackScreenProps<"Welcome">) {
  // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView>
      <View
        style={[
          Style.flexColumnNoWrap,
          {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "0D9488",
          },
        ]}
      >
        <Text style={[Style.h1]}>Bienvenue !</Text>
        <Image
          resizeMode="contain"
          source={require("../assets/images/logo.png")}
        />
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
