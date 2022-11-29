import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "../components/Auth/Login";
import HandSvg from "../components/svg/hand";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import Sizes from "../constants/Sizes";
import useColorScheme from "../hooks/useColorScheme";
import Style from "../style/Style";

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: Colors[colorScheme].tint,
          flex: 1,
          padding: Sizes.full,
        },
      ]}
    >
      <View style={[Style.alignCenter, { marginVertical: Sizes.full }]}>
        <Text
          style={[
            Style.h2,
            {
              fontFamily: Fonts.montserratBold,
              color: Colors.white,
              textAlign: "center",
            },
          ]}
        >
          Pour les habitués,
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
          C'est par ici!
        </Text>
        <HandSvg width={60} />
      </View>
      <View style={{ marginVertical: Sizes.full }}>
        <Login />
      </View>
    </SafeAreaView>
  );
}
