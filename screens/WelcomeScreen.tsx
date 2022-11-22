import { Text } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import Style from "../style/Style";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import LogoSvg from "../components/svg/logo";
import { Button } from "../components/Button";
import { View } from "react-native";
import Sizes from "../constants/Sizes";

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
          
          Style.container,
          {
          
            justifyContent: "center",
            backgroundColor: Colors.green,
          },
        ]}
      >
        <View  style={[
          Style.container,{backgroundColor: Colors[colorScheme].backgroundCard, padding: Sizes.semi}
        ]}>
          <View style={[Style.alignCenter]}>
          <LogoSvg />
          </View>
          <Text style={[Style.h1,]}>
            Le ticketing pour gagner en produtivité
          </Text>
        </View>
        <View style={[Style.flexColumnNoWrap, { backgroundColor: Colors[colorScheme].tint, flex: 1 }]}>
        <Button type="primary" onPress={() => navigation.navigate("Login")}>S'inscrire</Button>
       <Button type="secondary" onPress={() => navigation.navigate("Register")}>S'enregistrer</Button>
  
        </View>
      </View>
    </SafeAreaView>
  );
}
