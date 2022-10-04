import * as React from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import Constants from "expo-constants";
import { InputGroup } from "../InputGroup";
import { Button } from "../Button";
import { useForm, Controller } from "react-hook-form";
import { LOGIN_MUTATION } from "../../apollo/queries";
import { useMutation } from "@apollo/client";
export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const [mutateLogin, { data, loading, error: ApolloError }] =
    useMutation(LOGIN_MUTATION);

  const onSubmit = handleSubmit((payload) => {
    mutateLogin({
      variables: {
        data: payload,
      },
    })
      .then((data) => {
        if (data) {
          console.log(data);
        }
      })
      .catch((err) => console.log(err));
  });

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
