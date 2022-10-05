import * as React from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { InputGroup } from "../InputGroup";
import { Button } from "../Button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { LOGIN_MUTATION } from "../../apollo/queries";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { RootTabParamList, AuthContextType } from "../../types";

interface ILoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const navigation = useNavigation<RootTabParamList>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const [mutateLogin, { data, loading, error: ApolloError }] =
    useMutation(LOGIN_MUTATION);
  const { setSignedIn } = useContext(AuthContext) as AuthContextType;
  const onSubmit: SubmitHandler<ILoginFormData> = (payload) => {
    mutateLogin({
      variables: {
        data: payload,
      },
    })
      .then((data) => {
        if (data) {
          AsyncStorage.setItem("token", data.data.login);
          setSignedIn(true);
          navigation.navigate("IsSignedIn");
        }
      })
      .catch((err) => console.log(err));
  };

  // const onSubmit = (data: any) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputGroup
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="votre email"
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputGroup
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="votre password"
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

      <Button onPress={handleSubmit(onSubmit)}>Se connecter</Button>
    </View>
  );
}
