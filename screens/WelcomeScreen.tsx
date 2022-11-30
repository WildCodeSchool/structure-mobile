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
import Fonts from "../constants/Fonts";
import RocketSvg from "../components/svg/rocket";

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
          {
            backgroundColor: Colors.green,
            marginHorizontal: Sizes.semi,
            flex: 1,
            justifyContent: "center",
          },
        ]}
      >
        <View
          style={[
            Style.container,
            {
              backgroundColor: Colors[colorScheme].backgroundCard,
            },
          ]}
        >
          <View style={[Style.alignCenter, Style.justifyCenter, ,]}>
            <LogoSvg
              width={250}
              style={{ transform: [{ rotate: "-10deg" }] }}
            />
          </View>
          <View
            style={[
              Style.alignCenter,
              Style.justifyCenter,
              Style.flexRowNoWrap,
            ]}
          >
            <Text
              style={[
                Style.h1,
                {
                  fontFamily: Fonts.robotoLight,
                },
              ]}
            >
              <Text style={{ fontFamily: Fonts.montserratBold }}>
                Le ticketing
              </Text>{" "}
              pour{"\n"}gagner en {"\n"}produtivité
            </Text>
            <RocketSvg width={50} />
          </View>
        </View>
        <View style={[Style.flexColumnNoWrap]}>
          <Button type="secondary" onPress={() => navigation.navigate("Login")}>
            Connexion
          </Button>
          <Button
            type="primary"
            onPress={() => navigation.navigate("Register")}
          >
            Inscription
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
