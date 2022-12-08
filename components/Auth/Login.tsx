import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { InputGroup } from "../InputGroup";
import { Button } from "../Button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { LOGIN_QUERY } from "../../apollo/queries";
import { useLazyQuery, } from "@apollo/client";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  RootTabParamList,
  AuthContextType,
  User,
  ValidatorForm,
} from "../../types";
import Style from "../../style/Style";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import Fonts from "../../constants/Fonts";
import Sizes from "../../constants/Sizes";

export interface LoginFormData extends Pick<User, "email" | "password"> {}

type ValidatorLogin = ValidatorForm<keyof LoginFormData>;

export default function Login() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation<RootTabParamList>();
  const { setSignedIn } = useContext(AuthContext) as AuthContextType;
  const [queryLogin, { data, loading, error: ApolloError }] =
    useLazyQuery(LOGIN_QUERY);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  const validators: ValidatorLogin = {
    email: {
      required: {
        value: true,
        message: "L'email est requis",
      },
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: "Adresse email non valide",
      },
    },
    password: {
      required: {
        value: true,
        message: "Le mot de passe est requis",
      },
    },
  };

  const onSubmit: SubmitHandler<LoginFormData> = (payload) => {
    const setToken = async (token: string) => {
      try {
        await AsyncStorage.setItem("token", token);
      } catch (e) {
        console.log(e);
      }
    };

    queryLogin({
      variables: {
        data: payload,
      },
    })
      .then((data) => {
        if (data) {
          const token = data.data.login;
          setToken(token);
          setSignedIn(true);
          navigation.navigate("IsSignedIn");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View
      style={[
        Style.container,
        { backgroundColor: Colors[colorScheme].background },
      ]}
    >
      <InputGroup<LoginFormData>
        Controller={Controller}
        control={control}
        field="email"
        label="Email"
        validators={validators}
        errors={errors}
      />
      {errors.email && (
        <Text style={Style.errorText}>{errors.email?.message}</Text>
      )}

      <InputGroup<LoginFormData>
        Controller={Controller}
        control={control}
        field="password"
        label="Mot de passe"
        validators={validators}
        errors={errors}
      />
      {errors.password && (
        <Text style={Style.errorText}>{errors.password?.message}</Text>
      )}

      <Button onPress={handleSubmit(onSubmit)}>Connexion</Button>
    </View>
  );
}
