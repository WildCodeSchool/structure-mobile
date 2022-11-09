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
import { RootTabParamList, AuthContextType, User, ValidatorForm } from "../../types";


interface ILoginFormData {
  email: string;
  password: string;
}

type LoginFormData = Pick<User, "email" | "password">;
type ValidatorLogin = ValidatorForm<keyof LoginFormData>

export default function Login() {
  const navigation = useNavigation<RootTabParamList>();

	const validators: any = {
		email: {
			required: {
				value: true,
				message: "L'email est requis"
			},
			pattern: {
				value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
				message: 'Adresse email non valide'
			}
		},
		password: {
			required: {
				value: true,
				message: 'Le mot de passe est requis'
			}
		}
	}

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

  return (
    <View>
      <Controller
        control={control}
        rules={
          validators.email
        }
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
      {errors.email?.message && <Text>{errors.email?.message}</Text>}

      <Controller
        control={control}
        rules={
          validators.password
        }
        render={({ field: { onChange, onBlur, value } }) => (
          <InputGroup
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            password= {true}
            placeholder="votre password"
            validator={validators}
          />
        )}
        name="password"
      />
      {errors.password && <Text>{errors.password?.message}</Text>}

      <Button onPress={handleSubmit(onSubmit)}>Se connecter</Button>
    </View>
  );
}
