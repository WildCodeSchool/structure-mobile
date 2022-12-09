import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { AuthContext } from "../context/AuthContext";
import { AuthContextType, RootStackParamList } from "../types";
import App from "../App";
import { client } from "../apollo/config";
import { Button } from "../components/Button";
import React from "react";
import navigation from "../navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const { setSignedIn } = useContext(AuthContext) as AuthContextType;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const signOut = async () => {
    //... setAuthData
    try {
      await AsyncStorage.removeItem("token");
      setSignedIn(false);
      client.resetStore();
    } catch (err) {
      console.log(err);
    }
    //Remove the data from Async Storage
    //to NOT be recovered in next session.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Text>Bla bla bla bla bla </Text>
      <Button type="secondary" onPress={() => navigation.navigate("Login")}>
        Déconnexion
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
